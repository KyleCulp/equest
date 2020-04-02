-- Enter migration here
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

-- Replay meta data.
CREATE TABLE rocket_league.meta (
  replay_date text NOT NULL,
  replay_id text NOT NULL PRIMARY KEY,
  map_name text,
  server_name text,
  team_0_score integer,
  team_1_score integer,
  replay_length text
);

GRANT SELECT ON TABLE rocket_league.meta TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.meta TO app_rocket_league;

-- Player identifiers
CREATE TABLE rocket_league.players (
  username text NOT NULL,
  player_id text PRIMARY KEY,
  appears_in text[]
);

GRANT SELECT ON TABLE rocket_league.players TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.players TO app_rocket_league;

CREATE TABLE rocket_league.base_stats (
  replay_id text,
  player_name text,
  player_id text,
  score integer,
  goals integer,
  assists integer,
  saves integer,
  shots integer,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.base_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.base_stats TO app_rocket_league;

CREATE TABLE rocket_league.boost_stats (
  replay_id text,
  player_name text,
  player_id text,
  boost_usage decimal,
  small_boosts decimal,
  large_boosts decimal,
  wasted_collection decimal,
  wasted_usage decimal,
  time_full_boost decimal,
  time_low_boost decimal,
  time_no_boost decimal,
  num_stolen_boosts integer,
  average_boost_level decimal,
  wasted_big decimal,
  wasted_small decimal,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.boost_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.boost_stats TO app_rocket_league;

CREATE TABLE rocket_league.distance_stats (
  replay_id text,
  player_name text,
  player_id text,
  ball_hit_forward decimal,
  ball_hit_backward decimal,
  time_closest_to_ball decimal,
  time_close_to_ball decimal,
  time_furthest_from_ball decimal,
  time_closest_to_team_center decimal,
  time_furthest_from_team_center decimal,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.distance_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.distance_stats TO app_rocket_league;

CREATE TABLE rocket_league.possession_stats (
  replay_id text,
  player_name text,
  player_id text,
  possession_time decimal,
  turnovers decimal,
  turnovers_on_my_half decimal,
  turnovers_on_their_half decimal,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.possession_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.possession_stats TO app_rocket_league;

CREATE TABLE rocket_league.positional_tendencies_stats (
  replay_id text,
  player_name text,
  player_id text,
  time_low_in_air decimal,
  time_high_in_air decimal,
  time_in_defending_half decimal,
  time_in_attacking_half decimal,
  time_in_defending_third decimal,
  time_in_neutral_third decimal,
  time_in_attacking_third decimal,
  time_behind_ball decimal,
  time_in_front_ball decimal,
  time_near_wall decimal,
  time_in_corner decimal,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.positional_tendencies_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.positional_tendencies_stats TO app_rocket_league;

CREATE TABLE rocket_league.avg_stats (
  replay_id text,
  player_name text,
  player_id text,
  average_speed decimal,
  average_hit_distance decimal,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.avg_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.avg_stats TO app_rocket_league;

CREATE TABLE rocket_league.hit_counts_stats (
  replay_id text,
  player_name text,
  player_id text,
  total_hits decimal,
  total_passes decimal,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.hit_counts_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.hit_counts_stats TO app_rocket_league;

CREATE TABLE rocket_league.speed_stats (
  replay_id text,
  player_name text,
  player_id text,
  time_at_slow_speed decimal,
  time_at_super_sonic decimal,
  time_at_boost_speed decimal,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.speed_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.speed_stats TO app_rocket_league;

CREATE TABLE rocket_league.relative_pos_stats (
  replay_id text,
  player_name text,
  player_id text,
  time_most_forward_player decimal,
  time_most_back_player decimal,
  time_between_players decimal,
  PRIMARY KEY (replay_id, player_id)
);

GRANT SELECT ON TABLE rocket_league.relative_pos_stats TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.relative_pos_stats TO app_rocket_league;

CREATE TABLE rocket_league.team_possession (
  replay_id text,
  team text,
  possession_time decimal,
  turnovers decimal,
  turnovers_on_my_half decimal,
  turnovers_on_their_half decimal,
  won_turnovers decimal,
  PRIMARY KEY (replay_id, team)
);

GRANT SELECT ON TABLE rocket_league.team_possession TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.team_possession TO app_rocket_league;

CREATE TABLE rocket_league.team_hit_counts (
  replay_id text,
  team text,
  total_hits integer,
  total_passes integer,
  total_saves integer,
  total_shots integer,
  total_dribbles integer,
  total_aerials integer,
  PRIMARY KEY (replay_id, team)
);

GRANT SELECT ON TABLE rocket_league.team_hit_counts TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.team_hit_counts TO app_rocket_league;

CREATE TABLE rocket_league.team_positional_tendencies (
  replay_id text,
  team text,
  time_on_ground decimal,
  time_low_in_air decimal,
  time_high_in_air decimal,
  time_in_defending_half decimal,
  time_in_attacking_half decimal,
  time_in_defending_third decimal,
  time_in_neutral_third decimal,
  time_in_attacking_third decimal,
  time_behind_ball decimal,
  time_in_front_ball decimal,
  time_near_wall decimal,
  time_in_corner decimal,
  time_on_wall decimal,
  PRIMARY KEY (replay_id, team)
);

GRANT SELECT ON TABLE rocket_league.team_positional_tendencies TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.team_positional_tendencies TO app_rocket_league;

CREATE TABLE rocket_league.team_central_mass (
  replay_id text,
  team text,
  time_clumped decimal,
  time_boondocks decimal,
  PRIMARY KEY (replay_id, team)
);

GRANT SELECT ON TABLE rocket_league.team_central_mass TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.team_central_mass TO app_rocket_league;

-- Geo data for each player and ball in match.
CREATE TABLE rocket_league.geo_data (
  replay_id text,
  data jsonb
);

GRANT SELECT ON TABLE rocket_league.geo_data TO app_anonymous, app_person;

GRANT INSERT ON TABLE rocket_league.geo_data TO app_rocket_league;

CREATE TABLE rocket_league.teams (
  team_id text,
  players text[],
  PRIMARY KEY (team_id)
);

GRANT SELECT ON TABLE rocket_league.teams TO app_anonymous, app_rocket_league, app_person;

GRANT INSERT ON TABLE rocket_league.teams TO app_rocket_league;

