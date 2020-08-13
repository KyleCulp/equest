export interface ParsedReplay {
  gameMetadata: GameMetadata;
  players: Player[];
  teams: Team[];
  gameStats: GameStats;
  parties: Party[];
  version: number;
  mutators: Mutators;
}

export interface GameMetadata {
  id: string;
  name: string;
  map: string;
  version: number;
  time: string;
  frames: number;
  score: Score;
  goals?: Goal[];
  demos?: Demo[];
  primaryPlayer: PlatformID;
  length: number;
  gameServerId: string;
  serverName: string;
  matchGuid: string;
  teamSize: number;
  playlist: string;
}

export interface Demo {
  frameNumber: number;
  attackerId: PlatformID;
  victimId: PlatformID;
  isDemo?: boolean;
}

export interface PlatformID {
  id: string;
}

export interface Goal {
  frameNumber: number;
  playerId: PlatformID; // i hate it
}

export interface Score {
  team0Score: number;
  team1Score: number;
}

export interface GameStats {
  hits: Hit[];
  neutralPossessionTime: number;
  bumps: Demo[];
  ballStats: BallStats;
  kickoffs: Kickoff[];
  kickoffStats: KickoffStat[];
  ballCarries: BallCarry[];
}

export interface BallCarry {
  startFrameNumber: number;
  endFrameNumber: number;
  playerId: PlatformID;
  hasFlick: boolean;
  carryTime: number;
  straightLineDistance: number;
  carryStats: CarryStats;
}

export interface CarryStats {
  averageZDistance: number;
  averageXyDistance: EXyDistance;
  averageBallZVelocity: number;
  varianceXyDistance: EXyDistance;
  varianceZDistance: number;
  varianceBallZVelocity: number;
  averageCarrySpeed: number;
  distanceAlongPath: number;
}

export type EXyDistance = number | string;

export interface BallStats {
  positionalTendencies: PositionalTendencies;
  averages: BallStatsAverages;
}

export interface BallStatsAverages {
  averageSpeed: number;
}

export interface Hit {
  frameNumber: number;
  playerId: PlatformID;
  collisionDistance: number;
  ballData: BallData;
  distance?: number;
  distanceToGoal: number;
  nextHitFrameNumber?: number;
  goalNumber: number;
  isKickoff: boolean;
  aerial?: boolean;
  previousHitFrameNumber?: number;
  dribble?: boolean;
  pass?: boolean;
  dribbleContinuation?: boolean;
  goal?: boolean;
  passed?: boolean;
  shot?: boolean;
  clear?: boolean;
  save?: boolean;
  assist?: boolean;
  assisted?: boolean;
}

export interface BallData {
  posX: number;
  posY: number;
  posZ: number;
}

export interface KickoffStat {
  startFrame: number;
  touchFrame: number;
  touchTime: number;
  type: string;
  touch: Touch;
}

export interface Touch {
  players: TouchPlayer[];
  kickoffGoal?: number;
  firstTouchPlayer: PlatformID;
}

export interface TouchPlayer {
  player: PlatformID;
  kickoffPosition: string;
  touchPosition: string;
  playerPosition: BallData;
  boost: number;
  ballDist: number;
  startLeft: boolean;
  startPosition: BallData;
  boostTime?: number;
}

export interface KickoffPosition {
  Diagonal: string;
  Goalie: string;
  Offcenter: string;
}

export interface Kickoff {
  startFrameNumber: number;
  endFrameNumber: number;
}

export interface Mutators {
  ballType: string;
  gameMutatorIndex: number;
}

export interface Party {
  leaderId: PlatformID;
  members: PlatformID[];
}

export interface Player {
  id: PlatformID;
  name: string;
  score: number;
  goals: number;
  assists: number;
  saves: number;
  shots: number;
  cameraSettings: CameraSettings;
  loadout: Loadout;
  isOrange: number;
  stats: PlayerStats;
  partyLeader?: PlatformID;
  isBot: boolean;
  timeInGame: number;
  firstFrameInGame: number;
  titleId?: number;
}

