const comments = [
  {
    id: 1,
    name: "Mert Kaya",
    date: "2 Nisan 2026 · 14:32",
    text: 'Çok yerinde bir yazı olmuş. Özellikle "güzel görünmek zorunda değilsin" kısmı gerçekten sektörde önemli bir şeyin özeti. Minimal tasarımın her şeye çözüm olmadığını artık daha fazla kişi fark ediyor.',
    likes: 12,
    bg: "#FF3CAC",
    color: "#f5f0e8",
    initials: "MK",
    replies: [
      {
        id: 11,
        name: "Ahmet Karakalem",
        isAuthor: true,
        date: "2 Nisan 2026 · 15:10",
        text: "Teşekkürler Mert! Tam da bu yüzden bu yazıyı yazmak istedim. Güzellik bazen dürüstlüğün önüne geçiyor ve bu iyi bir şey değil.",
        likes: 5,
        bg: "#FFE500",
        color: "#0a0a0a",
        initials: "AK",
      },
      {
        id: 12,
        name: "Selin Yıldız",
        isAuthor: false,
        date: "2 Nisan 2026 · 16:45",
        text: "Kesinlikle katılıyorum. Figma'daki her şey çok pürüzsüz olunca kullanıcıyla duygusal bir bağ kurulamıyor.",
        likes: 3,
        bg: "#FF6B00",
        color: "#fff",
        initials: "SY",
      },
    ],
  },
  {
    id: 2,
    name: "Burak Tekin",
    date: "1 Nisan 2026 · 09:18",
    text: "Tarkovsky'nin yavaş sinema etkisini bu alana uyarlamanız ilginç bir perspektif. Brutalizm ile sinema estetiği arasındaki bağı hiç bu şekilde düşünmemiştim. Bir de bunu mimari açıdan ele alan bir yazı yazabilir misiniz?",
    likes: 8,
    bg: "#00E5FF",
    color: "#0a0a0a",
    initials: "BT",
    replies: [
      {
        id: 21,
        name: "Ahmet Karakalem",
        isAuthor: true,
        date: "1 Nisan 2026 · 11:30",
        text: "Harika bir fikir Burak! Mimari brutalizm ile dijital brutalizm arasındaki köprüyü kuran bir yazı kesinlikle gündemdeki yerini alacak.",
        likes: 4,
        bg: "#FFE500",
        color: "#0a0a0a",
        initials: "AK",
      },
    ],
  },
  {
    id: 3,
    name: "Ece Arslan",
    date: "31 Mart 2026 · 20:55",
    text: '"Tipografi görülmek için var" cümlesi çok doğru. Hep işlevsellik ön planda tutulurken görsel etkinin bıraktığı iz sıkça göz ardı ediliyor.',
    likes: 6,
    bg: "#7B2FBE",
    color: "#fff",
    initials: "EA",
    replies: [],
  },
];

import { useState } from "react";

const ReplyForm = ({ targetName, onCancel }) => (
  <div className="border-t-2 border-black flex flex-col gap-3 p-4 bg-[#fff8e0]">
    <div className="font-grotesk text-[9px] uppercase tracking-[2px] text-[#FF3CAC] flex items-center gap-1">
      <span className="text-sm">↳</span> {targetName}'a yanıt yazıyorsun
    </div>
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        placeholder="Adın..."
        className="flex-1 border-2 border-black bg-[#f5f0e8] font-grotesk text-xs px-3 py-2 outline-none focus:bg-white transition-colors placeholder:text-black/30 placeholder:font-grotesk placeholder:text-[10px]"
        style={{ boxShadow: "2px 2px 0 #0a0a0a" }}
      />
      <input
        type="email"
        placeholder="E-posta..."
        className="flex-1 border-2 border-black bg-[#f5f0e8] font-grotesk text-xs px-3 py-2 outline-none focus:bg-white transition-colors placeholder:text-black/30 placeholder:font-grotesk placeholder:text-[10px]"
        style={{ boxShadow: "2px 2px 0 #0a0a0a" }}
      />
    </div>
    <textarea
      placeholder="Yanıtını yaz..."
      rows={3}
      className="w-full border-2 border-black bg-[#f5f0e8] font-grotesk text-xs px-3 py-2 outline-none resize-none focus:bg-white transition-colors leading-relaxed placeholder:text-black/30 placeholder:font-grotesk placeholder:text-[10px]"
      style={{ boxShadow: "2px 2px 0 #0a0a0a" }}
    />
    <div className="flex items-center justify-end gap-2">
      <button
        onClick={onCancel}
        className="border-2 border-black bg-transparent font-grotesk text-[9px] uppercase tracking-[1.5px] px-4 py-1.5 cursor-pointer hover:bg-black/8 transition-colors"
      >
        İptal
      </button>
      <button
        className="bg-[#FF3CAC] text-[#f5f0e8] border-2 border-black font-archive text-sm tracking-[2px] px-5 py-1.5 cursor-pointer transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
        style={{ boxShadow: "3px 3px 0 #0a0a0a" }}
      >
        Yanıtla
      </button>
    </div>
  </div>
);

