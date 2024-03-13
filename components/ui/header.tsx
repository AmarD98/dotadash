"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "./navigation-menu";

export default function Header() {
  return (
    <NavigationMenu className="flex justify-end">
      <NavigationMenuList className="flex space-x-16 p-8">
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/heroes"
            className={navigationMenuTriggerStyle()}
          >
            Heroes
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/report"
            className={navigationMenuTriggerStyle()}
          >
            Report
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}