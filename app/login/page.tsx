import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function Login() {
  async function handleForm(formData: FormData) {
    "use server";
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    console.log("logged in!");
  }
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2>Log in with email and password.</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          required
          name="email"
          type="email"
          placeholder="Email"
          errors={[]}
        />
        <FormInput
          required
          name="password"
          type="password"
          placeholder="Password"
          errors={[]}
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
