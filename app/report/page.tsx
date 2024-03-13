import {
  Match,
  MatchesResponse,
  PlayerDataResponse,
  Profile,
} from "@/types/OpenDotaTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { MatchesTable } from "./matches-table";
import { matchesTableColumns } from "./columns";
import { Heroes, HeroesIDMapping } from "@/lib/heroes";
import { rankTierToImageName } from "@/lib/ranks";

export default async function Report() {
  // Load PLayer data:
  const rawPlayerData = await fetch(
    "https://api.opendota.com/api/players/61428209"
  );
  const parsedPlayerData: PlayerDataResponse = await rawPlayerData.json();
  const userSteamProfile = parsedPlayerData.profile;

  // Load Recent matches:
  const rawRecentMatches = await fetch(
    "https://api.opendota.com/api/players/61428209/matches"
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

  // Assuming parsedMatches and heroesMap are already defined and populated as shown above
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

  return (
    <div>
      <div className="flex m-11 space-x-40">
        <div className="inline-block text-center ">
          <Avatar>
            <AvatarImage src={userSteamProfile.avatarfull} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="mt-4 text-3xl">{userSteamProfile.personaname}</p>
        </div>

        <div>
          <Avatar className="inline-block text-center">
            <AvatarImage
              src={rankTierToImageName(parsedPlayerData.rank_tier)}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p></p>
        </div>
      </div>
      <div>
        <MatchesTable columns={matchesTableColumns} data={parsedMatches} />
      </div>
    </div>
  );
}
