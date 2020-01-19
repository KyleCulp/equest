
create table app_public.user_account (
	user_id uuid primary key default public.uuid_generate_v1mc(),
	username text unique,
	email_confirmed boolean not null default false,
	roles text not null default 'user',
	created_at timestamp default now(),
	updated_at timestamp default now(),

	check(char_length(username) <= 32)
);

comment on table app_public.user_account is 'A user’s core account';
comment on column app_public.user_account.user_id is 'Primary unique identifier for a user. Autogenerated.';
comment on column app_public.user_account.username is 'The user’s username. Can be null.';
comment on column app_public.user_account.email_confirmed is 'The status of users confirmed email.';
comment on column app_public.user_account.roles is 'The users role.';
comment on column app_public.user_account.created_at is 'The time this person was created.';
comment on column app_public.user_account.updated_at is 'The time this person was last updated.';

-- Anyone can read data from this table
GRANT SELECT ON TABLE app_public.user_account TO app_anonymous, app_postgraphile;

-- Only logged in people can update & delete it. 
-- This RBAC helps us differentiate guest from users  
GRANT UPDATE, DELETE ON TABLE app_public.user_account TO app_postgraphile;

-- RLS policies provide fine-grain security 

-- Let anyone select on this row
CREATE POLICY select_user_account ON app_public.user_account
    FOR SELECT 
	USING (true);

-- CREATE POLICY update_user_account ON app_public.user_account 
--     FOR UPDATE TO app_postgraphile
--     USING (user_id = current_setting('jwt.claims.user_id', true)::UUID);

-- CREATE POLICY delete_user_account ON app_public.user_account
--     FOR DELETE TO app_account
--     USING (user_id = current_setting('jwt.claims.user_id', true)::UUID);

create table app_private.user_account_private (
	user_id uuid primary key references app_public.user_account(user_id) on delete cascade,
	email text unique,
	password_hash text not null,

	updated_at timestamp default now(),
	check(email ~* '^.+@.+\..+$')
);

comment on table  app_private.user_account_private is 'Private information about a person’s account.';
comment on column app_private.user_account_private.user_id is 'The id of the person associated with this account.';
comment on column app_private.user_account_private.email is 'The email address of the person.';
comment on column app_private.user_account_private.password_hash is 'A hash of the person’s password.';
comment on column app_private.user_account_private.updated_at is 'Last time the table was updated.';

CREATE OR REPLACE FUNCTION app_private.set_updated_at() RETURNS TRIGGER AS $$
BEGIN
	new.updated_at := current_timestamp;
	RETURN new;
END;
$$ LANGUAGE PLPGSQL;

-- Drop trigger to replace it
drop trigger if exists user_account_private_updated_at on app_private.user_account_private;
CREATE trigger user_account_private_updated_at BEFORE UPDATE ON app_private.user_account_private
	FOR EACH ROW
	EXECUTE PROCEDURE app_private.set_updated_at();

drop trigger if exists user_account_updated_at on app_public.user_account;
CREATE trigger user_account_updated_at BEFORE UPDATE ON app_public.user_account
	FOR EACH ROW
	EXECUTE PROCEDURE app_private.set_updated_at();

