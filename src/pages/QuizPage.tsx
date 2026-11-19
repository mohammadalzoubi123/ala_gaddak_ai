import { useEffect } from 'react'
import { ArrowRight, Check, Construction, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { getCategory } from '../data/categories'

export default function QuizPage() {
  const { categoryId } = useParams()
  const category = getCategory(categoryId)

  useEffect(() => {
    document.title = category ? `${category.title} — على قدّك AI` : 'الفئة مش موجودة — على قدّك AI'
    return () => { document.title = 'على قدّك AI — هبد ذكي، ونصيحة بجد' }
  }, [category])

  if (!category) {
    return <section className="quiz-page container"><div className="quiz-panel"><span className="quiz-large-icon"><Sparkles size={32} /></span><h1>هبّود ما لقى هالفئة.</h1><p>يمكن أخدنا لفة غلط. ارجع واختار من المجالات الستة.</p><Link to="/#categories" className="button button-primary"><ArrowRight size={18} /> ارجع للمجالات</Link></div></section>
  }

  const Icon = category.icon
  return (
    <section className="quiz-page container" aria-labelledby="quiz-title">
      <Link className="back-link" to="/#categories"><ArrowRight size={17} /> تغيير المجال</Link>
      <div className={`quiz-panel accent-${category.color}`}>
        <div className="quiz-progress" aria-label="الخطوة الأولى: تم اختيار المجال"><span className="completed-step"><Check size={14} /> اختيار المجال</span><span className="progress-line" /><span>الأسئلة</span><span className="progress-line" /><span>التوصية</span></div>
        <span className="quiz-large-icon"><Icon size={34} strokeWidth={1.5} /></span>
        <div className="section-eyebrow">اختيار حلو! هبّود متحمّس</div>
        <h1 id="quiz-title">خلّينا نحكي عن <span className="gradient-text">{category.title}</span></h1>
        <p>{category.description}</p>
        <div className="integration-notice" role="status"><Construction size={22} /><div><h2>الاختبار لسه عم يتجهّز</h2><p>تم اختيار مجالك بنجاح. الأسئلة والتوصيات رح تتوفر لما تكتمل المرحلة الجاية من المشروع.</p></div></div>
        <Link to="/#categories" className="button button-secondary"><ArrowRight size={17} /> استكشف مجال تاني</Link>
        <span className="integration-id" dir="ltr" lang="en">category: {category.id}</span>
      </div>
    </section>
  )
}
