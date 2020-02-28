-- Enter migration here
--
-- Name: meta; Type: TABLE; Schema: public; Owner: devadmin
--
-- Function to check if constraint exists, then execute if it doesn't.
-- Creating constraints is expensive, so you can't do it in production
-- https://stackoverflow.com/questions/6801919/postgres-add-constraint-if-it-doesnt-already-exist

CREATE OR REPLACE FUNCTION app_public.create_constraint_if_not_exists (t_schema text, t_name text, c_name text, constraint_sql text)
  RETURNS void
  AS $$
BEGIN
  -- Look for our constraint
  IF NOT EXISTS (
    SELECT
      constraint_name
    FROM
      information_schema.constraint_table_usage
    WHERE
      table_schema = t_schema
      AND table_name = t_name
      AND constraint_name = c_name) THEN
  EXECUTE constraint_sql;
END IF;
END;
$$
LANGUAGE 'plpgsql';

CREATE TABLE IF NOT EXISTS rocket_league.meta (
  replay_date text NOT NULL,
  replay_id text PRIMARY KEY,
  map_name text,
  server_name text,
  team_0_score integer,
  team_1_score integer,
  replay_length text
);

GRANT SELECT ON TABLE rocket_league.meta TO app_anonymous, app_person;

GRANT UPDATE, DELETE ON TABLE rocket_league.meta TO app_rocket_league;

--
-- Name: player; Type: TABLE; Schema: public; Owner: devadmin
--

CREATE TABLE IF NOT EXISTS rocket_league.player (
  name text,
  player_id text PRIMARY KEY,
  appears_in text
);

--
-- Name: player_stats; Type: TABLE; Schema: public; Owner: devadmin
--

CREATE TABLE IF NOT EXISTS rocket_league.player_stats (
  replay_id text NOT NULL,
  player_name text NOT NULL,
  player_id text,
  score integer,
  goals integer,
  assists integer,
  saves integer,
  shots integer,
  boost_usage numeric,
  small_boosts numeric,
  large_boosts numeric,
  wasted_collection numeric,
  wasted_usage numeric,
  time_full_boost numeric,
  time_low_boost numeric,
  time_no_boost numeric,
  num_stolen_boosts integer,
  average_boost_level numeric,
  wasted_big numeric,
  wasted_small numeric,
  ball_hit_forward numeric,
  ball_hit_backward numeric,
  time_closest_to_ball numeric,
  time_close_to_ball numeric,
  time_closest_to_team_center numeric,
  possession_time numeric,
  turnovers numeric,
  turnovers_on_my_half numeric,
  turnovers_on_their_half numeric,
  time_low_in_air numeric,
  time_high_in_air numeric,
  time_in_defending_half numeric,
  time_in_attacking_half numeric,
  time_in_defending_third numeric,
  time_in_neutral_third numeric,
  time_in_attacking_third numeric,
  time_behind_ball numeric,
  time_in_front_ball numeric,
  time_near_wall numeric,
  time_in_corner numeric,
  average_speed numeric,
  average_hit_distance numeric,
  total_hits numeric,
  total_passes numeric,
  time_at_slow_speed numeric,
  time_at_super_sonic numeric,
  time_at_boost_speed numeric,
  time_most_forward_player numeric,
  time_most_back_player numeric,
  time_between_players numeric
);

SELECT
  app_public.create_constraint_if_not_exists (
    --
    'rocket_league',
    'player_stats',
    'player_stats_pkey',
    'ALTER TABLE ONLY rocket_league.player_stats ADD CONSTRAINT player_stats_pkey PRIMARY KEY (replay_id, player_name);'
    --
)
