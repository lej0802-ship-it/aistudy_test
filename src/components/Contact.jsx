import { useInView } from '@/hooks/useInView'
import { FiMapPin, FiPhone, FiMessageSquare, FiClock, FiNavigation } from 'react-icons/fi'

const info = [
  {
    icon: <FiMapPin />,
    label: '주소',
    value: '서울특별시 ○○구 ○○동 000-0\n○○빌딩 3층',
  },
  {
    icon: <FiPhone />,
    label: '전화',
    value: '010-0000-0000',
  },
  {
    icon: <FiMessageSquare />,
    label: '카카오톡',
    value: '카카오채널: 이화멜로디음악학원',
  },
  {
    icon: <FiClock />,
    label: '운영 시간',
    value: '평일 14:00 – 19:00\n토요일 13:00 – 17:00\n일요일 · 공휴일 휴원',
  },
  {
    icon: <FiNavigation />,
    label: '교통',
    value: '○○역 2번 출구 도보 5분',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            CONTACT
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-purple-900 mb-4">오시는 길 & 연락처</h2>
          <p className="text-gray-500">언제든지 편하게 연락 주세요. 무료 체험 수업을 신청하실 수 있습니다.</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900 mb-6">학원 정보</h3>
            {info.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div>
            <div
              className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl h-80 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-purple-200 cursor-pointer hover:border-purple-400 hover:shadow-lg transition-all group"
              onClick={() => window.open('https://map.kakao.com', '_blank')}
            >
              <span className="text-5xl group-hover:scale-110 transition-transform">🗺️</span>
              <p className="font-bold text-purple-700">지도 보기</p>
              <p className="text-sm text-gray-500">카카오맵으로 연결</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="tel:010-0000-0000"
                className="flex items-center justify-center gap-2 bg-purple-700 text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-purple-800 transition-colors"
              >
                <FiPhone />
                전화 문의
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-amber-400 text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-amber-500 transition-colors"
              >
                <FiMessageSquare />
                카카오 문의
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
