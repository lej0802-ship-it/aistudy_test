import { MdMusicNote } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-purple-300 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <MdMusicNote className="text-amber-400 text-2xl" />
          이화멜로디음악학원
        </div>
        <div className="text-sm text-center space-y-1">
          <p>서울특별시 ○○구 ○○동 000-0 ○○빌딩 3층 | 대표: ○○○</p>
          <p>Tel: 010-0000-0000 | 사업자등록번호: 000-00-00000</p>
        </div>
        <p className="text-xs text-purple-500">© 2026 이화멜로디음악학원</p>
      </div>
    </footer>
  )
}
