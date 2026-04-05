const Footer = () => {
  return (
    <footer className="bg-black border-t-[3px] border-black mt-10">

      <div
        className="mx-4 md:mx-8 mt-8 border-[3px] border-black bg-[#FF3CAC] flex flex-col md:grid md:grid-cols-[1fr_auto] items-center gap-6 md:gap-8 px-6 md:px-10 py-8"
        style={{boxShadow: '6px 6px 0px rgba(255,60,172,0.4)'}}
      >
        <div>
          <div className="font-archive text-2xl md:text-4xl tracking-widest text-white">Yeni Yazıları Kaçırma.</div>
          <div className="font-grotesk text-sm text-white/70 mt-1">Her hafta en iyi içerikler doğrudan e-posta kutuna gelsin.</div>
        </div>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="eposta@adresin.com"
            className="border-[3px] border-r-0 border-black bg-[#f5f0e8] font-grotesk text-sm px-4 py-3 outline-none flex-1 md:w-56 text-black"
          />
          <button
            className="bg-black text-[#FFE500] border-[3px] border-black font-archive text-lg md:text-xl tracking-widest px-5 md:px-6 py-3 cursor-pointer whitespace-nowrap"
            style={{boxShadow: '4px 4px 0px rgba(0,0,0,0.3)'}}
          >
            Abone Ol
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-10 px-4 md:px-8 pt-10 pb-6 text-white">
        <div className="col-span-2 md:col-span-1">
          <div className="font-archive text-4xl md:text-5xl tracking-widest leading-none mb-3">
            LAHANA<span className="text-[#FF3CAC]">HANDE</span>
          </div>
          <p className="font-grotesk text-sm text-white/50 leading-relaxed">
            Düşünceler, gözlemler ve kişisel notlardan oluşan bağımsız bir blog. Her yazı samimi, her kelime özgün.
          </p>
        </div>

        {[
          { title: 'Bağlantılar', links: ['Ana Sayfa', 'Tüm Yazılar', 'Kategoriler', 'Arşiv'] },
          { title: 'Kategoriler', links: ['Teknoloji', 'Tasarım', 'Felsefe', 'Kişisel'] },
          { title: 'İletişim',    links: ['Hakkımda', 'E-posta', 'RSS Feed'] },
        ].map((col) => (
          <div key={col.title}>
            <div className="font-archive text-lg md:text-xl tracking-widest text-[#FFE500] mb-4 border-b-2 border-[#FFE500]/30 pb-1.5">
              {col.title}
            </div>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-grotesk text-xs text-white/50 uppercase tracking-widest no-underline transition-colors hover:text-[#FFE500]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-4 md:mx-8 border-t-2 border-white/10 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-grotesk text-[11px] text-white/30 uppercase tracking-widest text-center sm:text-left">
          © 2026 Muhammed — Tüm hakları saklıdır.
        </span>
        <div className="flex gap-2">
          {['X', 'IG', 'LI', 'GH'].map((s) => (
            <a key={s} href="#" className="w-8 h-8 border-2 border-white/20 flex items-center justify-center font-grotesk text-[10px] text-white/40 no-underline transition-all hover:border-[#FFE500] hover:text-[#FFE500]">
              {s}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer