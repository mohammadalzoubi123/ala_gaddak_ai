import { ArrowDown, ArrowLeft, ArrowUpLeft, Check, ChevronLeft, CirclePlay, Clock3, Fingerprint, Lightbulb, MessageCircle, MousePointer2, ScanFace, ShieldCheck, Sparkles, WandSparkles, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/CategoryCard'
import { categories } from '../data/categories'

const steps = [
  { number: '01', icon: MousePointer2, title: 'اختار اللي محيّرك', description: 'سيارة، شغل، سفر... اختار مجال وخلّي الباقي علينا.' },
  { number: '02', icon: MessageCircle, title: 'احكي لهبّود عنك', description: 'كم سؤال خفيف عن ذوقك وطموحك. خليك على طبيعتك.' },
  { number: '03', icon: WandSparkles, title: 'خُذ الهبد... والنصيحة', description: 'توصية مش متوقّعة، ضحكة مضمونة من هبّود، وفايدة إلك.' },
]

export default function HomePage() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="eyebrow-spark"><Sparkles size={14} /></span> ذكاء اصطناعي... مع شوية هبد <span className="new-pill">نسخة تجريبية</span></div>
          <h1 id="hero-title">أحلامك كبيرة؟<br />خلّينا نشوف<br /><span className="gradient-text">شو على قدّك.</span><span className="title-spark" aria-hidden="true">✳</span></h1>
          <p className="hero-description">تعرّف على هبّود، مستشارك الذكي اللي ما بيجاملك.<br className="desktop-break" /> جاوب بصراحة، وخُذ توصية بتضحّكك... ويمكن تفيدك!</p>
          <div className="hero-actions">
            <Link to="/#categories" className="button button-primary">يلا، ورّيني نصيبي <ArrowLeft size={19} /></Link>
            <Link to="/#how-it-works" className="button button-secondary"><CirclePlay size={19} /> كيف بتشتغل؟</Link>
          </div>
          <div className="hero-assurances"><span><Check size={14} /> بدون تسجيل</span><span><Clock3 size={14} /> دقيقة من وقتك</span><span><Sparkles size={14} /> هبد مسؤول</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <span className="visual-star star-one" aria-hidden="true">+</span><span className="visual-star star-two" aria-hidden="true">+</span>
          <div className="robot-image-wrap"><img className="hero-robot" src="/images/habboud.png" width="1024" height="1024" alt="هبّود، روبوت بنفسجي لطيف يلوّح لك بيده" fetchPriority="high" /></div>
          <div className="robot-greeting"><span className="greeting-icon"><MessageCircle size={18} /></span><span>أنا هبّود.<br /><strong>ثق فيني... تقريبًا.</strong></span><span className="greeting-dot" /></div>
          <div className="floating-label floating-label-top"><Sparkles size={14} /><span>بفهم عليك، ما بحكم عليك</span></div>
          <div className="floating-label floating-label-bottom"><span className="tiny-status" /><span>جاري تحليل طموحاتك...</span><span className="analysis-bars" aria-hidden="true"><i /><i /><i /><i /></span></div>
          <div className="robot-caption"><span className="caption-line" /><span>HBBOUD™ <span>—</span> YOUR HONEST AI BUDDY</span><span className="caption-line" /></div>
        </div>
      </section>

      <div className="container"><div className="principles-strip"><span className="strip-intro"><span className="little-star">✦</span> مش أي ذكاء اصطناعي.</span><span><Fingerprint size={18} /> توصيات بتشبهك</span><span><Lightbulb size={18} /> نصيحة بجد</span><span><ScanFace size={18} /> مزح بدون تجريح</span><span><ShieldCheck size={18} /> خصوصيتك محفوظة</span><span className="strip-end english" lang="en">100% YOU. 0% JUDGEMENT.</span></div></div>

      <section id="categories" className="categories-section container" aria-labelledby="categories-title" tabIndex={-1}>
        <div className="section-heading"><div><div className="section-eyebrow"><span /> كل حكاية بتبدأ باختيار</div><h2 id="categories-title">شو شاغل بالك <span className="muted-heading">اليوم؟</span></h2><p>اختار مجالك، وهبّود بيتكفّل بالباقي. لا تفكّر كتير.</p></div><div className="section-side-note"><span>٦ مجالات. احتمالات كتير.</span><ArrowDown size={17} /></div></div>
        <div className="category-grid">{categories.map((category, index) => <CategoryCard key={category.id} category={category} index={index} />)}</div>
        <div className="category-bottom-note"><span className="mini-habboud"><Zap size={13} /></span><span>نصيحة من هبّود: اختار بقلبك، وخلي الحسابات عليّ.</span><span className="handdrawn-arrow" aria-hidden="true">↖</span></div>
      </section>

      <section id="how-it-works" className="how-section" aria-labelledby="how-title" tabIndex={-1}>
        <div className="container">
          <div className="section-heading centered"><div><div className="section-eyebrow"><span /> الموضوع أبسط مما بتتخيّل</div><h2 id="how-title">ثلاث خطوات. <span className="muted-heading">وشوية مفاجآت.</span></h2><p>لا امتحان، لا إجابة غلط. بس إنت، وهبّود، والصراحة.</p></div></div>
          <div className="steps-grid">{steps.map((step, index) => <div className="step" key={step.number}><div className="step-top"><span className="step-icon"><step.icon size={24} strokeWidth={1.5} /></span><span className="step-number english">{step.number}</span></div><h3>{step.title}</h3><p>{step.description}</p>{index < steps.length - 1 && <ChevronLeft className="step-connector" size={20} />}</div>)}</div>
        </div>
      </section>

      <section id="about" className="about-section container" aria-labelledby="about-title" tabIndex={-1}>
        <div className="about-card"><div className="about-avatar"><img src="/images/habboud.png" width="1024" height="1024" alt="" loading="lazy" /></div><div className="about-copy"><div className="section-eyebrow">قلبه طيّب، ولسانه طويل شوي</div><h2 id="about-title">مش خبير بحياتك. <span>بس صاحب إلك.</span></h2><p>هبّود هون عشان يفكّرك إن أحلى القرارات بتبدأ لما تعرف نفسك.<br />بنمزح معك، مش عليك. وبين كل هبدة وهبدة، في نصيحة بتستاهل.</p></div><Link to="/#categories" className="button about-button">تعرّف على نصيبك <ArrowUpLeft size={18} /></Link></div>
      </section>
    </>
  )
}
