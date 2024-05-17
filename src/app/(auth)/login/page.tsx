"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Label } from "@/components/ui";

type Props = {};

export default function Login({}: Props) {
  const router = useRouter();

  const gotoDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <div className="grid gap-2 my-10">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button
          type="submit"
          className="w-full"
          variant="default"
          onClick={gotoDashboard}
        >
          Login
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
