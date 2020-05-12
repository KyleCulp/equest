--
-- PostgreSQL database dump
--

-- Dumped from database version 11.7
-- Dumped by pg_dump version 11.7 (Debian 11.7-2.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: app_private; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA app_private;


--
-- Name: app_public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA app_public;


--
-- Name: rocket_league; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA rocket_league;


--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: user_account; Type: TABLE; Schema: app_public; Owner: -
--

CREATE TABLE app_public.user_account (
    user_id uuid DEFAULT public.uuid_generate_v1mc() NOT NULL,
    username text,
    email_confirmed boolean DEFAULT false NOT NULL,
    roles text DEFAULT 'user'::text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    CONSTRAINT user_account_username_check CHECK ((char_length(username) <= 32))
);


--
-- Name: TABLE user_account; Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON TABLE app_public.user_account IS 'A user’s core account';


--
-- Name: COLUMN user_account.user_id; Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON COLUMN app_public.user_account.user_id IS 'Primary unique identifier for a user. Autogenerated.';


--
-- Name: COLUMN user_account.username; Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON COLUMN app_public.user_account.username IS 'The user’s username. Can be null.';


--
-- Name: COLUMN user_account.email_confirmed; Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON COLUMN app_public.user_account.email_confirmed IS 'The status of users confirmed email.';


--
-- Name: COLUMN user_account.roles; Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON COLUMN app_public.user_account.roles IS 'The users role.';


--
-- Name: COLUMN user_account.created_at; Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON COLUMN app_public.user_account.created_at IS 'The time this person was created.';


--
-- Name: COLUMN user_account.updated_at; Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON COLUMN app_public.user_account.updated_at IS 'The time this person was last updated.';


--
-- Name: authenticate_by_email(text, text); Type: FUNCTION; Schema: app_private; Owner: -
--

CREATE FUNCTION app_private.authenticate_by_email(email text, password text) RETURNS app_public.user_account
    LANGUAGE plpgsql STRICT SECURITY DEFINER
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
$$;


--
-- Name: FUNCTION authenticate_by_email(email text, password text); Type: COMMENT; Schema: app_private; Owner: -
--

COMMENT ON FUNCTION app_private.authenticate_by_email(email text, password text) IS 'Internal function to be called by postgraphile`s resolvers.';


--
-- Name: authenticate_by_username(text, text); Type: FUNCTION; Schema: app_private; Owner: -
--

CREATE FUNCTION app_private.authenticate_by_username(username text, password text) RETURNS app_public.user_account
    LANGUAGE plpgsql STRICT SECURITY DEFINER
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
$$;


--
-- Name: FUNCTION authenticate_by_username(username text, password text); Type: COMMENT; Schema: app_private; Owner: -
--

COMMENT ON FUNCTION app_private.authenticate_by_username(username text, password text) IS 'Internal function to be called by postgraphile`s resolvers.';


--
-- Name: set_updated_at(); Type: FUNCTION; Schema: app_private; Owner: -
--

CREATE FUNCTION app_private.set_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  new.updated_at := CURRENT_TIMESTAMP;
  RETURN new;
END;
$$;


--
-- Name: current_person(); Type: FUNCTION; Schema: app_public; Owner: -
--

CREATE FUNCTION app_public.current_person() RETURNS app_public.user_account
    LANGUAGE sql STABLE
    AS $$
  SELECT
    *
  FROM
    app_public.user_account
  WHERE
    -- Cast current_setting to UUID, by default it returns a string
    user_id = current_setting('jwt.claims.user_id')::UUID
$$;


--
-- Name: FUNCTION current_person(); Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON FUNCTION app_public.current_person() IS 'Returns the user currently in the session.';


--
-- Name: register_user(text, text, text); Type: FUNCTION; Schema: app_public; Owner: -
--

CREATE FUNCTION app_public.register_user(username text, email text, password text) RETURNS app_public.user_account
    LANGUAGE plpgsql STRICT SECURITY DEFINER
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
$$;


--
-- Name: FUNCTION register_user(username text, email text, password text); Type: COMMENT; Schema: app_public; Owner: -
--

COMMENT ON FUNCTION app_public.register_user(username text, email text, password text) IS 'Register`s a user account, with a username.';


--
-- Name: user_account_private; Type: TABLE; Schema: app_private; Owner: -
--

CREATE TABLE app_private.user_account_private (
    user_id uuid NOT NULL,
    email text,
    password_hash text NOT NULL,
    updated_at timestamp without time zone DEFAULT now()
);


--
-- Name: TABLE user_account_private; Type: COMMENT; Schema: app_private; Owner: -
--

COMMENT ON TABLE app_private.user_account_private IS 'Private information about a person’s account.';


--
-- Name: COLUMN user_account_private.user_id; Type: COMMENT; Schema: app_private; Owner: -
--

COMMENT ON COLUMN app_private.user_account_private.user_id IS 'The id of the person associated with this account.';


--
-- Name: COLUMN user_account_private.email; Type: COMMENT; Schema: app_private; Owner: -
--

COMMENT ON COLUMN app_private.user_account_private.email IS 'The email address of the person.';


--
-- Name: COLUMN user_account_private.password_hash; Type: COMMENT; Schema: app_private; Owner: -
--

COMMENT ON COLUMN app_private.user_account_private.password_hash IS 'A hash of the person’s password.';


--
-- Name: user_account_private user_account_private_email_key; Type: CONSTRAINT; Schema: app_private; Owner: -
--

ALTER TABLE ONLY app_private.user_account_private
    ADD CONSTRAINT user_account_private_email_key UNIQUE (email);


--
-- Name: user_account_private user_account_private_pkey; Type: CONSTRAINT; Schema: app_private; Owner: -
--

ALTER TABLE ONLY app_private.user_account_private
    ADD CONSTRAINT user_account_private_pkey PRIMARY KEY (user_id);


--
-- Name: user_account user_account_pkey; Type: CONSTRAINT; Schema: app_public; Owner: -
--

ALTER TABLE ONLY app_public.user_account
    ADD CONSTRAINT user_account_pkey PRIMARY KEY (user_id);


--
-- Name: user_account user_account_username_key; Type: CONSTRAINT; Schema: app_public; Owner: -
--

ALTER TABLE ONLY app_public.user_account
    ADD CONSTRAINT user_account_username_key UNIQUE (username);


--
-- Name: user_account_private user_account_private_updated_at; Type: TRIGGER; Schema: app_private; Owner: -
--

CREATE TRIGGER user_account_private_updated_at BEFORE UPDATE ON app_private.user_account_private FOR EACH ROW EXECUTE PROCEDURE app_private.set_updated_at();


--
-- Name: user_account user_account_updated_at; Type: TRIGGER; Schema: app_public; Owner: -
--

CREATE TRIGGER user_account_updated_at BEFORE UPDATE ON app_public.user_account FOR EACH ROW EXECUTE PROCEDURE app_private.set_updated_at();


--
-- Name: user_account_private user_account_private_user_id_fkey; Type: FK CONSTRAINT; Schema: app_private; Owner: -
--

ALTER TABLE ONLY app_private.user_account_private
    ADD CONSTRAINT user_account_private_user_id_fkey FOREIGN KEY (user_id) REFERENCES app_public.user_account(user_id) ON DELETE CASCADE;


--
-- Name: user_account select_user_account; Type: POLICY; Schema: app_public; Owner: -
--

CREATE POLICY select_user_account ON app_public.user_account FOR SELECT USING (true);


--
-- Name: user_account; Type: ROW SECURITY; Schema: app_public; Owner: -
--

ALTER TABLE app_public.user_account ENABLE ROW LEVEL SECURITY;

--
-- Name: TABLE user_account; Type: ACL; Schema: app_public; Owner: -
--

GRANT SELECT ON TABLE app_public.user_account TO app_anonymous;
GRANT SELECT,DELETE,UPDATE ON TABLE app_public.user_account TO app_person;


--
-- Name: FUNCTION authenticate_by_email(email text, password text); Type: ACL; Schema: app_private; Owner: -
--

REVOKE ALL ON FUNCTION app_private.authenticate_by_email(email text, password text) FROM PUBLIC;


--
-- Name: FUNCTION authenticate_by_username(username text, password text); Type: ACL; Schema: app_private; Owner: -
--

REVOKE ALL ON FUNCTION app_private.authenticate_by_username(username text, password text) FROM PUBLIC;


--
-- Name: FUNCTION set_updated_at(); Type: ACL; Schema: app_private; Owner: -
--

REVOKE ALL ON FUNCTION app_private.set_updated_at() FROM PUBLIC;


--
-- Name: FUNCTION current_person(); Type: ACL; Schema: app_public; Owner: -
--

REVOKE ALL ON FUNCTION app_public.current_person() FROM PUBLIC;
GRANT ALL ON FUNCTION app_public.current_person() TO app_anonymous;
GRANT ALL ON FUNCTION app_public.current_person() TO app_person;
GRANT ALL ON FUNCTION app_public.current_person() TO app_postgraphile;


--
-- Name: FUNCTION register_user(username text, email text, password text); Type: ACL; Schema: app_public; Owner: -
--

REVOKE ALL ON FUNCTION app_public.register_user(username text, email text, password text) FROM PUBLIC;
GRANT ALL ON FUNCTION app_public.register_user(username text, email text, password text) TO app_anonymous;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE doadmin REVOKE ALL ON FUNCTIONS  FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

