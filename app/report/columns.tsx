"use client";

import { Match } from "@/types/OpenDotaTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
export const matchesTableColumns: ColumnDef<Match>[] = [
  {
    accessorKey: "match_id",
    header: "Match ID",
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
      // URL string for heroID

      return (
        <div className="text-right font-medium">
          <Avatar>
            <AvatarImage className="w-auto h-30" src={heroImageURL} />
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