export interface CameraSettings {
  stiffness: number;
  height: number;
  transitionSpeed: number;
  pitch: number;
  swivelSpeed: number;
  fieldOfView: number;
  distance: number;
}

export interface Loadout {
  banner: number;
  boost: number;
  car: number;
  goalExplosion: number;
  skin: number;
  trail: number;
  wheels: number;
  version: number;
  topper: number;
  antenna: number;
  engineAudio: number;
  primaryColor: number;
  accentColor: number;
  primaryFinish: number;
  accentFinish: number;
  avatarBorderUserColor: string;
  trailPaint?: number;
  goalExplosionPaint?: number;
  wheelsPaint?: number;
  boostPaint?: number;
}

export interface Boost {
  boostUsage: number;
  numSmallBoosts: number;
  numLargeBoosts: number;
  wastedCollection: number;
  wastedUsage: number;
  timeFullBoost: number;
  timeLowBoost: number;
  timeNoBoost: number;
  numStolenBoosts: number;
  averageBoostLevel: number;
  wastedBig: number;
  wastedSmall: number;
}

export interface PlayerStats {
  boost: Boost;
  distance: Distance;
  possession: Possession;
  positionalTendencies: PositionalTendencies;
  averages: StatsAverages;
  hitCounts: HitCounts;
  controller: Controller;
  speed: Speed;
  perPossessionStats: PerPossessionStats;
  ballCarries?: BallCarries;
  kickoffStats: KickoffStats;
  relativePositioning: RelativePositioning;
}

export interface PositionalTendencies {
  timeOnGround: number;
  timeLowInAir: number;
  timeHighInAir: number;
  timeInDefendingHalf: number;
  timeInAttackingHalf: number;
  timeInDefendingThird: number;
  timeInNeutralThird: number;
  timeInAttackingThird: number;
  timeBehindBall: number;
  timeInFrontBall: number;
  timeNearWall: number;
  timeInCorner: number;
  timeOnWall: number;
}

export interface StatsAverages {
  averageSpeed: number;
  averageHitDistance: number;
  averageDistanceFromCenter: number;
}

export interface BallCarries {
  totalCarries: number;
  totalFlicks?: number;
  longestCarry: number;
  furthestCarry: number;
  totalCarryTime: number;
  averageCarryTime: number;
  fastestCarrySpeed: number;
  totalCarryDistance: number;
  carryStats: CarryStats;
}

export interface Controller {
  isKeyboard: boolean;
  analogueSteeringInputPercent: number;
  analogueThrottleInputPercent: number;
}

export interface Distance {
  ballHitForward: number;
  ballHitBackward: number;
  timeClosestToBall: number;
  timeFurthestFromBall: number;
  timeCloseToBall: number;
  timeClosestToTeamCenter: number;
  timeFurthestFromTeamCenter: number;
}

export interface HitCounts {
  totalHits: number;
  totalPasses?: number;
  totalSaves?: number;
  totalShots?: number;
  totalDribbles: number;
  totalDribbleConts: number;
  totalAerials: number;
  totalClears: number;
}

export interface KickoffStats {
  totalKickoffs: number;
  numTimeCheat?: number;
  numTimeGoToBall: number;
  numTimeFirstTouch?: number;
  averageBoostUsed: number;
  numTimeBoost?: number;
  numTimeDefend?: number;
  numTimeAfk?: number;
}

export interface PerPossessionStats {
  averageCounts: AverageCounts;
  averageDuration: number;
  averageHits: number;
  count: number;
}

export interface AverageCounts {
  pass: number;
  passed: number;
  dribble: number;
  dribbleContinuation: number;
  shot: number;
  goal: number;
  assist: number;
  assisted: number;
  save: number;
  aerial: number;
}

export interface Possession {
  possessionTime?: number;
  turnovers?: number;
  turnoversOnMyHalf?: number;
  turnoversOnTheirHalf?: number;
  wonTurnovers?: number;
}

