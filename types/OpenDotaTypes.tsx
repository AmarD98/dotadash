// PROFILE DATA
export type Profile = {
  account_id: number;
  personaname: string;
  name: string;
  plus: boolean;
  cheese: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  last_login: string;
  loccountrycode: string;
  is_contributor: boolean;
  is_subscriber: boolean;
};

export type PlayerDataResponse = {
  profile: Profile;
  rank_tier: number | null;
  leaderboard_rank: number | null;
};

// WIN LOSS
export type WinLossQueryParams = {
  limit?: number;
  offset?: number;
  win?: number;
  patch?: number;
  game_mode?: number;
  lobby_type?: number;
  region?: number;
  date?: number;
  lane_role?: number;
  hero_id?: number;
  is_radiant?: number;
  included_account_id?: number[];
  excluded_account_id?: number[];
  with_hero_id?: number[];
  against_hero_id?: number[];
  significant?: number;
  having?: number;
  sort?: string;
};

export type WinLossCountResponse = {
  win: number;
  lose: number;
};

// MATCHES
export interface MatchesQueryParams {
  limit?: number;
  offset?: number;
  win?: number;
  patch?: number;
  game_mode?: number;
  lobby_type?: number;
  region?: number;
  date?: number;
  lane_role?: number;
  hero_id?: number;
  is_radiant?: number;
  included_account_id?: number[];
  excluded_account_id?: number[];
  with_hero_id?: number[];
  against_hero_id?: number[];
  significant?: number;
  having?: number;
  sort?: string;
  project?: string[];
}

export interface Match {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  hero_id: number;
  start_time: number;
  duration: number;
  game_mode: number;
  lobby_type: number;
  version: number;
  kills: number;
  deaths: number;
  assists: number;
  average_rank: number;
  xp_per_min: number;
  gold_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  last_hits: number;
  lane: number;
  lane_role: number;
  is_roaming: boolean;
  cluster: number;
  leaver_status: number;
  party_size: number;
  hero_image_url?: string;
}

// If the API returns an array of these objects:
export type MatchesResponse = Match[];

export interface HeroStats {
  id: number;
  name: string;
  localized_name: string;
  hero_image_url?: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  img: string;
  icon: string;
  base_health: number;
  base_health_regen: number;
  base_mana: number;
  base_mana_regen: number;
  base_armor: number;
  base_mr: number;
  base_attack_min: number;
  base_attack_max: number;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  attack_range: number;
  projectile_speed: number;
  attack_rate: number;
  base_attack_time: number;
  attack_point: number;
  move_speed: number;
  turn_rate: number | null;
  cm_enabled: boolean;
  legs: number | null;
  day_vision: number;
  night_vision: number;
  hero_id: number;
  turbo_picks: number;
  turbo_wins: number;
  pro_pick: number;
  pro_win: number;
  pro_ban: number;
  pub_pick: number;
  pub_win: number;
  "1_pick": number;
  "1_win": number;
  "2_pick": number;
  "2_win": number;
  "3_pick": number;
  "3_win": number;
  "4_pick": number;
  "4_win": number;
  "5_pick": number;
  "5_win": number;
  "6_pick": number;
  "6_win": number;
  "7_pick": number;
  "7_win": number;
  "8_pick": number;
  "8_win": number;
}
