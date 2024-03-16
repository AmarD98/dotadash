import {
  Match,
  MatchesResponse,
  PlayerDataResponse,
  Profile,
  WinLossCountResponse,
} from "@/types/OpenDotaTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DotaDashTable } from "../../components/ui/dota-dash-table";
import { matchesTableColumns } from "./columns";
import { Heroes, HeroesIDMapping } from "@/lib/heroes";
import { rankTierToImageName } from "@/lib/ranks";
import { Button } from "@/components/ui/button";
import RefreshButton from "./refresh-button";

async function fetchPlayerData(): Promise<PlayerDataResponse> {
  const rawPlayerData = await fetch(
    "https://api.opendota.com/api/players/61428209"
  );
  const parsedPlayerData: PlayerDataResponse = await rawPlayerData.json();
  return parsedPlayerData;
}

async function fetchMatches(): Promise<Match[]> {
  // Load Recent matches:
  const rawRecentMatches = await fetch(
    "https://api.opendota.com/api/players/61428209/matches",
    { cache: "force-cache" }
  );
  const parsedMatches: Match[] = await rawRecentMatches.json();

  const heroesMap = new Map<number, HeroesIDMapping>(
    Heroes.map((hero) => [hero.id, hero])
  );

  function getHeroImageUrl(hero: HeroesIDMapping): string {
    if (hero.name == "npc_dota_hero_arc_warden") {
      hero.name = "arc_warden";
    }

    return hero.name + ".png";
  }

  // Add hero image to matches
  parsedMatches.forEach((match) => {
    const heroData = heroesMap.get(match.hero_id);
    if (heroData) {
      // Use the getHeroImageUrl function to set the hero_image_url property
      match.hero_image_url = getHeroImageUrl(heroData);
    } else {
      // Handle cases where hero data is not found, perhaps with a default image or no image
      match.hero_image_url = "Path to default image or leave undefined"; // Placeholder
    }
  });
  return parsedMatches;
}

export default async function Report() {
  // Load PLayer data:
  const parsedPlayerData: PlayerDataResponse = await fetchPlayerData();
  const userSteamProfile = parsedPlayerData.profile;

  // Load Win/loss data:
  const rawWinLossData = await fetch(
    "https://api.opendota.com/api/players/61428209/wl"
  );
  const parsedWinLossData: WinLossCountResponse = await rawWinLossData.json();
  const winPercent = Math.round(
    (parsedWinLossData.win / (parsedWinLossData.lose + parsedWinLossData.win)) *
      100
  );

  // Load Recent matches:
  let parsedMatches: Match[] = await fetchMatches();

  async function updateProfile() {
    "use server";
    console.log("Refreshing on the server!");
    parsedMatches = await fetchMatches();
  }

  return (
    <div>
      <div className=" flex flex-row justify-between items-center w-full px-9">
        <div className="  text-center ">
          <Avatar>
            <AvatarImage src={userSteamProfile.avatarfull} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="mt-4 text-3xl">{userSteamProfile.personaname}</p>
        </div>

        <div className=" text-center">
          <Avatar className=" ">
            <AvatarImage
              src={rankTierToImageName(parsedPlayerData.rank_tier)}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="mt-4 text-3xl ">
            {parsedWinLossData.win} - {parsedWinLossData.lose}
          </p>

          <p className="mt-4 text-3xl">{winPercent}%</p>
        </div>
        <div className=" ">
          <Button variant={"secondary"} onClick={updateProfile}>
            Refresh
          </Button>
        </div>
      </div>
      <div>
        <DotaDashTable columns={matchesTableColumns} data={parsedMatches} />
      </div>
    </div>
  );
}
