export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-700">
      <div className="shadow-lgmd:flex-row flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 dark:bg-gray-600">
        {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5"
          >
            <div className="size-10 rounded-full bg-blue-400" />
            <span className="text-lg font-medium empty:size-24 empty:h-5 empty:rounded-full empty:bg-gray-300 empty:animate-pulse">{person}</span>
            <div className="flex size-6 items-center justify-center rounded-full bg-red-500 text-white relative">
              <span className="z-10">{index}</span>
              <div className="size-6 rounded-full bg-red-500 absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
