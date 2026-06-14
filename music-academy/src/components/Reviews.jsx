import { useInView } from '@/hooks/useInView'
import { FiStar } from 'react-icons/fi'

const reviews = [
  {
    name: '김○○ 학부모',
    subject: '피아노 수강 (초등 3년)',
    text: '아이가 처음에는 피아노를 싫어했는데 선생님의 열정적인 지도 덕분에 지금은 스스로 연습하러 가겠다고 조릅니다. 콩쿠르에서 입상도 했어요!',
    stars: 5,
  },
  {
    name: '이○○ 학부모',
    subject: '바이올린 수강 (초등 2년)',
    text: '악기 대여 서비스가 있어서 처음 시작할 때 부담이 없었어요. 선생님이 아이의 눈높이에 맞게 차근차근 가르쳐주셔서 빠르게 늘었습니다.',
    stars: 5,
  },
  {
    name: '박○○ 성인 수강생',
    subject: '성인 피아노 수강 (1년)',
    text: '40대에 처음 피아노를 시작했는데 전혀 부담 없이 즐겁게 배우고 있습니다. 선생님이 성인 학습자 특성에 맞춰 지도해 주셔서 효과가 좋아요.',
    stars: 5,
  },
  {
    name: '최○○ 학부모',
    subject: '보컬 수강 (중학생 1년)',
    text: '아이가 뮤지컬을 꿈꾸고 있는데 발성부터 감정 표현까지 체계적으로 가르쳐주셔서 정말 감사합니다. 학교 뮤지컬에서 주역을 맡았어요.',
    stars: 5,
  },
  {
    name: '정○○ 학부모',
    subject: '피아노 수강 (5세~)',
    text: '어린 아이도 지루하지 않게 재미있는 방식으로 음악을 접하게 해주셔서 너무 좋습니다. 선생님과 아이의 호흡이 잘 맞아요.',
    stars: 5,
  },
  {
    name: '강○○ 학부모',
    subject: '음악이론 + 피아노 병행',
    text: '이론과 실기를 함께 배우니 실력이 훨씬 빠르게 늘었습니다. 선생님들이 항상 친절하고 학원 분위기도 정말 좋아요. 강력 추천합니다!',
    stars: 5,
  },
]

function ReviewCard({ review, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.stars }).map((_, i) => (
          <FiStar key={i} className="text-amber-400 fill-amber-400 text-sm" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-5">"{review.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm">
          {review.name[0]}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
          <p className="text-xs text-gray-400">{review.subject}</p>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            REVIEWS
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-purple-900 mb-4">수강생 후기</h2>
          <p className="text-gray-500">직접 경험한 수강생과 학부모님의 이야기를 들어보세요.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
