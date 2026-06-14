import { motion } from 'framer-motion'

const notes = ['♩', '♪', '♫', '♬', '♩', '♪', '♫']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Floating music notes */}
      {notes.map((note, i) => (
        <motion.span
          key={i}
          className="absolute text-purple-200 select-none pointer-events-none font-bold"
          style={{
            fontSize: `${1.5 + (i % 3) * 0.8}rem`,
            left: `${5 + i * 13}%`,
            top: `${15 + (i % 4) * 18}%`,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {note}
        </motion.span>
      ))}

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-6"
        >
          🎵 15년 전통의 음악 전문 학원
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-900 leading-tight tracking-tight mb-6"
        >
          음악으로 피어나는
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            특별한 재능
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          피아노·바이올린·보컬까지 — 아이의 음악적 감성을 꽃피울 수 있는
          1:1 맞춤 전문 교육을 제공합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#curriculum"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#curriculum')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-purple-700 text-white font-bold px-8 py-4 rounded-full hover:bg-purple-800 transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-300"
          >
            수업 알아보기
          </a>
          <a
            href="tel:010-0000-0000"
            className="bg-white text-purple-700 font-bold px-8 py-4 rounded-full border-2 border-purple-200 hover:border-purple-400 transition-all hover:-translate-y-0.5 shadow-md"
          >
            무료 체험 신청
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-purple-300"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-purple-300 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
