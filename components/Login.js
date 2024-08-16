import { Fugaz_One } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });


export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center grap-4'>
      <h3 className={' ' + fugaz.className}>Log In / Register</h3>
    </div>
  )
}
