"use client";

import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

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
          errors={state?.fieldErrors.username}
        />
        <FormInput
          required
          name="email"
          type="email"
          placeholder="Email"
          errors={state?.fieldErrors.email}
        />
        <FormInput
          required
          name="password"
          type="password"
          placeholder="Password"
          errors={state?.fieldErrors.password}
        />
        <FormInput
          required
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          errors={state?.fieldErrors.confirm_password}
        />
        <FormButton text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
