import { HeroStats, Match } from "@/types/OpenDotaTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";

export const heraldColumns: ColumnDef<HeroStats>[] = [
  {
    header: "Win Rate",
    cell: ({ row }) => {
      const win = row.original["1_win"];
      const pick = row.original["1_pick"];
      const winrate = ((win / pick) * 100).toFixed(2);
      return (
        <div>
          <p>{winrate}%</p>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "hero_image_url",
    header: "Hero",
    cell: ({ row }) => {
      const heroImageURL: string = row.getValue("hero_image_url");
      return (
        <div className="text-right font-medium">
          <Avatar className="rounded-none">
            <AvatarImage className="w-20 h-20" src={heroImageURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "lane_role",
    header: "Role",
  },
  {
    accessorKey: "start_time",
    header: "Date",
  },
];

export const guardianColumns: ColumnDef<HeroStats>[] = [
  {
    header: "Win Rate",
    cell: ({ row }) => {
      const win = row.original["2_win"];
      const pick = row.original["2_pick"];
      const winrate = ((win / pick) * 100).toFixed(2);
      return (
        <div>
          <p>{winrate}%</p>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "hero_image_url",
    header: "Hero",
    cell: ({ row }) => {
      const heroImageURL: string = row.getValue("hero_image_url");
      return (
        <div className="text-right font-medium">
          <Avatar className="rounded-none">
            <AvatarImage className="w-20 h-20" src={heroImageURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "lane_role",
    header: "Role",
  },
  {
    accessorKey: "start_time",
    header: "Date",
  },
];

export const crusaderColumns: ColumnDef<HeroStats>[] = [
  {
    header: "Win Rate",
    cell: ({ row }) => {
      const win = row.original["3_win"];
      const pick = row.original["3_pick"];
      const winrate = ((win / pick) * 100).toFixed(2);
      return (
        <div>
          <p>{winrate}%</p>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "hero_image_url",
    header: "Hero",
    cell: ({ row }) => {
      const heroImageURL: string = row.getValue("hero_image_url");
      return (
        <div className="text-right font-medium">
          <Avatar className="rounded-none">
            <AvatarImage className="w-20 h-20" src={heroImageURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "lane_role",
    header: "Role",
  },
  {
    accessorKey: "start_time",
    header: "Date",
  },
];

export const archonColumns: ColumnDef<HeroStats>[] = [
  {
    header: "Win Rate",
    cell: ({ row }) => {
      const win = row.original["4_win"];
      const pick = row.original["4_pick"];
      const winrate = ((win / pick) * 100).toFixed(2);
      return (
        <div>
          <p>{winrate}%</p>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "hero_image_url",
    header: "Hero",
    cell: ({ row }) => {
      const heroImageURL: string = row.getValue("hero_image_url");
      return (
        <div className="text-right font-medium">
          <Avatar className="rounded-none">
            <AvatarImage className="w-20 h-20" src={heroImageURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "lane_role",
    header: "Role",
  },
  {
    accessorKey: "start_time",
    header: "Date",
  },
];

export const legendColumns: ColumnDef<HeroStats>[] = [
  {
    header: "Win Rate",
    cell: ({ row }) => {
      const win = row.original["5_win"];
      const pick = row.original["5_pick"];
      const winrate = ((win / pick) * 100).toFixed(2);
      return (
        <div>
          <p>{winrate}%</p>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "hero_image_url",
    header: "Hero",
    cell: ({ row }) => {
      const heroImageURL: string = row.getValue("hero_image_url");
      return (
        <div className="text-right font-medium">
          <Avatar className="rounded-none">
            <AvatarImage className="w-20 h-20" src={heroImageURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "lane_role",
    header: "Role",
  },
  {
    accessorKey: "start_time",
    header: "Date",
  },
];

export const ancientColumns: ColumnDef<HeroStats>[] = [
  {
    header: "Win Rate",
    cell: ({ row }) => {
      const win = row.original["6_win"];
      const pick = row.original["6_pick"];
      const winrate = ((win / pick) * 100).toFixed(2);
      return (
        <div>
          <p>{winrate}%</p>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "hero_image_url",
    header: "Hero",
    cell: ({ row }) => {
      const heroImageURL: string = row.getValue("hero_image_url");
      return (
        <div className="text-right font-medium">
          <Avatar className="rounded-none">
            <AvatarImage className="w-20 h-20" src={heroImageURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "lane_role",
    header: "Role",
  },
  {
    accessorKey: "start_time",
    header: "Date",
  },
];

export const divineColumns: ColumnDef<HeroStats>[] = [
  {
    header: "Win Rate",
    cell: ({ row }) => {
      const win = row.original["7_win"];
      const pick = row.original["7_pick"];
      const winrate = ((win / pick) * 100).toFixed(2);
      return (
        <div>
          <p>{winrate}%</p>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "hero_image_url",
    header: "Hero",
    cell: ({ row }) => {
      const heroImageURL: string = row.getValue("hero_image_url");
      return (
        <div className="text-right font-medium">
          <Avatar className="rounded-none">
            <AvatarImage className="w-20 h-20" src={heroImageURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "lane_role",
    header: "Role",
  },
  {
    accessorKey: "start_time",
    header: "Date",
  },
];

export const immortalColumns: ColumnDef<HeroStats>[] = [
  {
    header: "Win Rate",
    cell: ({ row }) => {
      const win = row.original["8_win"];
      const pick = row.original["8_pick"];
      const winrate = ((win / pick) * 100).toFixed(2);
      return (
        <div>
          <p>{winrate}%</p>
        </div>
      );
    },
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "hero_image_url",
    header: "Hero",
    cell: ({ row }) => {
      const heroImageURL: string = row.getValue("hero_image_url");
      return (
        <div className="text-right font-medium">
          <Avatar className="rounded-none">
            <AvatarImage className="w-20 h-20" src={heroImageURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "lane_role",
    header: "Role",
  },
  {
    accessorKey: "start_time",
    header: "Date",
  },
];
