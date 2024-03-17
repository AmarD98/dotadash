"use client";
import { DotaDashTable } from "@/components/ui/dota-dash-table";
import { HeroesIDMapping, Heroes } from "@/lib/heroes";
import { HeroStats } from "@/types/OpenDotaTypes";
import {
  ancientColumns,
  archonColumns,
  crusaderColumns,
  divineColumns,
  guardianColumns,
  heraldColumns,
  immortalColumns,
  legendColumns,
} from "./columns";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function HeroStatsDash({
  heroStats,
}: {
  heroStats: HeroStats[];
}) {
  const [currentRankColumns, setCurrentRankColumns] =
    useState<ColumnDef<HeroStats>[]>(heraldColumns);

  const [api, setApi] = React.useState<CarouselApi>();
  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("scroll", () => {
      console.log("Scrolled on: ", api.selectedScrollSnap());
      switch (api.selectedScrollSnap()) {
        case 0:
          setCurrentRankColumns(heraldColumns);
          break;
        case 1:
          setCurrentRankColumns(guardianColumns);
          break;
        case 2:
          setCurrentRankColumns(crusaderColumns);
          break;
        case 3:
          setCurrentRankColumns(archonColumns);
          break;
        case 4:
          setCurrentRankColumns(legendColumns);
          break;
        case 5:
          setCurrentRankColumns(ancientColumns);
          break;
        case 6:
          setCurrentRankColumns(divineColumns);
          break;
        case 7:
          setCurrentRankColumns(immortalColumns);
          break;
        default:
          break;
      }
    });
  }, [api]);

  return (
    <div>
      <div>
        <Carousel setApi={(api) => setApi(api)}>
          <CarouselContent>
            <CarouselItem className=" flex items-center justify-center">
              <Image
                src="/ranks/SeasonalRank1-1.png"
                alt={""}
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem className=" flex items-center justify-center">
              <Image
                src="/ranks/SeasonalRank2-1.png"
                alt={""}
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem className=" flex items-center justify-center">
              <Image
                src="/ranks/SeasonalRank3-1.png"
                alt={""}
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem className=" flex items-center justify-center">
              <Image
                src="/ranks/SeasonalRank4-1.png"
                alt={""}
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem className=" flex items-center justify-center">
              <Image
                src="/ranks/SeasonalRank5-1.png"
                alt={""}
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem className=" flex items-center justify-center">
              <Image
                src="/ranks/SeasonalRank6-1.png"
                alt={""}
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem className=" flex items-center justify-center">
              <Image
                src="/ranks/SeasonalRank7-1.png"
                alt={""}
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem className=" flex items-center justify-center">
              <Image
                src="/ranks/SeasonalRankTop0.png"
                alt={""}
                width={200}
                height={200}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        <DotaDashTable columns={currentRankColumns} data={heroStats} />
      </div>
    </div>
  );
}
