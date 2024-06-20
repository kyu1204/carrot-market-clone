import Button from "@/components/button";
import Input from "@/components/input";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2>Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input
          required
          name="phone_number"
          type="number"
          placeholder="Phone number"
          errors={[]}
        />
        <Input
          required
          name="verification_code"
          type="number"
          placeholder="Verification code"
          errors={[]}
        />
        <Button text="Verify" />
      </form>
    </div>
  );
}