const Reply = ({ reply }) => {
  const [likes, setLikes] = useState(reply.likes);
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative px-5 py-4 bg-[#faf6ee] border-b border-black/10 last:border-b-0">
      {/* Sol sarı çizgi */}
      <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-[#FFE500]" />

      <div className="pl-4">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 border-2 border-black flex items-center justify-center font-archive text-xs flex-shrink-0"
              style={{
                background: reply.bg,
                color: reply.color,
                boxShadow: "2px 2px 0 #0a0a0a",
              }}
            >
              {reply.initials}
            </div>
            <div>
              <div className="font-grotesk text-[13px] font-bold text-black flex items-center gap-1 flex-wrap">
                {reply.name}
                {reply.isAuthor && (
                  <span className="font-grotesk text-[8px] bg-black text-[#FFE500] px-1.5 py-0.5 tracking-[1px] uppercase">
                    Yazar
                  </span>
                )}
              </div>
              <div className="font-grotesk text-[8px] uppercase tracking-[1.5px] text-black/35 mt-0.5">
                {reply.date}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setLiked(!liked);
              setLikes(liked ? likes - 1 : likes + 1);
            }}
            className="flex items-center gap-1 border border-black font-grotesk text-[8px] uppercase tracking-[1px] px-2 py-1 cursor-pointer transition-all"
            style={{
              background: liked ? "#FFE500" : "#faf6ee",
              boxShadow: "2px 2px 0 #0a0a0a",
            }}
          >
            ♥ {likes}
          </button>
        </div>
        <p className="font-grotesk text-[13px] leading-[1.7] text-[#2a2a2a]">
          {reply.text}
        </p>
      </div>
    </div>
  );
};

