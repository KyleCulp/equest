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
-- DROP TRIGGER IF EXISTS rocket_league_carball_replay_meta_updated_at ON rocket_league.carball_replay_meta;
-- CREATE TRIGGER rocket_league_carball_replay_meta_updated_at
--   BEFORE UPDATE ON rocket_league.carball_replay_meta
--   FOR EACH ROW
--   EXECUTE PROCEDURE app_private.set_updated_at ();
-- GRANT SELECT ON TABLE rocket_league.carball_replay_meta TO app_postgraphile, app_person, app_rocket_league;
-- GRANT UPDATE, DELETE ON TABLE rocket_league.carball_replay_meta TO app_postgraphile;
-- GRANT INSERT ON TABLE rocket_league.carball_replay_meta TO app_rocket_league;
-- Replay meta data.

CREATE TABLE IF NOT EXISTS rocket_league.carball_replay_meta (
  replayId text NOT NULL PRIMARY KEY,
  name text,
  map text,
  version integer,
  time text,
  frames integer,
  goals json[],
  demos json[],
  primaryPlayer text,
  length decimal,
  serverName text,
  gameServerId text,
  matchGuid text,
  playlist text,
  teamSize integer,
  team0Score integer,
  team1Score integer,
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);

DROP TRIGGER IF EXISTS rocket_league_carball_replay_meta_updated_at ON rocket_league.carball_replay_meta;

CREATE TRIGGER rocket_league_carball_replay_meta_updated_at
  BEFORE UPDATE ON rocket_league.carball_replay_meta
  FOR EACH ROW
  EXECUTE PROCEDURE app_private.set_updated_at ();

GRANT SELECT ON TABLE rocket_league.carball_replay_meta TO app_postgraphile, app_person, app_anonymous;

GRANT UPDATE, DELETE ON TABLE rocket_league.carball_replay_meta TO app_postgraphile;

GRANT INSERT ON TABLE rocket_league.carball_replay_meta TO app_rocket_league;

ALTER TABLE rocket_league.carball_replay_meta enable ROW level SECURITY;

DROP POLICY IF EXISTS select_carball_replay_meta ON rocket_league.carball_replay_meta;

CREATE POLICY select_carball_replay_meta ON rocket_league.carball_replay_meta FOR SELECT USING (app_public.can_access_schema ('rocket_league'));

--
--
--
-- CREATE TABLE IF NOT EXISTS rocket_league.carball_player_stats (
--   replay_id text REFERENCES rocket_league.carball_replay_meta (replay_id),
--   platform_id text,
--   name text,
--   score integer,
--   goals integer,
--   assists integer,
--   saves integer,
--   shots integer,
--   turnovers decimal,
--   turnovers_on_my_half decimal,
--   turnovers_on_their_half decimal,
--   wasted_collection decimal,
--   won_turnovers decimal,
--   average_speed decimal,
--   average_hit_distance decimal,
--   average_distance_from_center decimal,
--   average_boost_level decimal,
--   average_boost_used decimal,
--   time_on_ground decimal,
--   time_on_wall decimal,
--   time_low_in_air decimal,
--   time_high_in_air decimal,
--   time_in_defending_half decimal,
--   time_in_attacking_half decimal,
--   time_in_defending_third decimal,
--   time_in_neutral_third decimal,
--   time_in_attacking_third decimal,
--   time_behind_ball decimal,
--   time_in_front_ball decimal,
--   time_near_wall decimal,
--   time_in_corner decimal,
--   time_at_slow_speed decimal,
--   time_at_super_sonic decimal,
--   time_at_boost_speed decimal,
--   time_in_front_of_center_of_mass decimal,
--   time_most_forward_player decimal,
--   time_most_back_player decimal,
--   time_between_players decimal,
--   time_full_boost decimal,
--   time_low_boost decimal,
--   time_no_boost decimal,
--   time_closest_to_ball decimal,
--   time_close_to_ball decimal,
--   time_in_game decimal,
--   time_furthest_from_ball decimal,
--   num_time_boost decimal,
--   num_time_cheat decimal,
--   num_time_go_to_ball decimal,
--   num_time_defend decimal,
--   num_time_afk decimal,
--   num_time_first_touch decimal,
--   num_small_boosts decimal,
--   num_large_boosts decimal,
--   ball_hit_forward decimal,
--   possession_time decimal,
--   count decimal,
--   boost_usage decimal,
--   total_hits decimal,
--   total_passes decimal,
--   total_dribbles decimal,
--   total_dribble_conts decimal,
--   total_aerials decimal,
--   total_clears decimal,
--   total_kickoffs decimal,
--   total_carries decimal,
--   total_flicks decimal,
--   total_carry_time decimal,
--   total_carry_distance decimal,
--   longest_carry decimal,
--   furthest_carry decimal,
--   average_carry_time decimal,
--   fastest_carry_speed decimal,
--   average_z_distance decimal,
--   average_ball_z_velocity decimal,
--   variance_z_distance decimal,
--   variance_ball_z_velocity decimal,
--   average_carry_speed decimal,
--   distance_along_path decimal,
--   first_frame_in_game decimal,
--   is_bot boolean,
--   camera_settings json,
--   control_config json,
--   player_items json,
--   is_orange boolean,
-- );

