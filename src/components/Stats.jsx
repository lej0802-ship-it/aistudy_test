import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

const stats = [
  { value: 15, suffix: '+', label: '년 교육 경력' },
  { value: 500, suffix: '+', label: '졸업 수강생' },
  { value: 4, suffix: '개', label: '전문 수업 과목' },
  { value: 98, suffix: '%', label: '수강생 만족도' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * ease))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="text-4xl font-black text-purple-700">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <div className="bg-white border-y border-purple-50 py-12">
      <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-gray-500 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
