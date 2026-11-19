import { BriefcaseBusiness, CarFront, House, PawPrint, Plane, Smartphone } from 'lucide-react'

export const categories = [
  { id: 'car', title: 'سيارة أحلامك', label: 'السيارات', description: 'لامبورغيني ولا سرفيس؟ خلّينا نلاقي اللي يوصّلك.', icon: CarFront, color: 'purple', hint: 'على قدّ طموحك' },
  { id: 'house', title: 'بيت يليق فيك', label: 'البيوت', description: 'قصر بإطلالة؟ ولا إطلالة على قصر؟ نشوف سوا.', icon: House, color: 'pink', hint: 'مفتاح أحلامك' },
  { id: 'job', title: 'شغل على مزاجك', label: 'الوظائف', description: 'من مدير تنفيذي... لمدير جروب العيلة. وين مكانك؟', icon: BriefcaseBusiness, color: 'cyan', hint: 'مستقبلك المهني' },
  { id: 'travel', title: 'وجهتك الجاية', label: 'السفر', description: 'المالديف بتناديك. والمحفظة إلها رأي تاني.', icon: Plane, color: 'blue', hint: 'جهّز الشنطة' },
  { id: 'phone', title: 'موبايل يشبهك', label: 'الموبايلات', description: 'آخر إصدار ولا آخر الميزانية؟ بنلاقي الحل الوسط.', icon: Smartphone, color: 'amber', hint: 'اتصال مع الواقع' },
  { id: 'pet', title: 'رفيقك الأليف', label: 'الحيوانات الأليفة', description: 'مين رح يتبنّى مين؟ هذا هو السؤال الحقيقي.', icon: PawPrint, color: 'green', hint: 'صداقة على مقاسك' },
] as const

export type CategoryId = (typeof categories)[number]['id']
export type Category = (typeof categories)[number]

export const HUMOR_LEVELS = ['light', 'medium', 'wild'] as const
export type HumorLevel = (typeof HUMOR_LEVELS)[number]

export const TRAITS = ['luxury', 'saving', 'comfort', 'adventure', 'tech', 'lazy', 'ambitious', 'social', 'practical', 'dreamy', 'chaotic'] as const
export type Trait = (typeof TRAITS)[number]

export function getCategory(id: string | undefined) {
  return categories.find((category) => category.id === id)
}
