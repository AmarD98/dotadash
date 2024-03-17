import { HeroesIDMapping, Heroes } from "@/lib/heroes";
import { HeroStats } from "@/types/OpenDotaTypes";
import HeroStatsDash from "./hero-stats-dash";

export default async function Hero() {
  async function fetchHeroStats(): Promise<HeroStats[]> {
    const response = await fetch("https://api.opendota.com/api/heroStats");

    const heroStats: HeroStats[] = await response.json();
    const heroesMap = new Map<number, HeroesIDMapping>(
      Heroes.map((hero) => [hero.id, hero])
    );

    // Add hero image to matches
    heroStats.forEach((hero) => {
      const heroData = heroesMap.get(hero.id);
      if (heroData) {
        // Use the getHeroImageUrl function to set the hero_image_url property
        hero.hero_image_url = getHeroImageUrl(heroData);
      } else {
        // Handle cases where hero data is not found, perhaps with a default image or no image
        hero.hero_image_url = "Path to default image or leave undefined"; // Placeholder
      }
    });
    function getHeroImageUrl(hero: HeroesIDMapping): string {
      if (hero.name == "npc_dota_hero_arc_warden") {
        hero.name = "arc_warden";
      }

      return hero.name + ".png";
    }
    return heroStats;
  }
  const heroStatsData = await fetchHeroStats();

  return (
    <div>
      <div className="m-10">
        <p>Heroes</p>
      </div>
      <div className="flex items-center justify-center">
        <HeroStatsDash heroStats={heroStatsData} />
      </div>
    </div>
  );
}
