'use client'
import React, { useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { VscColorMode } from 'react-icons/vsc'
import { CgDarkMode } from 'react-icons/cg'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useTheme } from "next-themes";

const DarkLightMode = () => {
    const [hover, setHover] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const onClickDark = () => {
        setTheme('dark')
    }
    const onClickLight = () => {
        setTheme('light')
    }
    const onClickDefault = () => {
        setTheme('default')
    }

    return (
        <>
            <div className="relative">
                <button onClick={() => setHover(!hover)} className='modeHoverDLD transition ease-in-out duration-300 rounded-full font-semibold cursor-pointer flex items-center'><i className='px-1 py-2 w-8 text-xl'><CgDarkMode /></i><b> Mood</b> <i className='px-1 py-2 text-2xl font-semibold'> <RiArrowDropDownLine /> </i></button>
                {hover && <ul className="modeOnOff absolute text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black px-4 py-4 my-3">
                    <li className='py-2 flex items-center'><b className='text-2xl mx-2 cursor-pointer'><MdDarkMode /></b><b className='w-28 cursor-pointer' onClick={onClickDark}>Dark Mood</b></li>
                    <li className='py-2 flex items-center'><b className='text-2xl mx-2 cursor-pointer'><MdLightMode /></b><b className='w-28 cursor-pointer' onClick={onClickLight}>Light Mood</b></li>
                    <li className='py-2 flex items-center'><b className='text-2xl mx-2 cursor-pointer'><VscColorMode /></b><b className='w-28 cursor-pointer' onClick={onClickDefault}>Default Mood</b></li>
                </ul>}
            </div>
        </>
    )
}

export default DarkLightMode
