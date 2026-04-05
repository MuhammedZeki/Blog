const posts = [
  { id: 1, cat: 'Teknoloji', title: 'Kod Yazmak mı, Düşünmek mi? Geliştiricinin Varoluş Krizi',          date: '3 Nisan 2026',  read: '8 dk',  bg: '#FF3CAC', color: '#fff',    wide: true },
  { id: 2, cat: 'Tasarım',   title: 'Brutalist Tasarım Neden Geri Döndü?',                               date: '1 Nisan 2026',  read: '5 dk',  bg: '#0a0a0a', color: '#FFE500' },
  { id: 3, cat: 'Felsefe',   title: 'Anlam Arayışı ve Modern İnsan Üzerine Kısa Notlar',                 date: '30 Mart 2026',  read: '6 dk',  bg: '#FFE500', color: '#0a0a0a', accent: true },
  { id: 4, cat: 'Kişisel',   title: 'Sabah Ritüelleri ve Üretkenlik Üzerine',                            date: '28 Mart 2026',  read: '4 dk',  bg: '#FF6B00', color: '#fff' },
  { id: 5, cat: 'Müzik',     title: "Jazz'ın Matematiği: Doğaçlamada Düzen",                             date: '26 Mart 2026',  read: '7 dk',  bg: '#00E5FF', color: '#0a0a0a' },
  { id: 6, cat: 'Sinema',    title: 'Yavaş Sinemanın Geri Dönüşü ve Tarkovsky Etkisi',                   date: '24 Mart 2026',  read: '9 dk',  bg: '#7B2FBE', color: '#fff' },
  { id: 7, cat: 'Teknoloji', title: 'Veri Gizliliği ve Dijital Ayak İzimiz: Gerçekten Kontrolde miyiz?', date: '22 Mart 2026',  read: '10 dk', bg: '#1a1a1a', color: '#FFE500', wide: true },
  { id: 8, cat: 'Tasarım',   title: 'Tipografi: Fontun Sessiz Dili',                                     date: '20 Mart 2026',  read: '5 dk',  bg: '#FF3CAC', color: '#fff' },
  { id: 9, cat: 'Kişisel',   title: 'Doğada Yürüyüş ve Zihinsel Berraklık',                              date: '18 Mart 2026',  read: '3 dk',  bg: '#2E7D32', color: '#fff' },
]

const Posts = () => {
  return (
    <div className="px-4 md:px-8 pb-10">

      <div className="flex items-center justify-between py-6 md:py-8">
        <h2 className="font-archive text-3xl md:text-4xl tracking-widest border-b-4 border-black pb-1">Son Yazılar</h2>
        <button
          className="font-grotesk text-[10px] md:text-[11px] font-medium uppercase tracking-widest border-2 border-black px-3 md:px-5 py-2 cursor-pointer transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
          style={{boxShadow: '4px 4px 0px #0a0a0a'}}
        >
          Tümünü Gör →
        </button>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-[3px] border-black"
        style={{boxShadow: '6px 6px 0px #0a0a0a'}}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className={`border-[1.5px] border-black flex flex-col cursor-pointer transition-all hover:-translate-x-1 hover:-translate-y-1 hover:z-10 relative
              ${post.wide ? 'sm:col-span-2' : ''}
            `}
          >
            <div
              className="w-full flex items-center justify-center font-archive border-b-[3px] border-black"
              style={{
                height: post.wide ? '180px' : '130px',
                background: post.bg,
                color: post.color,
                fontSize: post.wide ? '64px' : '48px'
              }}
            >
              {String(post.id).padStart(2, '0')}
            </div>

            <div
              className="p-4 flex flex-col gap-2 flex-1"
              style={{background: post.accent ? '#FFE500' : '#f5f0e8'}}
            >
              <span className="font-grotesk text-[9px] font-medium uppercase tracking-[2px] bg-black text-white px-2 py-0.5 w-fit">
                {post.cat}
              </span>
              <p className={`font-grotesk font-bold leading-snug text-black ${post.wide ? 'text-base md:text-lg' : 'text-sm'}`}>
                {post.title}
              </p>
              <div className="font-grotesk text-[10px] uppercase tracking-widest text-black/40 mt-auto pt-2 border-t border-black/10">
                {post.date} · {post.read} okuma
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts