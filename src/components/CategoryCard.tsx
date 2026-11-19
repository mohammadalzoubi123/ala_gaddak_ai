import { ArrowUpLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Category } from '../data/categories'

export function CategoryCard({ category, index }: { category: Category; index: number }) {
  const Icon = category.icon
  return (
    <Link to={`/quiz/${category.id}`} className={`category-card accent-${category.color}`} aria-label={`ابدأ اختبار ${category.title}`}>
      <div className="card-top">
        <span className="category-icon"><Icon size={27} strokeWidth={1.65} /></span>
        <span className="category-hint">{category.hint}</span>
        <span className="card-arrow"><ArrowUpLeft size={19} /></span>
      </div>
      <h3>{category.title}</h3>
      <p>{category.description}</p>
      <span className="category-number" aria-hidden="true" dir="ltr">0{index + 1}</span>
    </Link>
  )
}
