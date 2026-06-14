import { useInView } from '@/hooks/useInView'

const rows = [
  { time: '14:00 – 15:00', mwf: '피아노 (유아/초등 초급)', tth: '바이올린 (유아/초등)', sat: '음악 이론 그룹반' },
  { time: '15:00 – 16:00', mwf: '피아노 (초등 중급)', tth: '피아노 (초등 초급)', sat: '피아노 (중·고급)' },
  { time: '16:00 – 17:00', mwf: '보컬 (초등 이상)', tth: '바이올린 (중급)', sat: '보컬 · 성악' },
  { time: '17:00 – 18:00', mwf: '피아노 (중·고등)', tth: '피아노 (중·고등)', sat: '개인 레슨 (예약)' },
  { time: '18:00 – 19:00', mwf: '성인 피아노', tth: '성인 바이올린', sat: '—' },
]

export default function Schedule() {
  const [ref, inView] = useInView()
  return (
    <section id="schedule" className="py-24 bg-purple-50">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            SCHEDULE
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-purple-900 mb-4">수업 시간표</h2>
          <p className="text-gray-500">개인 레슨은 협의 후 시간 조정이 가능합니다.</p>
        </div>

        <div
          ref={ref}
          className={`overflow-x-auto rounded-2xl shadow-lg transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-purple-700 text-white">
                <th className="px-5 py-4 text-left font-semibold whitespace-nowrap">시간</th>
                <th className="px-5 py-4 text-left font-semibold">월 · 수 · 금</th>
                <th className="px-5 py-4 text-left font-semibold">화 · 목</th>
                <th className="px-5 py-4 text-left font-semibold">토</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {rows.map((r, i) => (
                <tr key={r.time} className={i % 2 === 1 ? 'bg-purple-50/50' : ''}>
                  <td className="px-5 py-4 font-semibold text-purple-700 whitespace-nowrap border-b border-purple-50">
                    {r.time}
                  </td>
                  <td className="px-5 py-4 text-gray-600 border-b border-purple-50">{r.mwf}</td>
                  <td className="px-5 py-4 text-gray-600 border-b border-purple-50">{r.tth}</td>
                  <td className="px-5 py-4 text-gray-600 border-b border-purple-50">{r.sat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          ※ 시간표는 상황에 따라 변경될 수 있습니다. 자세한 내용은 전화로 문의해 주세요.
        </p>
      </div>
    </section>
  )
}
