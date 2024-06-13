export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-700">
      <div className="shadow-lgmd:flex-row flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 dark:bg-gray-600">
        <div className="group flex flex-col">
          <input className="w-full bg-gray-100" placeholder="Write your email" />
          <span className="group-focus-within:block hidden">Make sure your email...</span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
