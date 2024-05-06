import { ReactNode } from 'react'

interface IPassNftItem {
  children: ReactNode
}

export default function PassNFTItems({ children }: IPassNftItem) {
  return (
    <h5 className="font-satoshi border rounded-md w-fit border-darkCian px-4 pt-12px pb-4">
      {children}
    </h5>
  )
}
