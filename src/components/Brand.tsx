import { Bot } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="على قدّك AI — الصفحة الرئيسية">
      <span className="brand-mark"><Bot size={25} strokeWidth={1.8} /></span>
      <span className="brand-wordmark">على قدّك<span className="brand-ai" lang="en">AI</span></span>
    </Link>
  )
}