const Comment = ({ comment }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [liked, setLiked] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);

  return (
    <div className="border-[3px] border-b-0 border-black last:border-b-[3px] bg-[#f5f0e8]">
      {/* Comment body */}
      <div className="p-5 pb-4">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          {/* User */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 border-2 border-black flex items-center justify-center font-archive text-base flex-shrink-0"
              style={{
                background: comment.bg,
                color: comment.color,
                boxShadow: "3px 3px 0 #0a0a0a",
              }}
            >
              {comment.initials}
            </div>
            <div>
              <div className="font-grotesk text-sm font-bold text-black">
                {comment.name}
              </div>
              <div className="font-grotesk text-[9px] uppercase tracking-[1.5px] text-black/35 mt-0.5">
                {comment.date}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setLiked(!liked);
                setLikes(liked ? likes - 1 : likes + 1);
              }}
              className="flex items-center gap-1.5 border-2 border-black font-grotesk text-[9px] uppercase tracking-[1.5px] px-2.5 py-1 cursor-pointer transition-all"
              style={{
                background: liked ? "#FFE500" : "#f5f0e8",
                boxShadow: "2px 2px 0 #0a0a0a",
              }}
            >
              ♥ {likes}
            </button>
            <button
              onClick={() => setReplyOpen(!replyOpen)}
              className="border-2 border-black bg-[#f5f0e8] font-grotesk text-[9px] uppercase tracking-[1.5px] px-2.5 py-1 cursor-pointer transition-all hover:bg-black hover:text-[#FFE500]"
              style={{ boxShadow: "2px 2px 0 #0a0a0a" }}
            >
              ↩ Yanıtla
            </button>
          </div>
        </div>

        <p className="font-grotesk text-sm leading-[1.7] text-[#1a1a1a]">
          {comment.text}
        </p>
      </div>

      {/* Reply form */}
      {replyOpen && (
        <ReplyForm
          targetName={comment.name}
          onCancel={() => setReplyOpen(false)}
        />
      )}

      {/* Replies */}
      {comment.replies.length > 0 && (
        <div className="border-t-2 border-black">
          {comment.replies.map((reply) => (
            <Reply key={reply.id} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

const Comments = () => {
  return (
    <div className="font-grotesk mt-10 pt-8 border-t-[3px] border-black">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="font-archive text-4xl tracking-[2px] border-b-4 border-black pb-1 flex items-center gap-3">
          Yorumlar
          <span
            className="font-grotesk text-sm bg-black text-[#FFE500] px-3 py-1 tracking-[2px] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {comments.reduce((acc, c) => acc + 1 + c.replies.length, 0)}
          </span>
        </div>
      </div>

      {/* Yorum Formu */}
      <div
        className="border-[3px] border-black mb-8"
        style={{ boxShadow: "6px 6px 0 #0a0a0a" }}
      >
        <div className="bg-black px-5 py-3 border-b-[3px] border-black">
          <div className="font-archive text-xl tracking-[2px] text-[#FFE500]">
            Yorum Yaz
          </div>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Adın..."
              className="flex-1 border-2 border-black bg-[#f5f0e8] font-grotesk text-sm px-4 py-2.5 outline-none focus:bg-[#fff8e0] transition-colors placeholder:text-black/30 placeholder:text-xs"
              style={{ boxShadow: "3px 3px 0 #0a0a0a" }}
            />
            <input
              type="email"
              placeholder="E-posta (gizli tutulur)..."
              className="flex-1 border-2 border-black bg-[#f5f0e8] font-grotesk text-sm px-4 py-2.5 outline-none focus:bg-[#fff8e0] transition-colors placeholder:text-black/30 placeholder:text-xs"
              style={{ boxShadow: "3px 3px 0 #0a0a0a" }}
            />
          </div>
          <textarea
            placeholder="Düşüncelerini yaz..."
            rows={4}
            className="w-full border-2 border-black bg-[#f5f0e8] font-grotesk text-sm px-4 py-2.5 outline-none resize-y focus:bg-[#fff8e0] transition-colors leading-relaxed placeholder:text-black/30 placeholder:text-xs"
            style={{ boxShadow: "3px 3px 0 #0a0a0a" }}
          />
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span className="font-grotesk text-[9px] uppercase tracking-[1.5px] text-black/35">
              E-posta adresin yayınlanmayacak
            </span>
            <button
              className="bg-black text-[#FFE500] border-[3px] border-black font-archive text-lg tracking-[2px] px-8 py-2.5 cursor-pointer transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{ boxShadow: "4px 4px 0 #0a0a0a" }}
            >
              Gönder
            </button>
          </div>
        </div>
      </div>

      {/* Yorumlar */}
      {comments.length === 0 ? (
        <div
          className="border-[3px] border-black p-10 text-center"
          style={{ boxShadow: "4px 4px 0 #0a0a0a" }}
        >
          <div className="font-archive text-3xl tracking-[2px] text-black mb-2">
            Henüz Yorum Yok
          </div>
          <div className="font-grotesk text-[10px] uppercase tracking-[1.5px] text-black/35">
            İlk yorumu sen yap!
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>

          {/* Daha Fazla Yükle */}
          <div className="flex justify-center pt-6">
            <button
              className="font-grotesk text-[10px] uppercase tracking-[2px] border-2 border-black px-8 py-3 cursor-pointer transition-all hover:bg-black hover:text-[#FFE500] hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{ boxShadow: "4px 4px 0 #0a0a0a" }}
            >
              Daha Fazla Yorum Yükle (21)
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
