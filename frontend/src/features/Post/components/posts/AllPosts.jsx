const posts = [
  {
    id: 1,
    cat: "Teknoloji",
    title: "Kod Yazmak mı, Düşünmek mi? Geliştiricinin Sessiz Varoluş Krizi",
    date: "3 Nisan 2026",
    read: "8 dk",
    bg: "#FF3CAC",
    color: "#fff",
    wide: true,
    dark: true,
  },
  {
    id: 2,
    cat: "Tasarım",
    title: "Brutalist Tasarım Neden Geri Döndü?",
    date: "1 Nisan 2026",
    read: "5 dk",
    bg: "#0a0a0a",
    color: "#FFE500",
  },
  {
    id: 3,
    cat: "Felsefe",
    title: "Anlam Arayışı ve Modern İnsan Üzerine Kısa Notlar",
    date: "30 Mart 2026",
    read: "6 dk",
    bg: "#FFE500",
    color: "#0a0a0a",
    accent: true,
  },
  {
    id: 4,
    cat: "Kişisel",
    title: "Sabah Ritüelleri ve Üretkenlik Üzerine",
    date: "28 Mart 2026",
    read: "4 dk",
    bg: "#FF6B00",
    color: "#fff",
  },
  {
    id: 5,
    cat: "Müzik",
    title: "Jazz'ın Matematiği: Doğaçlamada Düzen",
    date: "26 Mart 2026",
    read: "7 dk",
    bg: "#00E5FF",
    color: "#0a0a0a",
  },
  {
    id: 6,
    cat: "Sinema",
    title: "Yavaş Sinemanın Geri Dönüşü ve Tarkovsky Etkisi",
    date: "24 Mart 2026",
    read: "9 dk",
    bg: "#7B2FBE",
    color: "#fff",
  },
  {
    id: 7,
    cat: "Teknoloji",
    title: "Veri Gizliliği ve Dijital Ayak İzimiz: Gerçekten Kontrolde miyiz?",
    date: "22 Mart 2026",
    read: "10 dk",
    bg: "#1a1a1a",
    color: "#FFE500",
    wide: true,
  },
  {
    id: 8,
    cat: "Tasarım",
    title: "Tipografi: Fontun Sessiz Dili",
    date: "20 Mart 2026",
    read: "5 dk",
    bg: "#FF3CAC",
    color: "#fff",
  },
  {
    id: 9,
    cat: "Kişisel",
    title: "Doğada Yürüyüş ve Zihinsel Berraklık",
    date: "18 Mart 2026",
    read: "3 dk",
    bg: "#2E7D32",
    color: "#fff",
  },
  {
    id: 10,
    cat: "Felsefe",
    title: "Camus'nun Absürd Teorisi ve Sosyal Medya Çağı",
    date: "15 Mart 2026",
    read: "8 dk",
    bg: "#FF6B00",
    color: "#fff",
    dark: true,
  },
  {
    id: 11,
    cat: "Müzik",
    title: "Post-Rock'ın Sessizliği: Sözsüz Bir Dil",
    date: "12 Mart 2026",
    read: "6 dk",
    bg: "#FFE500",
    color: "#0a0a0a",
    accent: true,
  },
  {
    id: 12,
    cat: "Sinema",
    title: "Nolan'ın Zaman Obsesyonu Üzerine",
    date: "10 Mart 2026",
    read: "7 dk",
    bg: "#00E5FF",
    color: "#0a0a0a",
  },
];

const cats = [
  "Tümü",
  "Teknoloji",
  "Tasarım",
  "Felsefe",
  "Kişisel",
  "Müzik",
  "Sinema",
];

