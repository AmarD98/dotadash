"use-client";
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

export default function RankCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("settle", () => {});
  }, [api]);

  function updateRank() {}

  return (
    <Carousel onScroll={updateRank}>
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
  );
}
