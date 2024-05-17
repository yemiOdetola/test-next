"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Label } from "@/components/ui";

type Props = {};

export default function Register({}: Props) {
  const router = useRouter();
  const gotoOTP = () => {
    router.push("/verify");
  };

  return (
    <div>
      <div className="grid gap-2 mb-5 text-center">
        <h1 className="text-sm font-bold">Enter your Phone Number</h1>
        <p className="text-xs font-light text-muted leading-6">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phone">Phone number</Label>
          <Input type="tel" id="tel" placeholder="(555)-234-5678" />
        </div>
        <Button
          type="submit"
          variant="outline"
          className="w-full"
          onClick={gotoOTP}
        >
          Continue
        </Button>
      </div>
      <div className="mt-5 text-center text-sm text-muted font-medium">
        For new users, by clicking “Continue”, you agree to our{" "}
        <Link href="login" className="underline text-primary">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href="login" className="underline text-primary">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
