'use client'
import Image from 'next/image'
import { ReactNode, useState } from 'react'

interface IAccordion {
  title: string
  children: ReactNode
  srcImage: string
}

export default function Accordion({ title, children, srcImage }: IAccordion) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="font-satoshi mb-4 w-500px">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <Image
          src={srcImage}
          width={100}
          height={100}
          alt="accordionImage"
          priority
        />
        <h3 className="text-2xl w-full">
          <strong>{title}</strong>
        </h3>
        <svg
          className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          stroke="white"
          fill="white"
        >
          <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
        </svg>
      </div>
      {isOpen && <div className="p-4 flex text-lg">{children}</div>}
    </div>
  )
}
