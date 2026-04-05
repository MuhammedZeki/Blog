import { useState } from "react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-[#FFE500] border-b-[3px] border-black sticky top-0 z-50">
      <div className="px-4 md:px-8 flex items-center justify-between h-[60px] md:h-[72px]">
        
        <div className="font-archive text-2xl md:text-4xl tracking-widest leading-none">
          LAHANA<span className="text-[#FF3CAC]" style={{WebkitTextStroke: '1px black'}}>HANDE</span>
        </div>

        <nav className="hidden md:flex items-stretch h-full">
          {['Ana Sayfa', 'Yazılar', 'Hakkımda', 'İletişim'].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`font-grotesk text-xs font-medium uppercase tracking-widest px-5 flex items-center text-black no-underline transition-all hover:bg-black hover:text-[#FFE500] ${i !== 0 ? 'border-l-2 border-black' : ''}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:block font-grotesk bg-black text-[#FFE500] border-[3px] border-black px-4 py-2 text-xs uppercase tracking-widest font-medium cursor-pointer"
            style={{boxShadow: '3px 3px 0px #0a0a0a'}}>
            ⌕ Ara
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 border-2 border-black bg-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-5 h-0.5 bg-[#FFE500] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#FFE500] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#FFE500] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t-[3px] border-black flex flex-col">
          {['Ana Sayfa', 'Yazılar', 'Hakkımda', 'İletişim'].map((item, i) => (
            <a
              key={i}
              href="#"
              className="font-grotesk text-sm font-medium uppercase tracking-widest px-6 py-4 text-black border-b-2 border-black hover:bg-black hover:text-[#FFE500] transition-all"
            >
              {item}
            </a>
          ))}
          <div className="px-6 py-4">
            <input type="text" placeholder="Yazı ara..." className="w-full border-2 border-black font-grotesk text-sm px-3 py-2 outline-none bg-[#f5f0e8] focus:bg-white" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Header