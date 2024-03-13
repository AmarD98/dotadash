enum DotaRank {
  Herald1 = 11,
  Herald2 = 12,
  Herald3 = 13,
  Herald4 = 14,
  Herald5 = 15,
  Guardian1 = 21,
  Guardian2 = 22,
  Guardian3 = 23,
  Guardian4 = 24,
  Guardian5 = 25,
  Crusader1 = 31,
  Crusader2 = 32,
  Crusader3 = 33,
  Crusader4 = 34,
  Crusader5 = 35,
  Archon1 = 41,
  Archon2 = 42,
  Archon3 = 43,
  Archon4 = 44,
  Archon5 = 45,
  Legend1 = 51,
  Legend2 = 52,
  Legend3 = 53,
  Legend4 = 54,
  Legend5 = 55,
  Ancient1 = 61,
  Ancient2 = 62,
  Ancient3 = 63,
  Ancient4 = 64,
  Ancient5 = 65,
  Divine1 = 71,
  Divine2 = 72,
  Divine3 = 73,
  Divine4 = 74,
  Divine5 = 75,
  Immortal = 80,
}

export function rankTierToRank(rank_tier: number): string {
  if (rank_tier in DotaRank) {
    return DotaRank[rank_tier];
  } else {
    console.log("Rank tier is invalid? Tier: ", rank_tier);
    return "Invalid Rank";
  }
}

export function rankTierToImageName(rank_tier: number | null): string {
  if (rank_tier == null) {
    return "ranks/SeasonalRank0-0.png";
  }
  if (rank_tier === 80) {
    // Special case for Immortal
    return "ranks/SeasonalRankTop0.png";
  } else if (rank_tier >= 11 && rank_tier <= 75) {
    const rank = Math.floor(rank_tier / 10);
    const subRank = rank_tier % 10;
    return `ranks/SeasonalRank${rank}-${subRank}.png`;
  } else {
    console.log("Invalid rank tier:", rank_tier);
    return "InvalidRank.png";
  }
}
