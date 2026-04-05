const Categories = () => {
  const cats = ['Tümü', 'Teknoloji', 'Tasarım', 'Felsefe', 'Kişisel', 'Müzik', 'Sinema']

  return (
    <div className="flex flex-col sm:flex-row items-stretch border-b-[3px] border-black bg-[#f5f0e8]">

      <div className="bg-black text-[#FFE500] font-archive text-lg tracking-[3px] px-6 flex items-center border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-black min-h-[48px] sm:min-h-[56px]">
        KATEGORİLER
      </div>

      <div className="flex items-stretch flex-1 overflow-x-auto scrollbar-none border-b-[3px] sm:border-b-0 border-black">
        {cats.map((cat, i) => (
          <div
            key={i}
            className="font-grotesk text-[11px] font-medium uppercase tracking-[1.5px] px-4 md:px-6 py-3 sm:py-0 flex items-center border-r-2 border-black/15 cursor-pointer whitespace-nowrap transition-all hover:bg-black hover:text-[#FFE500] text-black min-h-[48px]"
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="flex items-center px-4 py-3 sm:py-0 sm:border-l-[3px] sm:border-black min-h-[48px]">
        <input
          type="text"
          placeholder="Yazı ara..."
          className="border-2 border-black bg-[#f5f0e8] font-grotesk text-[11px] px-3 py-1.5 outline-none w-full sm:w-44 text-black focus:bg-[#FFE500] transition-colors"
          style={{boxShadow: '3px 3px 0px #0a0a0a'}}
        />
      </div>

    </div>
  )
}

export default Categories