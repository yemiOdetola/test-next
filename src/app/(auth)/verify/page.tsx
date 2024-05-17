"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Label } from "@/components/ui";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type Props = {};

export default function Verify({}: Props) {
  const router = useRouter();

  const gotoDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <div className="grid gap-2 mb-5 text-center">
        <h1 className="text-sm font-bold">Verify it’s You</h1>
        <p className="text-xs font-light text-muted leading-6">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid w-full justify-center items-center gap-1.5">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button type="submit" variant="outline" onClick={gotoDashboard}>
          Resend Code in 00:59
        </Button>
      </div>
      <div className="mt-5 text-center text-sm text-muted font-medium">
        <Link href="register" className="underline text-primary">
          Change Phone Number
        </Link>
      </div>
    </div>
  );
}
