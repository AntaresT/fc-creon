import { ReactNode } from 'react'

interface IBadge {
  children: ReactNode
}

export default function Badge({ children }: IBadge) {
  return (
    <span className="font-satoshi inline-flex rounded-full self-baseline px-1 pb-0.5 text-xs text-center font-xs text-purple-600 ring-1 ring-inset ring-black bg-black">
      {children}
    </span>
  )
}
