import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView()
  return (
    <section className="py-24 bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-700 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 text-[12rem] flex items-center justify-center select-none pointer-events-none">
        🎵
      </div>
      <div
        ref={ref}
        className={`relative z-10 max-w-2xl mx-auto px-5 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl lg:text-4xl font-black mb-4">무료 체험 수업 신청하기</h2>
        <p className="text-purple-200 text-lg mb-10">
          처음이라면 부담 없이 체험 수업부터 시작해 보세요.<br />
          전화 한 통으로 음악 여정을 시작할 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:010-0000-0000"
            className="bg-white text-purple-700 font-bold px-8 py-4 rounded-full hover:bg-amber-400 hover:text-white transition-all hover:-translate-y-0.5 shadow-lg text-base"
          >
            📞 지금 바로 문의하기
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all hover:-translate-y-0.5 text-base"
          >
            오시는 길 보기
          </a>
        </div>
      </div>
    </section>
  )
}
