import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Welcome.",
};

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({
  title,
  children,
  subtitle,
}: AuthLayoutProps) {
  return (
    <>
      <div className="w-10/12 md:w-full mx-auto lg:grid lg:min-h-screen lg:grid-cols-2">
        <div className="hidden bg-primary lg:block"></div>
        <div className="flex flex-col py-12">
          <Image
            src="/images/iflexx-logo.svg"
            width={98}
            height={41}
            alt="iflexx logo"
            className="my-8 mx-auto"
          />
          <div className="mx-auto grid w-full lg:w-[400px] gap-1 items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
