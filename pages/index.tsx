import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='dark:text-neutral-100 text-neutral-900'>Hello World</div>
  )
}
