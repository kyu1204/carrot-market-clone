"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { smsVerification } from "./actions";

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsVerification, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2>Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input required name="phone" type="number" placeholder="Phone number" />
        <Input
          required
          name="token"
          type="number"
          placeholder="Verification code"
        />
        <Button text="Verify" />
      </form>
    </div>
  );
}
