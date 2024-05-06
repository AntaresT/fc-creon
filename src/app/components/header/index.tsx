'use client'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../../../public/assets/Logo.svg'
import Badge from '../badge'

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="bg-transparent w-screen overflow-hidden flex z-20">
        <div className="w-screen px-5 lg:px-12 pt-8 flex justify-between">
          <button>
            <Image
              src={Logo}
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </button>

          <div className="hidden md:flex">
            <ul className="flex items-center space-x-5 pr-14">
              <li className="font-satoshi drop-shadow-lg">Creon Pass</li>
              <li className="font-satoshi drop-shadow-lg flex">
                <span className="items-center inline-flex h-12">Token</span>
                <Badge>soon</Badge>
              </li>
              <li className="font-satoshi drop-shadow-lg flex">
                <span className="items-center inline-flex h-12">
                  AI Revenue
                </span>
                <Badge>soon</Badge>
              </li>
              <li className="font-satoshi drop-shadow-lg flex">
                <span className="items-center inline-flex h-12">
                  AI Launchpad
                </span>
                <Badge>soon</Badge>
              </li>
            </ul>
            <button className="border-solid border-2 border-white rounded-md py-2 px-3 drop-shadow-lg">
              Connect
            </button>
          </div>

          <section className="MOBILE-MENU flex lg:hidden">
            <button onClick={() => handleClick()} className="space-y-1 group">
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                      }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                      }`}
              ></span>
            </button>

            <div className={isOpen ? 'block absolute' : 'hidden'}>
              <ul className="bg-black w-86 pb-10 absolute -top-full right-0 duration-150 flex flex-col space-y-3 justify-end">
                <button className="border-solid border-2 border-white rounded-md py-2 px-3 drop-shadow-lg">
                  Connect
                </button>

                <li className="font-satoshi flex justify-end w-50 py-4 hover:bg-purple-300">
                  Creon Pass
                </li>
                <li className="font-satoshi flex justify-end w-50 py-4 hover:bg-purple-300">
                  <span className="items-center inline-flex h-12">Token</span>
                  <Badge>soon</Badge>
                </li>
                <li className="font-satoshi flex justify-end w-50 py-4 hover:bg-purple-300">
                  <span className="items-center inline-flex h-12">
                    AI Revenue
                  </span>
                  <Badge>soon</Badge>
                </li>
                <li className="font-satoshi flex justify-end w-50 py-4 hover:bg-purple-300">
                  <span className="items-center inline-flex h-12">
                    AI Launchpad
                  </span>
                  <Badge>soon</Badge>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </nav>
    </>
  )
}