CREATE TABLE IF NOT EXISTS rocket_league.carball_player_stats (
  replay_id text NOT NULL REFERENCES rocket_league.carball_replay_meta (replay_id),
  platform_id text NOT NULL,
  PRIMARY KEY (replay_id, platform_id),
  name text,
  titleId numeric,
  score numeric,
  goals numeric,
  assists numeric,
  saves numeric,
  shots numeric,
  cameraSettings_stiffness numeric,
  cameraSettings_height numeric,
  cameraSettings_transitionSpeed numeric,
  cameraSettings_pitch numeric,
  cameraSettings_swivelSpeed numeric,
  cameraSettings_fieldOfView numeric,
  cameraSettings_distance numeric,
  loadout_banner numeric,
  loadout_boost numeric,
  loadout_car numeric,
  loadout_goalExplosion numeric,
  loadout_skin numeric,
  loadout_trail numeric,
  loadout_wheels numeric,
  loadout_version numeric,
  loadout_topper numeric,
  loadout_antenna numeric,
  loadout_engineAudio numeric,
  loadout_goalExplosionPaint numeric,
  loadout_wheelsPaint numeric,
  loadout_primaryColor numeric,
  loadout_accentColor numeric,
  loadout_primaryFinish numeric,
  loadout_accentFinish numeric,
  loadout_avatarBorderUserColor numeric,
  boostUsage numeric,
  numSmallBoosts numeric,
  numLargeBoosts numeric,
  wastedCollection numeric,
  wastedUsage numeric,
  timeFullBoost numeric,
  timeLowBoost numeric,
  timeNoBoost numeric,
  numStolenBoosts numeric,
  averageBoostLevel numeric,
  wastedBig numeric,
  wastedSmall numeric,
  ballHitForward numeric,
  ballHitBackward numeric,
  timeClosestToBall numeric,
  timeFurthestFromBall numeric,
  timeCloseToBall numeric,
  timeClosestToTeamCenter numeric,
  timeFurthestFromTeamCenter numeric,
  possessionTime numeric,
  turnovers numeric,
  turnoversOnMyHalf numeric,
  turnoversOnTheirHalf numeric,
  wonTurnovers numeric,
  timeOnGround numeric,
  timeLowInAir numeric,
  timeHighInAir numeric,
  timeInDefendingHalf numeric,
  timeInAttackingHalf numeric,
  timeInDefendingThird numeric,
  timeInNeutralThird numeric,
  timeInAttackingThird numeric,
  timeBehindBall numeric,
  timeInFrontBall numeric,
  timeNearWall numeric,
  timeInCorner numeric,
  timeOnWall numeric,
  averageSpeed numeric,
  averageHitDistance numeric,
  averageDistanceFromCenter numeric,
  totalHits numeric,
  totalPasses numeric,
  totalDribbles numeric,
  totalDribbleConts numeric,
  totalAerials numeric,
  totalClears numeric,
  isKeyboard boolean,
  analogueSteeringInputPercent numeric,
  analogueThrottleInputPercent numeric,
  timeAtSlowSpeed numeric,
  timeAtSuperSonic numeric,
  timeAtBoostSpeed numeric,
  timeInFrontOfCenterOfMass numeric,
  timeBehindCenterOfMass numeric,
  timeMostForwardPlayer numeric,
  timeMostBackPlayer numeric,
  timeBetweenPlayers numeric,
  pass numeric,
  shot numeric,
  goal numeric,
  assist numeric,
  assisted numeric,
  save numeric,
  count numeric,
  totalCarries numeric,
  longestCarry text,
  furthestCarry text,
  totalCarryTime text,
  averageCarryTime text,
  fastestCarrySpeed text,
  totalCarryDistance text,
  averageZDistance text,
  averageXyDistance text,
  averageBallZVelocity text,
  varianceXyDistance text,
  varianceZDistance text,
  varianceBallZVelocity text,
  averageCarrySpeed text,
  distanceAlongPath text,
  totalKickoffs numeric,
  numTimeBoost numeric,
  numTimeGoToBall numeric,
  numTimeFirstTouch numeric,
  averageBoostUsed text,
  isBot boolean,
  timeInGame text,
  firstFrameInGame numeric,
  team text
);

GRANT SELECT ON TABLE rocket_league.carball_player_stats TO app_postgraphile, app_person, app_rocket_league, app_anonymous;

GRANT UPDATE, DELETE ON TABLE rocket_league.carball_player_stats TO app_postgraphile;

GRANT INSERT ON TABLE rocket_league.carball_player_stats TO app_rocket_league;

ALTER TABLE rocket_league.carball_player_stats enable ROW level SECURITY;

DROP POLICY IF EXISTS select_player_stats ON rocket_league.carball_player_stats;

CREATE POLICY select_player_stats ON rocket_league.carball_player_stats FOR SELECT USING (app_public.can_access_schema ('rocket_league'));

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