export interface Speed {
  timeAtSlowSpeed: number;
  timeAtSuperSonic: number;
  timeAtBoostSpeed: number;
}

export interface Team {
  playerIds: PlatformID[];
  score: number;
  isOrange: boolean;
  stats: TeamStats;
}

export interface RelativePositioning {
  timeInFrontOfCenterOfMass: number;
  timeBehindCenterOfMass: number;
  timeMostForwardPlayer: number;
  timeMostBackPlayer: number;
  timeBetweenPlayers: number;
}

export interface TeamStats {
  possession: Possession;
  hitCounts: HitCounts;
  centerOfMass: CenterOfMass;
  // relativePositioning?: RelativePositioning;
}

export interface CenterOfMass {
  positionalTendencies: PositionalTendencies;
  averageDistanceFromCenter: number;
  averageMaxDistanceFromCenter: number;
  timeClumped: number;
  timeBoondocks: number;
}

// export interface Score {
//   team0Score: number;
//   team1Score: number;
// }

// export interface Goal {
//   frameNumber: number;
//   playerId: { id: string };
// }

// export interface Demo {
//   frameNumber: number;
//   attackerId: { id: string };
//   victimId: { id: string };
// }

// export interface GameMetadata {
//   id: string;
//   name: string;
//   map: string;
//   version: number;
//   time: string;
//   frames: number;
//   score: Score;
//   goals: Goal[];
//   demos: Demo[];
//   PlatformId: { id: string };
//   length: number;
//   gameServerId: string;
//   serverName: string;
//   matchGuid: string;
//   teamSize: number;
//   playlist: string;
// }

// export interface CameraSettings {
//   stiffness: number;
//   height: number;
//   transitionSpeed: number;
//   pitch: number;
//   swivelSpeed: number;
//   fieldOfView: number;
//   distance: number;
// }

// export interface Loadout {
//   banner: number;
//   boost: number;
//   car: number;
//   goalExplosion: number;
//   skin: number;
//   trail: number;
//   wheels: number;
//   version: number;
//   topper: number;
//   antenna: number;
//   engineAudio: number;
//   primaryColor: number;
//   accentColor: number;
//   primaryFinish: number;
//   accentFinish: number;
//   avatarBorderUserColor: string;
//   trailPaint?: number;
//   boostPaint?: number;
//   wheelsPaint?: number;
//   goalExplosionPaint?: number;
// }

// export interface Boost {
//   boostUsage: number;
//   numSmallBoosts: number;
//   numLargeBoosts: number;
//   wastedCollection: number;
//   wastedUsage: number;
//   timeFullBoost: number;
//   timeLowBoost: number;
//   timeNoBoost: number;
//   numStolenBoosts: number;
//   averageBoostLevel: number;
//   wastedBig: number;
//   wastedSmall: number;
// }

// export interface Distance {
//   ballHitForward: number;
//   ballHitBackward: number;
//   timeClosestToBall: number;
//   timeFurthestFromBall: number;
//   timeCloseToBall: number;
//   timeClosestToTeamCenter: number;
//   timeFurthestFromTeamCenter: number;
// }

// export interface Possession {
//   possessionTime: number;
//   turnovers: number;
//   turnoversOnMyHalf: number;
//   turnoversOnTheirHalf: number;
//   wonTurnovers: number;
// }

// export interface PositionalTendencies {
//   timeOnGround: number;
//   timeLowInAir: number;
//   timeHighInAir: number;
//   timeInDefendingHalf: number;
//   timeInAttackingHalf: number;
//   timeInDefendingThird: number;
//   timeInNeutralThird: number;
//   timeInAttackingThird: number;
//   timeBehindBall: number;
//   timeInFrontBall: number;
//   timeNearWall: number;
//   timeInCorner: number;
//   timeOnWall: number;
// }

// export interface Averages {
//   averageSpeed: number;
//   averageHitDistance: number;
//   averageDistanceFromCenter: number;
// }

