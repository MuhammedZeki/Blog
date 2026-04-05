const SliderContent = () => {
  return (
    <section className="border-b-[3px] border-black">
      <div className="relative w-full min-h-[320px] md:min-h-[500px] bg-black flex flex-col justify-end p-6 md:p-12 cursor-pointer overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] to-black z-0" />
        <div
          className="absolute inset-0 z-[1] opacity-5"
          style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,229,0,0.3) 30px, rgba(255,229,0,0.3) 32px)'}}
        />

        <span className="relative z-10 inline-block bg-[#FF3CAC] text-white border-2 border-black font-grotesk text-[10px] uppercase tracking-[2px] px-3 py-1 mb-4 w-fit">
          Öne Çıkan
        </span>

        <h1 className="relative z-10 font-archive text-5xl sm:text-6xl md:text-8xl leading-[0.9] tracking-wide text-[#f5f0e8] mb-6 max-w-4xl">
          Dijital Çağda<br />Yazmanın Anlamı
        </h1>

        <p className="relative z-10 font-grotesk text-sm md:text-base text-white/60 max-w-xl mb-6 leading-relaxed">
          Kelimeler ekrana döküldüğünde ne kaybediyoruz, ne kazanıyoruz? Modern yazarlığın sessiz krizi üzerine bir deneme.
        </p>

        <div className="relative z-10 flex items-center gap-4 flex-wrap">
          <span className="font-grotesk text-[11px] text-white/40 uppercase tracking-widest">04 Nisan 2026</span>
          <span className="font-grotesk text-[11px] text-white/40 uppercase tracking-widest">·</span>
          <span className="font-grotesk text-[11px] text-white/40 uppercase tracking-widest">8 dk okuma</span>
          <button className="font-grotesk bg-[#FFE500] text-black border-2 border-[#FFE500] text-[11px] uppercase tracking-widest px-5 py-2 cursor-pointer hover:bg-transparent hover:text-[#FFE500] transition-all ml-2"
            style={{boxShadow: '3px 3px 0px rgba(255,229,0,0.4)'}}>
            Oku →
          </button>
        </div>

      </div>
    </section>
  )
}

export default SliderContent