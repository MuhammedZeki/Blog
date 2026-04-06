const Breadcrumb = () => {
  return (
    <div className="px-4 md:px-8 py-3 border-b-2 border-black flex items-center gap-2 bg-[#f5f0e8] overflow-x-auto scrollbar-none">
      {["Ana Sayfa", "Yazılar"].map((item, i) => (
        <span key={i} className="flex items-center gap-2 shrink-0">
          <span className="font-grotesk text-[10px] uppercase tracking-widest text-black/40 cursor-pointer hover:text-black transition-colors whitespace-nowrap">
            {item}
          </span>
          <span className="font-grotesk text-[10px] text-black/20">/</span>
        </span>
      ))}
      <span className="font-grotesk text-[10px] uppercase tracking-widest text-black font-medium whitespace-nowrap">
        Brutalist Tasarım Neden Geri Döndü?
      </span>
    </div>
  );
};

export default Breadcrumb;
