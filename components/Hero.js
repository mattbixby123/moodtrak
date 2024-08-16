import { Fugaz_One } from 'next/font/google';
import React from 'react'
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });


export default function Hero() {
  return (
    <div className='py-10 sm:py-14 md:py-20'>
      <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}><span>moodTrak</span> helps you track your <span>daily</span> mood!</h1>
    </div>
  )
}
