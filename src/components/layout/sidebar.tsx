"use client";

import React from "react";
import { Dot, Power } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/data";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

type Props = {};

export default function Sidebar({}: Props) {
  const path = usePathname();
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex w-full mx-auto items-center my-6 px-4">
        <Image
          src="/images/iflexx-logo.svg"
          width={128}
          height={52}
          alt="iflexx logo"
          className="mx-auto"
        />
      </div>
      <div className="flex-1">
        <nav className="grid items-start text-sm font-medium">
          {menuItems.map((item) => {
            const Icon: any = Icons[item.icon] || "arrowRight";
            return (
              <Link
                key={item.label}
                href={item.disabled ? "/" : item.href}
                className={cn(
                  "group flex items-center px-4 py-5 my-2 font-medium w-11/12 hover:opacity-[90%]",
                  path === item.href
                    ? "bg-primary rounded-tr-lg relative rounded-br-lg text-white"
                    : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon className="h-6 w-6 mr-3" />
                <span>{item.label}</span>
                <Dot className="bg-white absolute right-8 rounded-full top-[40%] w-3 h-3" />
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-red-500 transition-all hover:text-red-400"
        >
          <Power className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </div>
  );
}