// export interface HitCounts {
//   totalHits?: number;
//   totalPasses?: number;
//   totalSaves?: number;
//   totalShots?: number;
//   totalDribbles?: number;
//   totalDribbleConts?: number;
//   totalAerials?: number;
//   totalClears?: number;
// }

// export interface Controller {
//   isKeyboard: boolean;
//   analogueSteeringInputPercent: number;
//   analogueThrottleInputPercent: number;
// }

// export interface Speed {
//   timeAtSlowSpeed: number;
//   timeAtSuperSonic: number;
//   timeAtBoostSpeed: number;
// }

// export interface AverageCounts {
//   pass: number;
//   passed: number;
//   dribble: number;
//   dribbleContinuation: number;
//   shot: number;
//   goal: number;
//   assist: number;
//   assisted: number;
//   save: number;
//   aerial: number;
// }

// export interface PerPossessionStats {
//   averageCounts: AverageCounts;
//   averageDuration: number;
//   averageHits: number;
//   count: number;
// }

// export interface CarryStats {
//   averageZDistance: number;
//   averageXyDistance: any;
//   averageBallZVelocity: number;
//   varianceXyDistance: any; // Often NaN, needs to be omitted?
//   varianceZDistance: number;
//   varianceBallZVelocity: number;
//   averageCarrySpeed: number;
//   distanceAlongPath: number;
// }

// export interface BallCarries {
//   totalCarries?: number;
//   totalFlicks?: number;
//   longestCarry?: number;
//   furthestCarry?: number;
//   totalCarryTime?: number;
//   averageCarryTime?: number;
//   fastestCarrySpeed?: number;
//   totalCarryDistance?: number;
//   carryStats: CarryStats;
// }

// export interface KickoffStats {
//   totalKickoffs?: number;
//   numTimeCheat?: number;
//   numTimeGoToBall?: number;
//   numTimeFirstTouch?: number;
//   averageBoostUsed?: number;
//   numTimeBoost?: number;
//   numTimeDefend?: number;
//   numTimeAfk?: number;
// }

// export interface Stats {
//   boost: Boost;
//   distance: Distance;
//   possession: Possession;
//   positionalTendencies: PositionalTendencies;
//   averages: Averages;
//   hitCounts: HitCounts;
//   controller: Controller;
//   speed: Speed;
//   perPossessionStats: PerPossessionStats;
//   ballCarries: BallCarries;
//   kickoffStats: KickoffStats;
//   relativePositioning:
// }

// export interface Player {
//   id: { id: string };
//   name: string;
//   score: number;
//   goals: number;
//   assists: number;
//   saves: number;
//   shots: number;
//   cameraSettings: CameraSettings;
//   loadout: Loadout;
//   isOrange: number;
//   stats: Stats;
//   partyLeader: { id: string };
//   isBot: boolean;
//   timeInGame: number;
//   firstFrameInGame: number;
//   titleId?: number;
// }

// export interface CenterOfMass {
//   positionalTendencies: PositionalTendencies;
//   averageDistanceFromCenter: number;
//   averageMaxDistanceFromCenter: number;
//   timeClumped: number;
//   timeBoondocks: number;
// }
// // export interface PlayerId {
// //   id: string;
// // }

// export interface Team {
//   playerIds: [{ id: string }];
//   score: number;
//   isOrange: boolean;
//   stats: Stats;
// }

// export interface BallData {
//   posX: number;
//   posY: number;
//   posZ: number;
// }

// export interface Hit {
//   frameNumber: number;
//   playerId: { id: string };
//   collisionDistance: number;
//   ballData: BallData;
//   distance: number;
//   distanceToGoal: number;
//   nextHitFrameNumber: number;
//   goalNumber: number;
//   isKickoff: boolean;
//   aerial?: boolean;
//   previousHitFrameNumber?: number;
//   dribble?: boolean;
//   pass?: boolean;
//   dribbleContinuation?: boolean;
//   goal?: boolean;
//   passed?: boolean;
//   shot?: boolean;
//   clear?: boolean;
//   save?: boolean;
//   assist?: boolean;
//   assisted?: boolean;
// }

