BEGIN;
-- Some extensions require superuser privileges, so we create them before migration time.
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
ALTER DEFAULT privileges REVOKE EXECUTE ON functions FROM public;
--
CREATE SCHEMA app_public;
CREATE SCHEMA app_private;
CREATE SCHEMA rocket_league;
-- Create role if not exist
-- It's actually rolname, not a typo
-- https://www.postgresql.org/docs/11/view-pg-roles.html
--
-- Postgraphile roles
--

DO $do$
BEGIN
  IF NOT EXISTS (
    SELECT
    FROM
      pg_catalog.pg_roles
    WHERE
      rolname = 'app_anonymous') THEN
  CREATE ROLE app_anonymous;
END IF;
END
$do$;
---
DO $do$
BEGIN
  IF NOT EXISTS (
    SELECT
    FROM
      pg_catalog.pg_roles
    WHERE
      rolname = 'app_person') THEN
  CREATE ROLE app_person;
END IF;
END
$do$;
--
-- Parser roles
--

DO $do$
BEGIN
  IF NOT EXISTS (
    SELECT
    FROM
      pg_catalog.pg_roles
    WHERE
      rolname = 'app_rocket_league') THEN
  CREATE ROLE app_rocket_league LOGIN PASSWORD ':RL_PARSER_PASSWORD';
END IF;
END
$do$;
--
GRANT app_anonymous TO app_postgraphile;
GRANT app_person TO app_postgraphile;
GRANT usage ON SCHEMA app_public TO app_anonymous, app_person, app_postgraphile;
GRANT usage ON SCHEMA rocket_league TO app_rocket_league, app_anonymous, app_person, app_postgraphile;
COMMIT;

