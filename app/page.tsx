export default function Home() {
  return (<main className="bg-gray-100 h-screen flex justify-center items-center dark:bg-gray-700">
    <div className="bg-white shadow-lg w-full rounded-3xl p-5 gap-2 max-w-screen-sm dark:bg-gray-600">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 font-semibold -mb-1 dark:text-gray-300">In transit</span>
          <span className="text-3xl font-semibold dark:text-white">Coolblue</span>
        </div>
        <div className="size-12 bg-orange-400 rounded-full" />
      </div>
      <div className="my-2 flex gap-2 items-center">
        <span className="bg-green-400 text-white text-xs uppercase py-1.5 px-2.5 rounded-xl transition hover:bg-green-500 hover:scale-125">Today</span>
        <span className="dark:text-gray-100">9:30-10:30</span>
      </div>
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 rounded-full absolute" />
        <div className="w-2/3 h-2 bg-green-400 rounded-full absolute" />
      </div>
      <div className="mt-5 flex justify-between items-center text-gray-600 dark:text-gray-400">
        <span>Expected</span>
        <span>Sorting center</span>
        <span>In transit</span>
        <span className="text-gray-300 dark:text-gray-500">Delivered</span>
      </div>
    </div>
  </main>)
}
