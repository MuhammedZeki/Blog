import React from "react";
const cloudTags = [
  "Tasarım",
  "Teknoloji",
  "Felsefe",
  "UI/UX",
  "Kişisel",
  "Müzik",
  "Sinema",
  "Brutalizm",
  "Yazarlık",
];
const relatedPosts = [
  {
    id: 1,
    cat: "Teknoloji",
    title: "Kod Yazmak mı, Düşünmek mi?",
    date: "3 Nisan 2026",
    bg: "#FF3CAC",
  },
  {
    id: 2,
    cat: "Felsefe",
    title: "Anlam Arayışı ve Modern İnsan",
    date: "30 Mart 2026",
    bg: "#FF6B00",
  },
  {
    id: 3,
    cat: "Kişisel",
    title: "Sabah Ritüelleri ve Üretkenlik",
    date: "28 Mart 2026",
    bg: "#0a0a0a",
  },
  {
    id: 4,
    cat: "Müzik",
    title: "Jazz'ın Matematiği",
    date: "26 Mart 2026",
    bg: "#00E5FF",
  },
];
const SideBar = () => {
  return (
    <aside className="border-t-[3px] lg:border-t-0 border-black px-5 md:px-6 py-7 flex flex-col gap-0">
      {/* İlgili Yazılar */}
      <div className="pb-6 mb-6 border-b-2 border-black">
        <div className="font-archive text-lg tracking-[2px] text-black mb-4 flex items-center gap-2">
          İlgili Yazılar
          <span className="flex-1 h-0.5 bg-black block" />
        </div>

        {/* Mobilde yatay scroll, masaüstünde dikey liste */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="flex lg:flex-row gap-2.5 p-2 cursor-pointer transition-colors hover:bg-[#FFE500]/20 -mx-2 shrink-0 lg:shrink w-50 lg:w-auto"
            >
              <div
                className="w-14 h-14 border-2 border-black shrink-0 flex items-center justify-center font-archive text-lg text-[#f5f0e8]"
                style={{ background: post.bg }}
              >
                {String(post.id).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <div className="font-grotesk text-[8px] uppercase tracking-[2px] text-[#FF3CAC] mb-1">
                  {post.cat}
                </div>
                <div className="font-grotesk text-[12px] font-bold leading-snug text-black line-clamp-2">
                  {post.title}
                </div>
                <div className="font-grotesk text-[8px] uppercase tracking-widest text-black/35 mt-1">
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Etiketler */}
      <div className="pb-6 mb-6 border-b-2 border-black">
        <div className="font-archive text-lg tracking-[2px] text-black mb-4 flex items-center gap-2">
          Etiketler
          <span className="flex-1 h-0.5 bg-black block" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {cloudTags.map((tag) => (
            <span
              key={tag}
              className="font-grotesk text-[8px] uppercase tracking-[1.5px] border border-black px-2.5 py-1 bg-[#f5f0e8] cursor-pointer transition-all hover:bg-black hover:text-[#FFE500]"
              style={{ boxShadow: "2px 2px 0 #0a0a0a" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div
        className="border-[3px] border-black p-5"
        style={{ background: "#0a0a0a", boxShadow: "5px 5px 0 #0a0a0a" }}
      >
        <div className="font-archive text-2xl tracking-[2px] text-[#FFE500] leading-none mb-1">
          Bülten'e Katıl
        </div>
        <div className="font-grotesk text-[11px] text-white/50 mb-4 leading-relaxed">
          Her hafta yeni yazılar doğrudan posta kutuna gelsin.
        </div>
        <input
          type="email"
          placeholder="e-posta adresin..."
          className="w-full border-2 border-white/20 bg-white/5 text-[#f5f0e8] font-grotesk text-[10px] px-3 py-2 outline-none mb-2 focus:border-[#FFE500] transition-colors placeholder:text-white/25"
        />
        <button
          className="w-full bg-[#FFE500] text-black border-2 border-[#FFE500] font-archive text-base tracking-[2px] py-2 cursor-pointer transition-all hover:bg-transparent hover:text-[#FFE500]"
          style={{ boxShadow: "3px 3px 0 rgba(255,229,0,0.3)" }}
        >
          Abone Ol
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
