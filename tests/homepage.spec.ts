import { expect, test } from '@playwright/test'

const categories = [
  ['car', 'سيارة أحلامك'],
  ['house', 'بيت يليق فيك'],
  ['job', 'شغل على مزاجك'],
  ['travel', 'وجهتك الجاية'],
  ['phone', 'موبايل يشبهك'],
  ['pet', 'رفيقك الأليف'],
] as const

for (const [id, title] of categories) {
  test(`${id} opens its correct integration route and returns to categories`, async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: `ابدأ اختبار ${title}`, exact: true }).click()
    await expect(page).toHaveURL(`/quiz/${id}`)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(title)
    await expect(page.getByRole('status')).toContainText('الاختبار لسه عم يتجهّز')
    await expect(page.locator('.integration-id')).toHaveText(`category: ${id}`)
    await expect(page.locator('input')).toHaveCount(0)
    await page.getByRole('link', { name: 'تغيير المجال' }).click()
    await expect(page).toHaveURL('/#categories')
    await expect(page.locator('#categories')).toBeFocused()
  })
}

for (const width of [320, 390, 632, 768, 1024, 1440]) {
  test(`homepage fits ${width}px and loads the mascot`, async ({ page }, testInfo) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.locator('.category-card')).toHaveCount(6)
    const layout = await page.evaluate(() => ({
      viewport: window.innerWidth,
      document: document.documentElement.scrollWidth,
      imageLoaded: (document.querySelector('.hero-robot') as HTMLImageElement).naturalWidth > 0,
    }))
    expect(layout.document).toBeLessThanOrEqual(layout.viewport)
    expect(layout.imageLoaded).toBe(true)
    expect(errors).toEqual([])
    if (width === 390 || width === 1440) {
      await page.screenshot({ path: testInfo.outputPath(`homepage-${width}.png`), fullPage: true, animations: 'disabled' })
    }
    await page.goto('/quiz/pet')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('رفيقك الأليف')
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width)
  })
}

test('hero and desktop navigation links lead to the relevant sections', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await page.getByRole('link', { name: 'يلا، ورّيني نصيبي' }).click()
  await expect(page).toHaveURL('/#categories')
  await expect(page.locator('#categories')).toBeFocused()
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.getByRole('link', { name: 'يلا، ورّيني نصيبي' }).click()
  await expect(page.locator('#categories')).toBeFocused()
  await page.locator('.desktop-nav').getByRole('link', { name: 'كيف بتشتغل؟' }).click()
  await expect(page).toHaveURL('/#how-it-works')
  await expect(page.locator('#how-it-works')).toBeFocused()
  await page.locator('.desktop-nav').getByRole('link', { name: 'مين هبّود؟' }).click()
  await expect(page).toHaveURL('/#about')
  await expect(page.locator('#about')).toBeFocused()
  await page.getByRole('link', { name: 'تعرّف على نصيبك' }).click()
  await expect(page).toHaveURL('/#categories')
})

test('mobile menu closes on navigation and Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.locator('.menu-toggle')
  await menu.click()
  await expect(menu).toHaveAttribute('aria-expanded', 'true')
  await page.locator('#mobile-nav').getByRole('link', { name: 'مين هبّود؟' }).click()
  await expect(page).toHaveURL('/#about')
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await menu.click()
  await page.locator('#mobile-nav a').first().focus()
  await page.keyboard.press('Escape')
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await expect(menu).toBeFocused()
})

test('category cards work with the keyboard and browser back', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.locator('.skip-link')).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#main')).toBeFocused()
  await page.locator('.category-card').first().focus()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL('/quiz/car')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('سيارة أحلامك')
  await page.goBack()
  await expect(page.locator('.category-card')).toHaveCount(6)
})

test('direct category visits, invalid IDs, and unknown paths are handled', async ({ page }) => {
  await page.goto('/quiz/pet')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('رفيقك الأليف')
  await page.reload()
  await expect(page.locator('.integration-id')).toHaveText('category: pet')
  await page.goto('/quiz/invalid')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('هبّود ما لقى هالفئة.')
  await page.getByRole('link', { name: 'ارجع للمجالات' }).click()
  await expect(page).toHaveURL('/#categories')
  await page.goto('/missing-page')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('حتى هبّود بيضيع أحيانًا.')
  await page.getByRole('link', { name: 'ارجع للرئيسية' }).click()
  await expect(page).toHaveURL('/')
})

test('reduced-motion preference disables decorative animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const animation = await page.locator('.hero-robot').evaluate(el => getComputedStyle(el).animationName)
  expect(animation).toBe('none')
})
