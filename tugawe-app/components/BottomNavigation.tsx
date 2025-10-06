'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Star,
  MessageSquare, 
  Globe, 
  User, 
  FileText, 
  Settings,
  Search,
  LucideIcon
} from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Favorite', icon: Star },
  { href: '/trend-analysis', label: 'Trending Words', icon: MessageSquare },
  { href: '/sentiment', label: 'Language', icon: Globe },
  { href: '/account', label: 'Profile', icon: User },
  { href: '/reports', label: 'Reports', icon: FileText },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/search', label: 'Search', icon: Search },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
