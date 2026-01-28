import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { pathname, asPath, query, locales } = router
  return (
    <div className="flex items-center gap-2">
      {locales && locales.map(loc => (
        <Link key={loc} href={{ pathname, query }} as={asPath} locale={loc}>
          <a className="text-sm">{loc.toUpperCase()}</a>
        </Link>
      ))}
    </div>
  )
}
