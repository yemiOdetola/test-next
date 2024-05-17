import { isAuthenticated } from "@/lib/auth";
import Image from "next/image";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Home() {
  const authenticated = isAuthenticated();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
