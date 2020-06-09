-- Replay meta data.
CREATE TABLE IF NOT EXISTS rocket_league.meta (
    replay_id text NOT NULL PRIMARY KEY,
    name text,
    map text,
    version integer,
    time integer,
    team_0_score integer,
    team_1_score integer,
    length decimal,
    game_server_id integer,
    server_name text,
    match_guid text,
    team_size integer,
    playlist text,
    is_orange integer,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

DROP TRIGGER IF EXISTS rocket_league_meta_updated_at ON rocket_league.meta;

CREATE TRIGGER rocket_league_meta_updated_at
    BEFORE UPDATE ON rocket_league.meta
    FOR EACH ROW
    EXECUTE PROCEDURE app_private.set_updated_at ();

GRANT SELECT ON TABLE rocket_league.meta TO app_postgraphile, app_person, app_rocket_league;

GRANT UPDATE, DELETE ON TABLE rocket_league.meta TO app_postgraphile;

GRANT INSERT ON TABLE rocket_league.meta TO app_rocket_league;

ALTER TABLE rocket_league.meta disable ROW level SECURITY;

--
CREATE TABLE IF NOT EXISTS rocket_league.stats_players (
    replay_id text REFERENCES rocket_league.meta (replay_id),
    platform_id text,
    name text,
    score integer,
    goals integer,
    assists integer,
    saves integer,
    shots integer,
    possession_time decimal,
    turnovers decimal,
    turnovers_on_my_half decimal,
    won_turnovers decimal,
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
    average_speed decimal,
    average_hit_distance decimal,
    average_distance_from_center decimal,
    total_goals decimal,
    total_hits decimal,
    total_passes decimal,
    total_dribbles decimal,
    total_dribble_conts decimal,
    total_aerials decimal,
    total_clears decimal,
    time_at_slow_speed decimal,
    time_at_super_sonic decimal,
    time_at_boost_speed decimal,
    time_in_front_of_center_of_mass decimal,
    time_behind_center_of_mass decimal,
    time_most_forward_player decimal,
    time_most_back_player decimal,
    time_between_players decimal,
    pass_ decimal,
    passed decimal,
    dribble decimal,
    dribble_continuation decimal,
    shot decimal,
    goal decimal,
    assist decimal,
    assisted decimal,
    save decimal,
    aerial decimal,
    average_duration decimal,
    average_hits decimal,
    count decimal,
    total_kickoffs decimal,
    num_time_boost decimal,
    num_time_cheat decimal,
    num_time_go_to_ball decimal,
    num_time_defend decimal,
    num_time_afk decimal,
    average_boost_used decimal,
    turnovers_on_their_half decimal,
    total_saves decimal,
    num_time_first_touch decimal,
    total_shots decimal,
    total_carries decimal,
    total_flicks decimal,
    longest_carry decimal,
    furthest_carry decimal,
    total_carry_time decimal,
    average_carry_time decimal,
    fastest_carry_speed decimal,
    total_carry_distance decimal,
    average_z_distance decimal,
    average_xy_distance decimal,
    average_ball_z_velocity decimal,
    variance_xy_distance decimal,
    variance_z_distance decimal,
    variance_ball_z_velocity decimal,
    average_carry_speed decimal,
    distance_along_path decimal,
    PRIMARY KEY (replay_id, platform_id)
);

GRANT SELECT ON TABLE rocket_league.stats_players TO app_postgraphile, app_person, app_rocket_league;

GRANT UPDATE, DELETE ON TABLE rocket_league.stats_players TO app_postgraphile;

GRANT INSERT ON TABLE rocket_league.stats_players TO app_rocket_league;

ALTER TABLE rocket_league.stats_players disable ROW level SECURITY;

--
CREATE TABLE IF NOT EXISTS rocket_league.teams (
    team_id text PRIMARY KEY,
    players text[]
);

GRANT SELECT ON TABLE rocket_league.teams TO app_postgraphile, app_person, app_rocket_league;

GRANT UPDATE, DELETE ON TABLE rocket_league.teams TO app_postgraphile;

GRANT INSERT ON TABLE rocket_league.teams TO app_rocket_league;

ALTER TABLE rocket_league.teams disable ROW level SECURITY;

--
CREATE TABLE IF NOT EXISTS rocket_league.stats_teams (
    team_id text REFERENCES rocket_league.teams (team_id),
    replay_id text REFERENCES rocket_league.meta (replay_id),
    name text,
    score decimal,
    possession decimal,
    possession_time decimal,
    turnovers decimal,
    turnovers_on_my_half decimal,
    turnovers_on_their_half decimal,
    won_turnovers decimal,
    hit_counts decimal,
    total_goals decimal,
    total_hits decimal,
    total_passes decimal,
    total_shots decimal,
    total_dribbles decimal,
    total_dribble_conts decimal,
    total_aerials decimal,
    total_clears decimal,
    total_saves decimal,
    center_of_mass decimal,
    positional_tendencies decimal,
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
    average_distance_from_center decimal,
    average_max_distance_from_center decimal,
    time_clumped decimal,
    time_boondocks decimal,
    PRIMARY KEY (replay_id, team_id)
);

GRANT SELECT ON TABLE rocket_league.stats_teams TO app_postgraphile, app_person, app_rocket_league;

GRANT UPDATE, DELETE ON TABLE rocket_league.stats_teams TO app_postgraphile;

GRANT INSERT ON TABLE rocket_league.stats_teams TO app_rocket_league;

ALTER TABLE rocket_league.stats_teams disable ROW level SECURITY;

