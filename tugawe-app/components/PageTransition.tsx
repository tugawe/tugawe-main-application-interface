'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    setTransitionStage('fadeOut')
  }, [pathname])

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage('fadeIn')
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [transitionStage, children])

  return (
    <div
      className={`transition-opacity duration-150 ${
        transitionStage === 'fadeOut' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {displayChildren}
    </div>
  )
}