// export interface Bump {
//   frameNumber: number;
//   attackerId: { id: string };
//   victimId: { id: string };
//   isDemo: boolean;
// }

// export interface BallStats {
//   positionalTendencies: PositionalTendencies;
//   averages: Averages;
// }

// export interface Kickoff {
//   startFrameNumber: number;
//   endFrameNumber: number;
// }

// export interface PlayerPosition {
//   posX: number;
//   posY: number;
//   posZ: number;
// }

// export interface StartPosition {
//   posX: number;
//   posY: number;
//   posZ: number;
// }

// export interface Touch {
//   players: Player[];
//   kickoffGoal: number;
//   firstTouchPlayer: { id: string };
// }

// export interface KickoffStat {
//   startFrame: number;
//   touchFrame: number;
//   touchTime: number;
//   type: string;
//   touch: Touch;
// }

// export interface BallCarry {
//   startFrameNumber: number;
//   endFrameNumber: number;
//   playerId: { id: string };
//   hasFlick: boolean;
//   carryTime: number;
//   straightLineDistance: number;
//   carryStats: CarryStats;
// }

// export interface GameStats {
//   hits: Hit[];
//   neutralPossessionTime: number;
//   bumps: Bump[];
//   ballStats: BallStats;
//   kickoffs: Kickoff[];
//   kickoffStats: KickoffStat[];
//   ballCarries: BallCarry[];
// }

// export interface Party {
//   leaderId: { id: string };
//   members: [{ id: string }];
// }

// export interface Mutators {
//   ballType: string;
//   gameMutatorIndex: number;
// }

// export interface ParsedReplay {
//   gameMetadata: GameMetadata;
//   players: Player[];
//   teams: Team[];
//   gameStats: GameStats;
//   parties: Party[];
//   version: number;
//   mutators: Mutators;
// }

// /*
//  * This file holds the types of a parsed JSON replay file
//  * [index: string]: any; let's me index the ParsedReplay type
//  * It also lets other fields through, which is a bit of an issue probably
//  */

// export interface ControlConfig {
//   is_keyboard?: boolean;
//   analogue_steering_input_percent?: number;
//   analogue_throttle_input_percent?: number;
//   [index: string]: any;
// }

// export interface CameraSettings {
//   stiffness?: number;
//   height?: number;
//   transition_speed?: number;
//   pitch?: number;
//   swivel_speed?: number;
//   field_of_view?: number;
//   distance?: number;
//   [index: string]: any;
// }

// export interface PlayerItems {
//   banner?: number;
//   boost?: number;
//   car?: number;
//   goal_explosion?: number;
//   skin?: number;
//   trail?: number;
//   wheels?: number;
//   version?: number;
//   topper?: number;
//   antenna?: number;
//   engine_audio?: number;
//   primary_color?: number;
//   accent_color?: number;
//   primary_finish?: number;
//   accent_finish?: number;
//   avatar_border_user_color?: number;
//   title_id?: number;
//   trail_paint?: number;
//   boost_paint?: number;
//   wheels_paint?: number;
//   goal_explosion_paint?: number;
//   [index: string]: any;
// }

