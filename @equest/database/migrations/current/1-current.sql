-- Enter migration here
CREATE TABLE IF NOT EXISTS app_public.user_account (
  user_id uuid PRIMARY KEY DEFAULT public.uuid_generate_v1mc (),
  username text UNIQUE,
  roles text[] DEFAULT '{"user", "rocket_league"}',
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now(),
  CHECK (char_length(username) <= 32)
);

-- Anyone can read data from this table
GRANT SELECT ON TABLE app_public.user_account TO app_postgraphile, app_person, app_anonymous;

-- Only logged in people can update & delete it.
-- This RBAC helps us differentiate guest from users

GRANT UPDATE, DELETE ON TABLE app_public.user_account TO app_postgraphile, app_person, app_anonymous;

-- RLS policies provide fine-grain security
-- Let anyone select on this row

ALTER TABLE app_public.user_account enable ROW level SECURITY;

DROP POLICY IF EXISTS select_user_account ON app_public.user_account;

CREATE POLICY select_user_account ON app_public.user_account FOR SELECT USING (TRUE);

--
CREATE TABLE IF NOT EXISTS app_private.user_account_private (
  user_id uuid PRIMARY KEY REFERENCES app_public.user_account (user_id) ON DELETE CASCADE,
  email text UNIQUE,
  password_hash text NOT NULL,
  updated_at timestamp DEFAULT now()
);

CREATE OR REPLACE FUNCTION app_private.set_updated_at ()
  RETURNS TRIGGER
  AS $$
BEGIN
  NEW.updated_at := CURRENT_TIMESTAMP;
  RETURN new;
END;
$$
LANGUAGE PLPGSQL;

-- Drop trigger to replace it
DROP TRIGGER IF EXISTS user_account_private_updated_at ON app_private.user_account_private;

CREATE TRIGGER user_account_private_updated_at
  BEFORE UPDATE ON app_private.user_account_private
  FOR EACH ROW
  EXECUTE PROCEDURE app_private.set_updated_at ();

DROP TRIGGER IF EXISTS user_account_updated_at ON app_public.user_account;

CREATE TRIGGER user_account_updated_at
  BEFORE UPDATE ON app_public.user_account
  FOR EACH ROW
  EXECUTE PROCEDURE app_private.set_updated_at ();

CREATE OR REPLACE FUNCTION app_public.register_user (username text, email text, PASSWORD text)
  RETURNS app_public.user_account
  AS $$
DECLARE
  account app_public.user_account;
BEGIN
  INSERT INTO app_public.user_account (username)
    VALUES (username)
  RETURNING
    * INTO account;
  INSERT INTO app_private.user_account_private (user_id, email, password_hash)
    VALUES (account.user_id, email, crypt(PASSWORD, gen_salt('bf')));
  RETURN account;
END;
$$
LANGUAGE PLPGSQL
STRICT
SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION app_public.register_user (text, text, text) TO app_postgraphile;

---
CREATE OR REPLACE FUNCTION app_public.current_person ()
  RETURNS app_public.user_account
  AS $$
  SELECT
    *
  FROM
    app_public.user_account
  WHERE
    -- Cast current_setting to UUID, by default it returns a string
    user_id = current_setting('jwt.claims.user_id')::uuid
$$
LANGUAGE sql
STABLE;

GRANT EXECUTE ON FUNCTION app_public.current_person () TO app_anonymous, app_person, app_postgraphile;

---
-- CREATE OR REPLACE FUNCTION app_public.can_access_schema (SCHEMA text)
--   RETURNS boolean
--   AS $$
--   SELECT
--     TRUE
--   WHERE
--     SCHEMA = ANY (
--       SELECT
--         roles
--       FROM
--         app_public.user_account
--       WHERE
--         user_id = current_setting('jwt.claims.user_id')::uuid);

CREATE OR REPLACE FUNCTION app_public.can_access_schema (schemaRole text)
  RETURNS bool
  AS $$
  SELECT
    EXISTS (
      SELECT
        *
      FROM
        app_public.user_account
      WHERE (user_id = current_setting('jwt.claims.user_id')::uuid)
      AND (schemaRole = ANY (roles)))
$$
LANGUAGE sql
STABLE;

GRANT EXECUTE ON FUNCTION app_public.can_access_schema (text) TO app_anonymous, app_person, app_postgraphile;

-- WHERE
--   user_id = current_setting('jwt.claims.user_id')::uuid
--   SELECT
--     coalesce((
--       SELECT
--         TRUE FROM (unnest(
--             SELECT
--               roles FROM app_public.user_account
--             WHERE
--               user_id = current_setting('jwt.claims.user_id')::uuid)).* --
--       AS u (game)
--     WHERE
--       game LIKE SCHEMA LIMIT 1), FALSE);
--
--   TRUE
-- WHERE
--   SCHEMA = ANY (
--     SELECT
--       roles
--     FROM
--       app_public.user_account
--     WHERE
--       user_id = current_setting('jwt.claims.user_id')::uuid);
-- authenticate_by_email

CREATE OR REPLACE FUNCTION app_private.authenticate_by_email (email text, PASSWORD text)
  RETURNS app_public.user_account
  AS $$
DECLARE
  v_user app_public.user_account;
  v_user_private app_private.user_account_private;
BEGIN
  SELECT
    a.* INTO v_user_private
  FROM
    app_private.user_account_private AS a
  WHERE
    a.email ILIKE authenticate_by_email.email;
  IF v_user_private.password_hash = crypt(authenticate_by_email.password, v_user_private.password_hash) THEN
    SELECT
      b.* INTO v_user
    FROM
      app_public.user_account AS b
    WHERE
      b.user_id = v_user_private.user_id;
    RETURN v_user;
  ELSE
    RETURN NULL;
  END IF;
END;
$$
LANGUAGE plpgsql
STRICT
SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION app_private.authenticate_by_email (text, text) TO app_postgraphile;

--
-- authenticate_by_username

CREATE OR REPLACE FUNCTION app_private.authenticate_by_username (username text, PASSWORD text)
  RETURNS app_public.user_account
  AS $$
DECLARE
  v_user app_public.user_account;
  v_user_private app_private.user_account_private;
BEGIN
  SELECT
    a.* INTO v_user
  FROM
    app_public.user_account AS a
  WHERE
    a.username ILIKE authenticate_by_username.username;
  --
  SELECT
    b.* INTO v_user_private
  FROM
    app_private.user_account_private AS b
  WHERE
    b.user_id = v_user.user_id;
  --
  IF v_user_private.password_hash = crypt(PASSWORD, v_user_private.password_hash) THEN
    SELECT
      b.* INTO v_user
    FROM
      app_public.user_account AS b
    WHERE
      b.user_id = v_user_private.user_id;
    RETURN v_user;
  ELSE
    RETURN NULL;
  END IF;
END;
$$
LANGUAGE plpgsql
STRICT
SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION app_private.authenticate_by_username (text, text) TO app_postgraphile;

