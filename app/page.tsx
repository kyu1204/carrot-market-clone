export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-700">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg ring ring-transparent transition-shadow *:outline-none has-[:invalid]:ring-red-100 md:flex-row dark:bg-gray-600">
        <input
          className="peer h-12 w-full rounded-full bg-gray-100 pl-5 ring ring-transparent transition-shadow placeholder:drop-shadow focus:ring-green-500 focus:ring-offset-2 invalid:focus:ring-red-500"
          placeholder="Email is required."
          type="text"
          required
        />
        <span className="hidden font-medium text-red-500 peer-invalid:block">
          Email Invalid
        </span>
        <button className="rounded-full bg-black py-2 text-white transition-transform active:scale-90 md:px-10">
          Log in
        </button>
      </div>
    </main>
  );
}
