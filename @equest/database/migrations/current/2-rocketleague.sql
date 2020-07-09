GRANT usage ON SCHEMA rocket_league TO app_postgraphile, app_person, app_anonymous;

-- CREATE TABLE IF NOT EXISTS rocket_league.uploaded_replays (
--   replay_id text NOT NULL PRIMARY KEY,
--   team_size decimal,
--   team_0_score decimal,
--   team_1_score decimal,
--   replay_version decimal,
--   game_version decimal,
--   build_id decimal,
--   build_version text,
--   map text,
--   date text,
--   frame_count decimal,
--   player_name text,
--   created_at timestamp DEFAULT now(),
--   updated_at timestamp DEFAULT now()
-- );

-- DROP TRIGGER IF EXISTS rocket_league_replay_meta_updated_at ON rocket_league.replay_meta;
-- CREATE TRIGGER rocket_league_replay_meta_updated_at
--   BEFORE UPDATE ON rocket_league.replay_meta
--   FOR EACH ROW
--   EXECUTE PROCEDURE app_private.set_updated_at ();
-- GRANT SELECT ON TABLE rocket_league.replay_meta TO app_postgraphile, app_person, app_rocket_league;
-- GRANT UPDATE, DELETE ON TABLE rocket_league.replay_meta TO app_postgraphile;
-- GRANT INSERT ON TABLE rocket_league.replay_meta TO app_rocket_league;
-- Replay meta data.

CREATE TABLE IF NOT EXISTS rocket_league.replay_meta (
  replay_id text NOT NULL PRIMARY KEY,
  name text,
  map text,
  version integer,
  time integer,
  frames integer,
  team_size integer,
  team_0_score integer,
  team_1_score integer,
  team_0_players text[],
  team_1_players text[],
  length decimal,
  game_server_id text,
  server_name text,
  match_guid text,
  playlist integer,
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);

DROP TRIGGER IF EXISTS rocket_league_replay_meta_updated_at ON rocket_league.replay_meta;

CREATE TRIGGER rocket_league_replay_meta_updated_at
  BEFORE UPDATE ON rocket_league.replay_meta
  FOR EACH ROW
  EXECUTE PROCEDURE app_private.set_updated_at ();

GRANT SELECT ON TABLE rocket_league.replay_meta TO app_postgraphile, app_person, app_anonymous;

GRANT UPDATE, DELETE ON TABLE rocket_league.replay_meta TO app_postgraphile;

GRANT INSERT ON TABLE rocket_league.replay_meta TO app_rocket_league;

ALTER TABLE rocket_league.replay_meta enable ROW level SECURITY;

DROP POLICY IF EXISTS select_replay_meta ON rocket_league.replay_meta;

CREATE POLICY select_replay_meta ON rocket_league.replay_meta FOR SELECT USING (app_public.can_access_schema ('rocket_league'));

--
CREATE TABLE IF NOT EXISTS rocket_league.player_stats (
  replay_id text REFERENCES rocket_league.replay_meta (replay_id),
  platform_id text,
  name text,
  score integer,
  goals integer,
  assists integer,
  saves integer,
  shots integer,
  turnovers decimal,
  turnovers_on_my_half decimal,
  turnovers_on_their_half decimal,
  wasted_collection decimal,
  won_turnovers decimal,
  average_speed decimal,
  average_hit_distance decimal,
  average_distance_from_center decimal,
  average_boost_level decimal,
  average_boost_used decimal,
  time_on_ground decimal,
  time_on_wall decimal,
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
  time_at_slow_speed decimal,
  time_at_super_sonic decimal,
  time_at_boost_speed decimal,
  time_in_front_of_center_of_mass decimal,
  time_most_forward_player decimal,
  time_most_back_player decimal,
  time_between_players decimal,
  time_full_boost decimal,
  time_low_boost decimal,
  time_no_boost decimal,
  time_closest_to_ball decimal,
  time_close_to_ball decimal,
  time_in_game decimal,
  time_furthest_from_ball decimal,
  num_time_boost decimal,
  num_time_cheat decimal,
  num_time_go_to_ball decimal,
  num_time_defend decimal,
  num_time_afk decimal,
  num_time_first_touch decimal,
  num_small_boosts decimal,
  num_large_boosts decimal,
  ball_hit_forward decimal,
  possession_time decimal,
  count decimal,
  boost_usage decimal,
  total_hits decimal,
  total_passes decimal,
  total_dribbles decimal,
  total_dribble_conts decimal,
  total_aerials decimal,
  total_clears decimal,
  total_kickoffs decimal,
  total_carries decimal,
  total_flicks decimal,
  total_carry_time decimal,
  total_carry_distance decimal,
  longest_carry decimal,
  furthest_carry decimal,
  average_carry_time decimal,
  fastest_carry_speed decimal,
  average_z_distance decimal,
  average_ball_z_velocity decimal,
  variance_z_distance decimal,
  variance_ball_z_velocity decimal,
  average_carry_speed decimal,
  distance_along_path decimal,
  first_frame_in_game decimal,
  is_bot boolean,
  camera_settings json,
  control_config json,
  player_items json,
  is_orange boolean,
  PRIMARY KEY (replay_id, platform_id)
);

GRANT SELECT ON TABLE rocket_league.player_stats TO app_postgraphile, app_person, app_rocket_league, app_anonymous;

GRANT UPDATE, DELETE ON TABLE rocket_league.player_stats TO app_postgraphile;

GRANT INSERT ON TABLE rocket_league.player_stats TO app_rocket_league;

ALTER TABLE rocket_league.player_stats enable ROW level SECURITY;

DROP POLICY IF EXISTS select_player_stats ON rocket_league.player_stats;

CREATE POLICY select_player_stats ON rocket_league.player_stats FOR SELECT USING (app_public.can_access_schema ('rocket_league'));

-- --
-- CREATE TABLE IF NOT EXISTS rocket_league.teams (
--   team_id uuid PRIMARY KEY DEFAULT public.uuid_generate_v1mc (),
--   players text[],
--   team_size decimal
-- );
-- GRANT SELECT ON TABLE rocket_league.teams TO app_postgraphile, app_person, app_rocket_league, app_anonymous;
-- GRANT UPDATE, DELETE ON TABLE rocket_league.teams TO app_postgraphile;
-- GRANT INSERT ON TABLE rocket_league.teams TO app_rocket_league;
-- ALTER TABLE rocket_league.teams enable ROW level SECURITY;
-- DROP POLICY IF EXISTS select_teams ON rocket_league.teams;
-- CREATE POLICY select_teams ON rocket_league.teams FOR SELECT USING (app_public.can_access_schema ('rocket_league'));
-- --
