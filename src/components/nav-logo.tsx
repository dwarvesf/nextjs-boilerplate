'use client'

import * as React from 'react'

import { Logo } from './logo'
import { useSidebar } from './ui/sidebar'
import { cn } from '@/lib/utils'

export function NavLogo() {
  const { open } = useSidebar()

  return (
    <div
      className={cn('flex items-center', {
        'p-2': open,
        'justify-center': !open,
      })}
    >
      <Logo className={open ? 'w-7' : 'mt-1 w-4.5'} />
      {open ? (
        <div className="flex flex-col whitespace-nowrap">
          <span className="text-sidebar-foreground ml-2 text-sm font-semibold">
            Dwarves Foundation
          </span>
          <span className="text-sidebar-accent-foreground ml-2 text-xs">
            Consulting Firm
          </span>
        </div>
      ) : null}
    </div>
  )
}
