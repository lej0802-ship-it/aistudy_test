import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    q: '처음 시작하는 아이도 괜찮나요?',
    a: '물론입니다! 악기를 전혀 다뤄본 적 없는 분도 입문 과정부터 차근차근 시작할 수 있습니다. 연령과 수준에 맞는 교재와 커리큘럼을 제공합니다.',
  },
  {
    q: '무료 체험 수업은 어떻게 신청하나요?',
    a: '전화(010-0000-0000) 또는 카카오 채널로 문의주시면 일정을 협의하여 1회 무료 체험 수업을 진행합니다. 체험 후 등록 여부를 결정하시면 됩니다.',
  },
  {
    q: '악기를 직접 구매해야 하나요?',
    a: '바이올린의 경우 악기 대여 서비스를 운영하고 있어 처음에는 대여 후 시작하실 수 있습니다. 피아노는 학원 내 연습용 피아노를 사용하시고, 가정에서는 디지털 피아노도 충분합니다.',
  },
  {
    q: '수업 시간 변경이나 휴강이 가능한가요?',
    a: '개인 사정으로 인한 수업 변경은 최소 24시간 전에 연락 주시면 협의하여 조정 가능합니다. 공휴일 및 방학 중 휴강 일정은 별도 공지합니다.',
  },
  {
    q: '콩쿠르나 입시 준비도 도와주시나요?',
    a: '네, 콩쿠르 준비반과 음대 입시 특별 코칭 프로그램을 별도로 운영하고 있습니다. 다년간의 지도 경험을 바탕으로 목표에 맞는 맞춤 준비를 도와드립니다.',
  },
  {
    q: '성인도 배울 수 있나요?',
    a: '물론입니다! 성인 수강생을 위한 별도 커리큘럼을 운영하고 있으며, 평일 저녁 및 주말 시간에 성인 전용 수업이 개설되어 있습니다.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
        <span className="shrink-0 text-purple-600 text-lg">
          {open ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
          {item.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView()
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-purple-900 mb-4">자주 묻는 질문</h2>
          <p className="text-gray-500">궁금한 점이 있으시면 언제든지 문의해 주세요.</p>
        </div>
        <div
          ref={ref}
          className={`space-y-3 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {faqs.map((f, i) => (
            <FAQItem key={i} item={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
