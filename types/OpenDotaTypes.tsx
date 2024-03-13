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