const AllPosts = () => {
  return (
    <div className="font-grotesk">
      {/* ── PAGE HERO ── */}
      <div className="relative bg-[#0a0a0a] border-b-[3px] border-black px-4 md:px-8 py-10 md:py-12 overflow-hidden">
        <div
          className="absolute right-[-20px] top-[-30px] font-archive text-[140px] md:text-[200px] leading-none pointer-events-none select-none"
          style={{ color: "rgba(255,255,255,0.04)", letterSpacing: "4px" }}
        >
          YAZI
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span className="block w-6 h-0.5 bg-[#FFE500]" />
          <span className="font-grotesk text-[10px] uppercase tracking-[3px] text-[#FFE500]">
            Tüm Yazılar
          </span>
        </div>

        <h1 className="font-archive text-5xl sm:text-6xl md:text-[72px] leading-[0.9] tracking-wide text-[#f5f0e8] mb-4">
          Her <span className="text-[#FFE500]">Fikir</span>
          <br />
          Burada.
        </h1>
        <p className="font-grotesk text-sm md:text-[15px] text-white/40 max-w-lg leading-relaxed">
          Teknoloji, tasarım, felsefe ve kişisel notlar. Tüm yazılar, tüm
          kategoriler — bir arada.
        </p>

        <div className="absolute right-4 md:right-8 bottom-6 font-archive text-lg tracking-[3px] text-white/20">
          <span className="text-[#FFE500]">24</span> Yazı
        </div>
      </div>

      {/* ── FILTER BAR ── */}
      <div className="flex items-stretch border-b-[3px] border-black bg-[#f5f0e8] overflow-x-auto scrollbar-none">
        <div className="bg-[#0a0a0a] text-[#FFE500] font-archive text-sm tracking-[3px] px-5 flex items-center border-r-[3px] border-black whitespace-nowrap min-h-[52px] flex-shrink-0">
          Filtrele
        </div>

        <div className="flex items-stretch flex-1">
          {cats.map((cat, i) => (
            <div
              key={i}
              className={`font-grotesk text-[10px] font-medium uppercase tracking-[1.5px] px-4 md:px-5 flex items-center border-r border-black/10 cursor-pointer whitespace-nowrap transition-all min-h-[52px] hover:bg-black hover:text-[#FFE500] ${i === 0 ? "bg-black text-[#FFE500]" : "text-black"}`}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="flex items-center border-l-[3px] border-black px-4 gap-2 flex-shrink-0 min-h-[52px]">
          <span className="font-grotesk text-[9px] uppercase tracking-[1.5px] text-black/40 whitespace-nowrap hidden sm:block">
            Sırala
          </span>
          <select
            className="border-2 border-black bg-[#f5f0e8] font-grotesk text-[10px] px-2 py-1.5 outline-none cursor-pointer text-black"
            style={{ boxShadow: "2px 2px 0 #0a0a0a" }}
          >
            <option>En Yeni</option>
            <option>En Eski</option>
            <option>En Çok Okunan</option>
          </select>
        </div>
      </div>

      {/* ── SEARCH BAR ── */}
      <div className="px-4 md:px-8 py-4 border-b-[3px] border-black flex items-center gap-4 bg-[#f5f0e8]">
        <input
          type="text"
          placeholder="Yazılarda ara..."
          className="flex-1 max-w-lg border-[3px] border-black bg-[#f5f0e8] font-grotesk text-sm px-4 py-2.5 outline-none text-black focus:bg-[#FFE500] transition-colors placeholder:text-black/30"
          style={{ boxShadow: "4px 4px 0 #0a0a0a" }}
        />
        <span className="font-grotesk text-[10px] uppercase tracking-[1.5px] text-black/40 whitespace-nowrap">
          <span className="text-black font-medium">24</span> sonuç
        </span>
      </div>

      {/* ── POSTS GRID ── */}
      <div className="px-4 md:px-8 pt-6 pb-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-[3px] border-l-[3px] border-black"
          style={{ boxShadow: "6px 6px 0 #0a0a0a" }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className={`
                border-r-[3px] border-b-[3px] border-black
                flex flex-col cursor-pointer
                transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:z-10 relative
                ${post.wide ? "sm:col-span-2" : ""}
                ${post.dark ? "bg-[#0a0a0a]" : ""}
                ${post.accent ? "bg-[#FFE500]" : ""}
                ${!post.dark && !post.accent ? "bg-[#f5f0e8]" : ""}
              `}
              style={post.dark || post.accent ? {} : {}}
            >
              {/* Thumbnail */}
              <div
                className="w-full border-b-[3px] border-black flex items-center justify-center font-archive text-[#f5f0e8]"
                style={{
                  height: post.wide ? "180px" : "130px",
                  fontSize: post.wide ? "64px" : "44px",
                  background: post.bg,
                  color: post.color,
                }}
              >
                {String(post.id).padStart(2, "0")}
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <span
                  className="font-grotesk text-[8px] font-medium uppercase tracking-[2px] px-2 py-0.5 w-fit"
                  style={{
                    background: post.dark ? "#FFE500" : "#0a0a0a",
                    color: post.dark ? "#0a0a0a" : "#f5f0e8",
                  }}
                >
                  {post.cat}
                </span>

                <p
                  className={`font-grotesk font-bold leading-snug ${post.wide ? "text-base" : "text-[13px]"} ${post.dark ? "text-[#f5f0e8]" : "text-[#0a0a0a]"}`}
                >
                  {post.title}
                </p>

                <div
                  className="flex items-center justify-between mt-auto pt-2"
                  style={{
                    borderTop: `1px solid ${post.dark ? "rgba(245,240,232,0.1)" : "rgba(10,10,10,0.1)"}`,
                  }}
                >
                  <span
                    className="font-grotesk text-[9px] uppercase tracking-widest"
                    style={{
                      color: post.dark
                        ? "rgba(245,240,232,0.35)"
                        : "rgba(10,10,10,0.4)",
                    }}
                  >
                    {post.date}
                  </span>
                  <span
                    className="font-grotesk text-[9px] uppercase tracking-widest"
                    style={{
                      color: post.dark
                        ? "rgba(245,240,232,0.25)"
                        : "rgba(10,10,10,0.3)",
                    }}
                  >
                    {post.read}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── LOAD MORE ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 pb-2">
          <button
            className="font-archive text-xl tracking-[3px] bg-[#0a0a0a] text-[#FFE500] border-[3px] border-black px-10 py-3 cursor-pointer transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            style={{ boxShadow: "5px 5px 0 #0a0a0a" }}
          >
            Daha Fazla Yükle
          </button>
          <span className="font-grotesk text-[10px] uppercase tracking-[1.5px] text-black/30">
            12 / 24 yazı gösteriliyor
          </span>
        </div>

        {/* ── PAGINATION ── */}
        <div className="flex items-center justify-center pt-4 pb-8">
          {["←", "1", "2", "3", "...", "8", "→"].map((p, i) => (
            <button
              key={i}
              className={`
                w-10 h-10 border-2 border-black border-r-0 last:border-r-2
                font-grotesk text-[11px] font-medium cursor-pointer
                transition-all hover:bg-black hover:text-[#FFE500]
                ${p === "1" ? "bg-[#FFE500] text-black" : "bg-[#f5f0e8] text-black"}
              `}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
