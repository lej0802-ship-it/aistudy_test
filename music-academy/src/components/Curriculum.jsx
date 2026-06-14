import { useInView } from '@/hooks/useInView'

const courses = [
  {
    icon: '🎹',
    name: '피아노',
    levels: '입문 · 초급 · 중급 · 고급',
    desc: '바이엘부터 쇼팽까지 단계별 교재로 탄탄한 기초와 음악적 표현력을 키웁니다.',
    details: ['대상: 5세 이상 전 연령', '월 8회(주2) / 월 4회(주1)', '개인·소그룹 레슨 가능'],
    color: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50',
  },
  {
    icon: '🎻',
    name: '바이올린',
    levels: '입문 · 초급 · 중급',
    desc: '스즈키 메소드와 국내 교재를 병행하여 올바른 자세와 보잉 기법을 익힙니다.',
    details: ['대상: 6세 이상 전 연령', '월 8회(주2) / 월 4회(주1)', '악기 대여 서비스 운영'],
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
  },
  {
    icon: '🎤',
    name: '보컬 / 성악',
    levels: '입문 · 중급',
    desc: '발성법·호흡·음정 훈련부터 장르별 보컬 테크닉까지 전문적으로 지도합니다.',
    details: ['대상: 초등학생 이상', '월 4회 또는 8회 선택', '오디션 준비반 별도 운영'],
    color: 'from-amber-400 to-orange-400',
    bg: 'bg-amber-50',
  },
  {
    icon: '🎼',
    name: '음악 이론',
    levels: '전 연령',
    desc: '음악 기초 이론, 청음, 리듬 훈련을 통해 모든 악기 학습의 기반을 다집니다.',
    details: ['대상: 5세 이상 전 연령', '월 4회 그룹 수업', '다른 수업과 병행 추천'],
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
  },
]

function CourseCard({ course, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />
      <div className={`${course.bg} p-6 text-center text-5xl`}>{course.icon}</div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{course.name}</h3>
        <span className="inline-block text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-4">
          {course.levels}
        </span>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">{course.desc}</p>
        <ul className="space-y-2">
          {course.details.map((d) => (
            <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            CURRICULUM
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-purple-900 mb-4">수업 커리큘럼</h2>
          <p className="text-gray-500">연령과 수준에 맞는 체계적인 음악 교육 프로그램을 제공합니다.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <CourseCard key={c.name} course={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
