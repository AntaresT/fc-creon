import { ReactNode } from 'react'

interface IGradientBtn {
  children: ReactNode
}

const GradientButton = ({ children }: IGradientBtn) => {
  return (
    <button className="font-satoshi relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:to-blue-500 hover:via-blue-500 hover:from-blue-500 hover:shadow-lg">
      <span className="absolute top-full left-0 w-full h-full bg-gradient-to-t from-black opacity-40"></span>
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default GradientButton
