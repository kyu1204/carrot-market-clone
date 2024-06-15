import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2>Fill in ther form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="foucus:ring-2 h-10 w-full rounded-md border-none bg-transparent ring-1 ring-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-orange-500"
            type="text"
            placeholder="Username"
          />
          <span className="font-medium text-red-500">Input error</span>
        </div>
        <button className="primary-btn h-10">Create account</button>
      </form>
      <div className="h-px w-full bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-2"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
