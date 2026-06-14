import { useInView } from '@/hooks/useInView'

const teachers = [
  {
    emoji: '👩‍🎤',
    name: '김이화',
    role: '피아노 전임',
    career: '한국예술종합학교 음악원 졸업\n서울시립교향악단 협연\n피아노 지도 경력 12년',
    awards: '2018 한국음악콩쿠르 지도자상',
    color: 'bg-purple-100',
  },
  {
    emoji: '👨‍🎻',
    name: '박선율',
    role: '바이올린 전임',
    career: '연세대학교 음악대학 졸업\n국내외 콩쿠르 다수 입상\n바이올린 지도 경력 10년',
    awards: '2020 전국학생음악콩쿠르 최우수 지도자',
    color: 'bg-rose-100',
  },
  {
    emoji: '🎤',
    name: '이하모니',
    role: '보컬 / 성악 전임',
    career: '경희대학교 음악대학 성악과 졸업\n뮤지컬 배우 활동 5년\n보컬 지도 경력 8년',
    awards: '2021 뮤지컬 보컬 대회 심사위원',
    color: 'bg-amber-100',
  },
]

function TeacherCard({ teacher, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`${teacher.color} w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-5`}>
        {teacher.emoji}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
      <p className="text-purple-600 text-sm font-semibold mt-1 mb-4">{teacher.role}</p>
      <ul className="space-y-1.5 text-sm text-gray-500 text-left mb-5">
        {teacher.career.split('\n').map((line) => (
          <li key={line} className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">•</span>
            {line}
          </li>
        ))}
      </ul>
      <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-xs text-amber-700 font-medium">
        🏆 {teacher.awards}
      </div>
    </div>
  )
}

export default function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            TEACHERS
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-purple-900 mb-4">전문 강사진</h2>
          <p className="text-gray-500">각 분야 최고의 전문가들이 함께합니다.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {teachers.map((t, i) => (
            <TeacherCard key={t.name} teacher={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
