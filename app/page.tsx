export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-700">
      <div className="shadow-lgmd:flex-row flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 dark:bg-gray-600">
        {["Nico", "Me", "You", "Yourself"].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-10 rounded-full bg-blue-500" />
            <span>{person}</span>
            <div className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white">
              <span>{index}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
