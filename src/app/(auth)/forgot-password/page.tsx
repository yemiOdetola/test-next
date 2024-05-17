import { Button, Input, Label } from "@/components/ui";
import Link from "next/link";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot password",
  description: "Enter your email below to continue",
};

type Props = {};

export default function ForgotPassword({}: Props) {
  return (
    <div>
      <div className="grid gap-2 text-center my-10">
        <h1 className="text-3xl font-bold">Forgot password?</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to continue
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <Button type="submit" className="w-full">
          Send code
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="register" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
