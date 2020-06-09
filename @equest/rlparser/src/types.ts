// num_time_defend, num_time_first_touch

interface PlayerStats {
  id: string;
  name: string;
  score: number;
  goals: number;
  assists: number;
  saves: number;
  shots: number;
  possession_time: number;
  turnovers: number;
  turnovers_on_my_half: number;
  turnovers_on_their_half: number;
  won_turnovers: number;
  time_on_ground: number;
  time_low_in_air: number;
  time_high_in_air: number;
  time_in_defending_half: number;
  time_in_attacking_half: number;
  time_in_defending_third: number;
  time_in_neutral_third: number;
  time_in_attacking_third: number;
  time_behind_ball: number;
  time_in_front_ball: number;
  time_near_wall: number;
  time_in_corner: number;
  time_on_wall: number;
  average_speed: number;
  average_hit_distance: number;
  average_distance_from_center: number;
  total_hits: number;
  total_passes: number;
  total_saves: number;
  total_dribbles: number;
  total_dribble_conts: number;
  total_aerials: number;
  total_clears: number;
  time_at_slow_speed: number;
  time_at_super_sonic: number;
  time_at_boost_speed: number;
  time_in_front_of_center_of_mass: number;
  time_behind_center_of_mass: number;
  time_most_forward_player: number;
  time_most_back_player: number;
  time_between_players: number;
  pass_: number;
  passed: number;
  dribble: number;
  dribble_continuation: number;
  shot: number;
  goal: number;
  assist: number;
  assisted: number;
  save: number;
  aerial: number;
  average_duration: number;
  average_hits: number;
  count: number;
  total_kickoffs: number;
  num_time_boost: number;
  num_time_cheat: number;
  num_time_defend?: number;
  num_time_first_touch?: number;
  num_time_go_to_ball: number;
  average_boost_used: number;
  
}

interface TeamStats {
  score: number;
  possession_time: number;
  turnovers: number;
  turnovers_on_my_half: number;
  turnovers_on_their_half: number;
  won_turnovers: number;
  total_hits: number;
  total_goals: number;
  total_passes: number;
  total_saves: number;
  total_shots: number;
  total_dribbles: number;
  total_dribble_conts: number;
  total_aerials: number;
  total_clears: number;
  time_on_ground: number;
  time_low_in_air: number;
  time_high_in_air: number;
  time_in_defending_half: number;
  time_in_attacking_half: number;
  time_in_defending_third: number;
  time_in_neutral_third: number;
  time_in_attacking_third: number;
  time_behind_ball: number;
  time_in_front_ball: number;
  time_near_wall: number;
  time_in_corner: number;
  time_on_wall: number;
  average_distance_from_center: number;
  average_max_distance_from_center: number;
  time_clumped: number;
  time_boondocks: number;
}

interface ParsedReplay {
  id: string;
  name: string;
  map: string;
  version: string;
  time: number;
  team_0_score: number;
  team_1_score: number;
  length: number;
  game_server_id: string;
  server_name: string;
  match_guid: string;
  team_size: number;
  playlist: number;
  player_stats: Array<PlayerStats>;
  team_0_players: Array<string>;
  team_0_stats: TeamStats;
  team_1_players: Array<string>;
  team_1_stats: TeamStats;
}