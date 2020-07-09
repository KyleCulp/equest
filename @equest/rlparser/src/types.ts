/*
 * This file holds the types of a parsed JSON replay file
 * [index: string]: any; let's me index the ParsedReplay type
 * It also lets other fields through, which is a bit of an issue probably
 */ 

export interface ControlConfig {
  is_keyboard?: boolean;
  analogue_steering_input_percent?: number;
  analogue_throttle_input_percent?: number;
  [index: string]: any; 
}

export interface CameraSettings {
  stiffness?: number;
  height?: number;
  transition_speed?: number;
  pitch?: number;
  swivel_speed?: number;
  field_of_view?: number;
  distance?: number;
  [index: string]: any;
}

export interface PlayerItems {
  banner?: number;
  boost?: number;
  car?: number;
  goal_explosion?: number;
  skin?: number;
  trail?: number;
  wheels?: number;
  version?: number;
  topper?: number;
  antenna?: number;
  engine_audio?: number;
  primary_color?: number;
  accent_color?: number;
  primary_finish?: number;
  accent_finish?: number;
  avatar_border_user_color?: number;
  title_id?: number;
  trail_paint?: number;
  boost_paint?: number;
  wheels_paint?: number;
  goal_explosion_paint?: number;
  [index: string]: any;
}

export interface PlayerStats extends CameraSettings, PlayerItems, ControlConfig {
  id: string;
  name?: string;
  score?: number;
  goals?: number;
  assists?: number;
  saves?: number;
  shots?: number;
  is_orange?: number;
  boost_usage?: number;
  num_small_boosts?: number;
  num_large_boosts?: number;
  wasted_collection?: number;
  time_full_boost?: number;
  time_no_boost?: number;
  average_boost_level?: number;
  possession_time?: number;
  turnovers?: number;
  turnovers_on_my_half?: number;
  turnovers_on_their_half?: number;
  won_turnovers?: number;
  time_on_ground?: number;
  time_low_in_air?: number;
  time_high_in_air?: number;
  time_in_defending_half?: number;
  time_in_attacking_half?: number;
  time_in_defending_third?: number;
  time_in_neutral_third?: number;
  time_in_attacking_third?: number;
  time_behind_ball?: number;
  time_in_front_ball?: number;
  time_near_wall?: number;
  time_in_corner?: number;
  time_on_wall?: number;
  time_low_boost?: number;
  ball_hit_forward?: number;
  time_closest_to_ball?: number;
  time_furthest_from_ball?: number;
  time_close_to_ball?: number;
  time_most_forward_player?: number;
  time_most_back_player?: number;
  time_between_players?: number;
  average_speed?: number;
  average_hit_distance?: number;
  average_distance_from_center?: number;
  total_hits?: number;
  total_passes?: number;
  total_dribbles?: number;
  total_dribble_conts?: number;
  total_aerials?: number;
  total_clears?: number;
  time_at_slow_speed?: number;
  time_at_super_sonic?: number;
  time_at_boost_speed?: number;
  count?: number;
  total_carries?: number;
  total_flicks?: number;
  longest_carry?: number;
  furthest_carry?: number;
  total_carry_time?: number;
  average_carry_time?: number;
  fastest_carry_speed?: number;
  total_carry_distance?: number;
  average_z_distance?: number;
  average_ball_z_velocity?: number;
  variance_z_distance?: number;
  variance_ball_z_velocity?: number;
  average_carry_speed?: number;
  distance_along_path?: number;
  total_kickoffs?: number;
  num_time_cheat?: number;
  num_time_go_to_ball?: number;
  num_time_first_touch?: number;
  num_time_boost?: number;
  average_boost_used?: number;
  num_time_defend?: number;
  is_bot?: false;
  time_in_game?: number;
  num_time_afk?: number;
  first_frame_in_game?: number;
  [index: string]: any;
}

export interface TeamStats {
  score?: number;
  is_orange?: boolean;
  possession_time?: number;
  turnovers?: number;
  turnovers_on_my_half?: number;
  turnovers_on_their_half?: number;
  won_turnovers?: number;
  total_hits?: number;
  total_goals?: number;
  total_passes?: number;
  total_saves?: number;
  total_shots?: number;
  total_dribbles?: number;
  total_dribble_conts?: number;
  total_aerials?: number;
  total_clears?: number;
  time_on_ground?: number;
  time_low_in_air?: number;
  time_high_in_air?: number;
  time_in_defending_half?: number;
  time_in_attacking_half?: number;
  time_in_defending_third?: number;
  time_in_neutral_third?: number;
  time_in_attacking_third?: number;
  time_behind_ball?: number;
  time_in_front_ball?: number;
  time_near_wall?: number;
  time_in_corner?: number;
  time_on_wall?: number;
  average_distance_from_center?: number;
  average_max_distance_from_center?: number;
  time_clumped?: number;
  time_boondocks?: number;
  [index: string]: any;
}

export interface ParsedReplay {
  id: string;
  name?: string;
  map?: string;
  version?: number;
  time?: number;
  frames?: number;
  team_0_score?: number;
  team_1_score?: number;
  length?: number;
  game_server_id?: string;
  server_name?: string;
  match_guid?: string;
  team_size?: number;
  playlist?: number;
  player_stats: Array<PlayerStats>;
  team_0_players: Array<string>;
  team_0_stats: TeamStats;
  team_1_players: Array<string>;
  team_1_stats: TeamStats;
  [index: string]: any;
}
