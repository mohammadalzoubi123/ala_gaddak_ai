import { ArrowRight, Bot } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return <section className="quiz-page container"><div className="quiz-panel"><span className="quiz-large-icon"><Bot size={34} /></span><span className="error-code english">404</span><h1>حتى هبّود بيضيع أحيانًا.</h1><p>هالصفحة مش موجودة، بس نصيبك لسه بستناك.</p><Link to="/" className="button button-primary"><ArrowRight size={18} /> ارجع للرئيسية</Link></div></section>
}
