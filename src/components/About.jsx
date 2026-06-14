import { useInView } from '@/hooks/useInView'
import { MdCheckCircle } from 'react-icons/md'

const values = [
  '연령·수준별 1:1 맞춤 커리큘럼',
  '검증된 15년 경력의 전문 강사진',
  '소규모 정예 클래스 (최대 6명)',
  '콩쿠르·입시 전문 코칭 프로그램',
  '무료 악기 대여 서비스 운영',
  '첫 달 무료 체험 수업 제공',
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <div
          ref={ref}
          className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl aspect-[4/3] flex items-center justify-center text-8xl">
            🎼
          </div>
          <div className="absolute -bottom-5 -right-5 bg-amber-400 text-white rounded-2xl px-6 py-4 shadow-lg">
            <p className="text-2xl font-black">15+</p>
            <p className="text-xs font-semibold mt-0.5">년 전통</p>
          </div>
        </div>

        {/* Text */}
        <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            ABOUT US
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-purple-900 leading-tight mb-5">
            음악을 사랑하는<br />모든 분을 위한 공간
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            이화멜로디음악학원은 2009년 개원 이래 수백 명의 수강생과 함께해 왔습니다.
            단순한 기술 습득을 넘어 음악을 통해 감성과 창의성을 키우는 것을 목표로,
            각 학생의 개성과 속도에 맞는 교육을 제공합니다.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                <MdCheckCircle className="text-purple-500 text-lg shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
