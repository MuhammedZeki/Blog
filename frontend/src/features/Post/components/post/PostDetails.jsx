import Breadcrumb from "./Breadcrumb";
import Comments from "./Comments";
import SideBar from "./SideBar";

const morePosts = [
  {
    id: 1,
    cat: "Teknoloji",
    title: "Kod Yazmak mı, Düşünmek mi? Geliştiricinin Varoluş Krizi",
    date: "3 Nisan 2026",
    read: "8 dk",
    bg: "#FF3CAC",
  },
  {
    id: 2,
    cat: "Felsefe",
    title: "Anlam Arayışı ve Modern İnsan Üzerine Kısa Notlar",
    date: "30 Mart 2026",
    read: "6 dk",
    bg: "#FFE500",
  },
  {
    id: 3,
    cat: "Müzik",
    title: "Jazz'ın Matematiği: Doğaçlamada Düzen",
    date: "26 Mart 2026",
    read: "7 dk",
    bg: "#00E5FF",
  },
];

const PostDetails = () => {
  return (
    <div className="font-grotesk">
      <Breadcrumb />

      <div
        className="flex flex-col lg:grid border-l-[3px] border-r-[3px] border-b-[3px] border-black mx-4 md:mx-8"
        style={{
          gridTemplateColumns: "1fr 300px",
          boxShadow: "8px 8px 0px #0a0a0a",
        }}
      >
        {/* ── MAIN CONTENT ── */}
        <main className="border-r-0 lg:border-r-[3px] border-black px-5 md:px-10 py-8 md:py-10 pb-10 md:pb-12">
          {/* Meta */}
          <div className="flex items-center gap-3 flex-wrap mb-5">
            <span
              className="font-grotesk text-[9px] font-medium uppercase tracking-[2px] text-[#f5f0e8] px-3 py-1 border-2 border-black"
              style={{ background: "#FF3CAC" }}
            >
              Tasarım
            </span>
            <span className="font-grotesk text-[10px] uppercase tracking-widest text-black/40">
              01 Nisan 2026
            </span>
            <span className="font-grotesk text-[10px] uppercase tracking-widest text-black/40">
              · 5 Dakika Okuma
            </span>
          </div>

          {/* Title */}
          <h1 className="font-archive text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide text-black mb-5">
            Brutalist Tasarım Neden Yeniden Geri Döndü?
          </h1>

          {/* Subtitle */}
          <p
            className="font-grotesk text-sm md:text-base text-black/55 leading-relaxed mb-5"
            style={{ borderLeft: "4px solid #FFE500", paddingLeft: "14px" }}
          >
            1960'ların ham ve çıplak estetiği, dijital dünyada beklenmedik bir
            çekicilik kazandı. Peki bu dönüşün arkasında ne var?
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-7 pb-6 border-b-2 border-black">
            {["Brutalizm", "UI Tasarım", "Estetik", "Web Trendi"].map((tag) => (
              <span
                key={tag}
                className="font-grotesk text-[9px] font-medium uppercase tracking-[2px] border-2 border-black px-3 py-1 bg-[#f5f0e8] cursor-pointer transition-all hover:bg-black hover:text-[#FFE500]"
                style={{ boxShadow: "2px 2px 0 #0a0a0a" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          <div
            className="w-full h-55 sm:h-75 md:h-90 border-[3px] border-black mb-3 flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
              boxShadow: "5px 5px 0 #0a0a0a",
            }}
          >
            <span className="font-archive text-xl tracking-[4px] text-white/20">
              [ YAZI GÖRSELİ ]
            </span>
          </div>
          <p className="font-grotesk text-[9px] uppercase tracking-widest text-black/35 italic mb-7">
            Fotoğraf: Unsplash / Arşiv
          </p>

          {/* Article Body */}
          <div className="font-grotesk text-[14px] md:text-[15px] leading-[1.8] text-[#1a1a1a]">
            <p className="mb-5">
              Brutalizm, mimarlık dünyasında 1950-70'li yıllarda ortaya çıkmış,
              ham beton, işlenmemiş yüzeyler ve sert geometrik formlarla
              tanımlanan bir akımdır. Uzun süre "çirkin" olarak eleştirilen bu
              estetik, 2010'ların ortasından itibaren dijital tasarım dünyasında
              yeniden doğuş yaşadı.
            </p>

            <p className="mb-5">
              Peki neden şimdi? İnternet giderek daha pürüzsüz ve öngörülebilir
              hale gelirken, bir grup tasarımcı tam tersine gitmek istedi.
              Sonuç: kalın çerçeveler, keskin gölgeler, düz renkler ve göz alıcı
              kontrast.
            </p>

            {/* Blockquote */}
            <div
              className="my-6 py-4 px-5 border-2 border-black border-l-[5px]"
              style={{
                borderLeftColor: "#FF3CAC",
                background: "#fff8e0",
                boxShadow: "4px 4px 0 #0a0a0a",
              }}
            >
              <p className="font-grotesk text-sm md:text-base font-medium italic text-black leading-relaxed">
                "Güzel görünmek zorunda değilsin. Sadece dürüst ol." —
                Neo-Brutalizmin manifesto cümlesi bu olabilir.
              </p>
            </div>

            <h2
              className="font-archive text-2xl md:text-3xl tracking-wide text-black my-6 md:my-8"
              style={{ borderLeft: "5px solid #FFE500", paddingLeft: "12px" }}
            >
              Estetik Bir İsyan
            </h2>

            <p className="mb-5">
              Apple'ın flat design'a geçişi, ardından tüm dünyanın Material
              Design gibi sistemlere uyum sağlaması, web'i homojen bir görünüme
              kavuşturdu. Her şey birbirine benzemeye başladı. Brutalizm bu
              tekdüzeliğe karşı bir başkaldırıydı.
            </p>

            {/* Inline Image */}
            <div
              className="w-full h-40 md:h-50 border-[3px] border-black my-6 md:my-7 flex items-center justify-center"
              style={{ background: "#FF6B00", boxShadow: "5px 5px 0 #0a0a0a" }}
            >
              <span className="font-archive text-base tracking-[3px] text-white/40">
                [ ÖRNEK GÖRSEL ]
              </span>
            </div>

            <h2
              className="font-archive text-2xl md:text-3xl tracking-wide text-black mt-6 md:mt-8 mb-4"
              style={{ borderLeft: "5px solid #FFE500", paddingLeft: "12px" }}
            >
              Dijital Brutalizmin Temel Kuralları
            </h2>

            <h3 className="font-grotesk text-base md:text-lg font-bold text-black mt-5 mb-2">
              1. Kalın Kenarlıklar ve Keskin Gölgeler
            </h3>
            <p className="mb-5">
              Geleneksel tasarımın yumuşak gölgelerinin aksine, Neo-Brutalizm
              sabit, sert ve yönlü gölgeler kullanır. Bu gölgeler gerçekmiş gibi
              hissettiren bir derinlik yaratır.
            </p>

            <h3 className="font-grotesk text-base md:text-lg font-bold text-black mt-5 mb-2">
              2. Yüksek Kontrast Renk Paleti
            </h3>
            <p className="mb-5">
              Sarı, pembe, turuncu, cyan — Neo-Brutalizm doygun ve cesur
              renklerden çekinmez. Bu renkler genellikle siyah çerçevelerle
              sınırlandırılarak organize bir görünüm elde edilir.
            </p>

            <h3 className="font-grotesk text-base md:text-lg font-bold text-black mt-5 mb-2">
              3. Tipografi Bir Tasarım Elemanıdır
            </h3>
            <p className="mb-5">
              Büyük, cesur başlıklar sadece okunmak için değil, görülmek için de
              var. Bebas Neue, Archivo Black gibi fontlar bu tarzın vazgeçilmez
              araçlarına dönüştü.
            </p>
          </div>

          <Comments />
          {/* Post Footer — Author + Share */}
          <div className="mt-8 pt-6 border-t-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 border-2 border-black flex items-center justify-center font-archive text-lg text-[#FFE500] shrink-0"
                style={{
                  background: "#0a0a0a",
                  boxShadow: "3px 3px 0 #0a0a0a",
                }}
              >
                AK
              </div>
              <div>
                <div className="font-grotesk text-sm font-bold text-black">
                  Ahmet Karakalem
                </div>
                <div className="font-grotesk text-[9px] uppercase tracking-widest text-black/40 mt-0.5">
                  Yazar & Tasarım Eleştirmeni
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-grotesk text-[9px] uppercase tracking-[2px] text-black/40 mr-1">
                Paylaş
              </span>
              {["X", "FB", "LI", "LK"].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 border-2 border-black bg-[#f5f0e8] font-grotesk text-[10px] font-medium cursor-pointer transition-all hover:bg-black hover:text-[#FFE500] hover:-translate-x-0.5 hover:-translate-y-0.5"
                  style={{ boxShadow: "3px 3px 0 #0a0a0a" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* ── SIDEBAR ── */}
        <SideBar />
      </div>

      <div
        className="mx-4 md:mx-8 mb-8 border-[3px] border-t-0 border-black"
        style={{ boxShadow: "8px 8px 0 #0a0a0a" }}
      >
        <div className="px-5 md:px-6 py-4 bg-black border-b-[3px] border-black flex items-center justify-between">
          <div className="font-archive text-xl tracking-[3px] text-[#FFE500]">
            Bunları da Okuyun
          </div>
          <button className="font-grotesk text-[9px] uppercase tracking-[2px] border border-white/20 text-white/50 px-4 py-1.5 cursor-pointer hover:border-[#FFE500] hover:text-[#FFE500] transition-all">
            Tüm Yazılar →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {morePosts.map((post, i) => (
            <div
              key={post.id}
              className={`flex flex-col cursor-pointer bg-[#f5f0e8] transition-colors hover:bg-[#fff8e0] border-b-[3px] sm:border-b-0 border-black ${i < morePosts.length - 1 ? "sm:border-r-[3px] sm:border-black" : ""}`}
            >
              <div
                className="h-30 md:h-32.5 border-b-[3px] border-black flex items-center justify-center font-archive text-4xl text-[#f5f0e8]"
                style={{ background: post.bg }}
              >
                {String(post.id).padStart(2, "0")}
              </div>
              <div className="p-4 flex flex-col gap-1.5 flex-1">
                <span className="font-grotesk text-[8px] uppercase tracking-[2px] text-[#FF3CAC]">
                  {post.cat}
                </span>
                <p className="font-grotesk text-sm font-bold leading-snug text-black">
                  {post.title}
                </p>
                <div className="font-grotesk text-[9px] uppercase tracking-widest text-black/35 mt-auto pt-2 border-t border-black/10">
                  {post.date} · {post.read} okuma
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
