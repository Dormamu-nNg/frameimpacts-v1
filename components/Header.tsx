"use client";
import { useState } from "react";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MenuIcon, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import comingsoon from "../public/comingsoon.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:items-center max-w-6xl mx-auto justify-between p-2 ">
      <Link href="/" className="flex items-center">
        {/* <Image
          src={logo}
          className="rounded-lg bg-black items-center"
          alt="logo"
          width={40}
          height={30}
        /> */}
        <p className="p-3 font-light uppercase font-mono">FrameImpacts</p>
      </Link>
      <div className="md:hidden inline-flex justify-center">
        <Sheet>
          <SheetTrigger>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center bg-gray-200">
            <Link href="/" className="font-semibold text-lg">
              Home
            </Link>
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="flex flex-col space-y-2 items-center"
            >
              <div className="flex items-center justify-center space-x-4 px-4">
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex justify-center"
                  >
                    <ChevronsUpDown className="h-4 w-4" />
                    <h1 className="font-semibold text-lg">Our Services</h1>
                  </Button>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className="space-y-3 items-center mx-auto">
                <div className="flex flex-col justify-center py-3 text-sm">
                  <Link href="#" className="font-medium">
                    Capacity Building
                  </Link>
                  <Link href="#" className="font-medium">
                    Co-Design Frameworks
                  </Link>
                  <Link href="#" className="font-medium">
                    Start-Up Mentoring
                  </Link>
                  <Link href="#" className="font-medium">
                    RAS
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link href="/ourwork" className="font-semibold text-lg">
              Our Work
            </Link>
            <Link href="/aboutus" className="font-semibold text-lg">
              About Us
            </Link>
            <Link href="/contactus" className="font-semibold text-lg">
              Contact Us
            </Link>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex space-x-5  items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid mx-auto w-[500px] grid-cols-6">
                  <div className="col-span-3 ">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none items-center justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md">
                        <Image
                          src={comingsoon}
                          alt="image"
                          width={500}
                          height={500}
                          className="w-60 h-40 rounded-md items-center"
                        />
                      </a>
                    </NavigationMenuLink>
                  </div>
                  <div className="col-span-3 flex flex-col justify-center p-5 text-lg cursor-pointer">
                    <Link
                      href="/ourservices/#CapacityBuilding"
                      className="hover:bg-gray-300 p-2 rounded-lg"
                    >
                      Capacity Building
                    </Link>
                    <Link
                      href="/ourservices/#CoDesignFrameworks"
                      className="hover:bg-gray-300 p-2 rounded-lg"
                    >
                      Co-Design Frameworks
                    </Link>
                    <Link
                      href="/ourservices/#StartUpMentoring"
                      className="hover:bg-gray-300 p-2 rounded-lg"
                    >
                      Start-Up Mentoring
                    </Link>
                    <Link
                      href="/ourservices/#ras"
                      className="hover:bg-gray-300 p-2 rounded-lg"
                    >
                      RAS
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/ourwork">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Our Work
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/publishedlibrary">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Published Library
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contactus" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
