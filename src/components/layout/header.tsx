"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Menu, CircleUser, Bell } from "lucide-react";
import React from "react";
import { Button } from "../ui";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Icons } from "../icons";
import { menuItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const path = usePathname();
  return (
    <div>
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium mt-12">
              {menuItems.map((item) => {
                const Icon: any = Icons[item.icon] || "arrowRight";
                return (
                  <Link
                    key={item.label}
                    href={item.disabled ? "/" : item.href}
                    className={cn(
                      "group flex items-center rounded px-4 py-3 my-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center justify-between w-full">
          <div className="page">Home</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-4 h-8 w-8">
                <div className="flex items-center">
                  <CircleUser className="h-5 w-5" />
                </div>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
