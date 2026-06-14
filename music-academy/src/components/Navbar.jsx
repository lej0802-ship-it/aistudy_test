import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { MdMusicNote } from 'react-icons/md'

const links = [
  { href: '#about', label: '학원 소개' },
  { href: '#curriculum', label: '수업 안내' },
  { href: '#teachers', label: '강사진' },
  { href: '#schedule', label: '시간표' },
  { href: '#reviews', label: '수강 후기' },
  { href: '#contact', label: '오시는 길' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLink(e, '#')}
            className="flex items-center gap-1.5 font-bold text-purple-800 text-lg tracking-tight"
          >
            <MdMusicNote className="text-amber-500 text-2xl" />
            이화멜로디<span className="text-amber-500">음악학원</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleLink(e, l.href)}
                  className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="tel:010-0000-0000"
            className="hidden md:flex items-center gap-2 bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-purple-800 transition-colors shadow-md shadow-purple-200"
          >
            <FiPhone />
            상담 문의
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl text-purple-800 p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => handleLink(e, l.href)}
            className="text-2xl font-semibold text-purple-800 hover:text-amber-500 transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="tel:010-0000-0000"
          className="mt-4 flex items-center gap-2 bg-purple-700 text-white text-base font-bold px-8 py-3.5 rounded-full"
        >
          <FiPhone />
          010-0000-0000
        </a>
      </div>
    </>
  )
}