// export interface PlayerStats extends CameraSettings, PlayerItems, ControlConfig {
//   id: string;
//   name?: string;
//   score?: number;
//   goals?: number;
//   assists?: number;
//   saves?: number;
//   shots?: number;
//   is_orange?: number;
//   boost_usage?: number;
//   num_small_boosts?: number;
//   num_large_boosts?: number;
//   wasted_collection?: number;
//   time_full_boost?: number;
//   time_no_boost?: number;
//   average_boost_level?: number;
//   possession_time?: number;
//   turnovers?: number;
//   turnovers_on_my_half?: number;
//   turnovers_on_their_half?: number;
//   won_turnovers?: number;
//   time_on_ground?: number;
//   time_low_in_air?: number;
//   time_high_in_air?: number;
//   time_in_defending_half?: number;
//   time_in_attacking_half?: number;
//   time_in_defending_third?: number;
//   time_in_neutral_third?: number;
//   time_in_attacking_third?: number;
//   time_behind_ball?: number;
//   time_in_front_ball?: number;
//   time_near_wall?: number;
//   time_in_corner?: number;
//   time_on_wall?: number;
//   time_low_boost?: number;
//   ball_hit_forward?: number;
//   time_closest_to_ball?: number;
//   time_furthest_from_ball?: number;
//   time_close_to_ball?: number;
//   time_most_forward_player?: number;
//   time_most_back_player?: number;
//   time_between_players?: number;
//   average_speed?: number;
//   average_hit_distance?: number;
//   average_distance_from_center?: number;
//   total_hits?: number;
//   total_passes?: number;
//   total_dribbles?: number;
//   total_dribble_conts?: number;
//   total_aerials?: number;
//   total_clears?: number;
//   time_at_slow_speed?: number;
//   time_at_super_sonic?: number;
//   time_at_boost_speed?: number;
//   count?: number;
//   total_carries?: number;
//   total_flicks?: number;
//   longest_carry?: number;
//   furthest_carry?: number;
//   total_carry_time?: number;
//   average_carry_time?: number;
//   fastest_carry_speed?: number;
//   total_carry_distance?: number;
//   average_z_distance?: number;
//   average_ball_z_velocity?: number;
//   variance_z_distance?: number;
//   variance_ball_z_velocity?: number;
//   average_carry_speed?: number;
//   distance_along_path?: number;
//   total_kickoffs?: number;
//   num_time_cheat?: number;
//   num_time_go_to_ball?: number;
//   num_time_first_touch?: number;
//   num_time_boost?: number;
//   average_boost_used?: number;
//   num_time_defend?: number;
//   is_bot?: false;
//   time_in_game?: number;
//   num_time_afk?: number;
//   first_frame_in_game?: number;
//   [index: string]: any;
// }

// export interface TeamStats {
//   score?: number;
//   is_orange?: boolean;
//   possession_time?: number;
//   turnovers?: number;
//   turnovers_on_my_half?: number;
//   turnovers_on_their_half?: number;
//   won_turnovers?: number;
//   total_hits?: number;
//   total_goals?: number;
//   total_passes?: number;
//   total_saves?: number;
//   total_shots?: number;
//   total_dribbles?: number;
//   total_dribble_conts?: number;
//   total_aerials?: number;
//   total_clears?: number;
//   time_on_ground?: number;
//   time_low_in_air?: number;
//   time_high_in_air?: number;
//   time_in_defending_half?: number;
//   time_in_attacking_half?: number;
//   time_in_defending_third?: number;
//   time_in_neutral_third?: number;
//   time_in_attacking_third?: number;
//   time_behind_ball?: number;
//   time_in_front_ball?: number;
//   time_near_wall?: number;
//   time_in_corner?: number;
//   time_on_wall?: number;
//   average_distance_from_center?: number;
//   average_max_distance_from_center?: number;
//   time_clumped?: number;
//   time_boondocks?: number;
//   [index: string]: any;
// }

// export interface ParsedReplay {
//   id: string;
//   name?: string;
//   map?: string;
//   version?: number;
//   time?: number;
//   frames?: number;
//   team_0_score?: number;
//   team_1_score?: number;
//   length?: number;
//   game_server_id?: string;
//   server_name?: string;
//   match_guid?: string;
//   team_size?: number;
//   playlist?: number;
//   player_stats: Array<PlayerStats>;
//   team_0_players: Array<string>;
//   team_0_stats: TeamStats;
//   team_1_players: Array<string>;
//   team_1_stats: TeamStats;
//   [index: string]: any;
// }
