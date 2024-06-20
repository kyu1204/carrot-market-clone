"use client";

import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import createAccount from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2>Fill in ther form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          required
          name="username"
          type="text"
          placeholder="Username"
        />
        <FormInput required name="email" type="email" placeholder="Email" />
        <FormInput
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        <FormInput
          required
          name="password_confirm"
          type="password"
          placeholder="Confirm Password"
        />
        <FormButton text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
