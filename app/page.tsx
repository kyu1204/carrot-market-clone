export default function Home() {
  return (<main className="bg-gray-100 h-screen flex justify-center items-center dark:bg-gray-700">
    <div className="bg-white shadow-lg w-full rounded-3xl p-5 gap-2 max-w-screen-sm dark:bg-gray-600 flex flex-col">
      <input className="bg-gray-100 w-full h-12 pl-5 rounded-full outline-none transition-shadow ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 placeholder:drop-shadow" placeholder="Search here..." />
      <button className="bg-black text-white rounded-full p-2 outline-none transition-transform active:scale-90">Search</button>
    </div>
  </main>)
}
