export default function Home() {
  return (<main className="bg-gray-300 h-screen flex justify-center items-center">
    <div className="bg-white w-full mx-10 rounded-2xl p-5 flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 font-semibold -mb-1">In transit</span>
          <span className="text-3xl font-semibold">Coolblue</span>
        </div>
        <div className="size-12 bg-orange-400 rounded-full" />
      </div>
      <div className="flex gap-2 items-center">
        <span className="bg-green-400 text-white text-xs uppercase py-1.5 px-2.5 rounded-xl">Today</span>
        <span>9:30-10:30</span>
      </div>
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 rounded-full absolute" />
        <div className="w-2/3 h-2 bg-green-400 rounded-full absolute" />
      </div>
      <div className="flex justify-between items-center text-gray-600">
        <span>Expected</span>
        <span>Sorting center</span>
        <span>In transit</span>
        <span className="text-gray-300">Delivered</span>
      </div>
    </div>
  </main>)
}
