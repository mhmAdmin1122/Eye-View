'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/../public/img/android-chrome-192x192.png'
import Link from 'next/link'
import DarkLightMode from './DarkLightMode'
import { fjalla_One } from '../fonts';

const Header = () => {

    return (
        <>
            <nav className="w-full z-10 header-container flex items-center justify-between text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 fixed">
                <div className="Logo-Box">
                    <div className="ImageBox">
                        <Link href="/" className='flex items-center' title='View-Eye Home'>
                            <Image src={logo} alt='logo-pic' className='w-16 px-2 py-2 cursor-pointer' /><b className={`${fjalla_One.className} text-2xl`}>View-Eye</b>
                        </Link>
                    </div>
                </div>
                <ul className="navTabsList flex items-center">
                    <DarkLightMode />
                    <Link href="/"><li className='px-4 py-1 font-semibold cursor-pointer'>Home</li></Link>
                    <Link href="/about"><li className='px-4 py-1 font-semibold cursor-pointer'>About</li></Link>
                    <Link href="/contactus"><li className='px-4 py-1 font-semibold cursor-pointer'>Contact Us</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Header
