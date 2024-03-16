import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Heroes() {
  return (
    <div>
      <div className="m-10">
        <p>Heroes</p>
      </div>
      <div className="flex items-center justify-center">
        <Carousel>
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
    </div>
  );
}
