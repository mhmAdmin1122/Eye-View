'use client'
import React, { useState } from 'react'
import { FaHome, FaUserCircle } from 'react-icons/fa'
import { MdSchool, MdDeveloperMode, MdVideoFile, MdLibraryMusic, MdShoppingBag, MdOutlineMenu } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'
import { SiCodeproject, SiBookstack } from 'react-icons/si'
import { RiLoginCircleFill } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'
import Link from 'next/link'

const LeftSideBar = () => {
    const [show, setShow] = useState(true);
    const [showToster1, setShowToster1] = useState(false);
    const [showToster2, setShowToster2] = useState(false);
    const [showToster3, setShowToster3] = useState(false);
    const [showToster4, setShowToster4] = useState(false);
    const [showToster5, setShowToster5] = useState(false);
    const [showToster6, setShowToster6] = useState(false);
    const [showToster7, setShowToster7] = useState(false);
    const [showToster8, setShowToster8] = useState(false);
    const [showToster9, setShowToster9] = useState(false);
    const handleOnclick = () => {
        setShow(current => !current);
    }
    const onMouseOver1 = () => {
        setShowToster1(true)
    }
    const onMousOut1 = () => {
        setShowToster1(false)
    }
    const onMouseOver2 = () => {
        setShowToster2(true)
    }
    const onMousOut2 = () => {
        setShowToster2(false)
    }
    const onMouseOver3 = () => {
        setShowToster3(true)
    }
    const onMousOut3 = () => {
        setShowToster3(false)
    }
    const onMouseOver4= () => {
        setShowToster4(true)
    }
    const onMousOut4 = () => {
        setShowToster4(false)
    }
    const onMouseOver5 = () => {
        setShowToster5(true)
    }
    const onMousOut5 = () => {
        setShowToster5(false)
    }
    const onMouseOver6 = () => {
        setShowToster6(true)
    }
    const onMousOut6 = () => {
        setShowToster6(false)
    }
    const onMouseOver7 = () => {
        setShowToster7(true)
    }
    const onMousOut7 = () => {
        setShowToster7(false)
    }
    const onMouseOver8 = () => {
        setShowToster8(true)
    }
    const onMousOut8 = () => {
        setShowToster8(false)
    }
    const onMouseOver9 = () => {
        setShowToster9(true)
    }
    const onMousOut9 = () => {
        setShowToster9(false)
    }
    return (
        <>
            <div className={show ? "w-12 z-20 top-16 fixed leftSideBar grid justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "w-48 z-20 top-16 fixed leftSideBar grid justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}>
                <div className="menueIcon">
                    <b className={show ? "pl-2 py-2 flex items-center justify-start w-full text-3xl cursor-pointer" : "py-2 px-1 flex items-center justify-center w-full text-3xl cursor-pointer"} onClick={handleOnclick}>
                        {show ? <b><MdOutlineMenu /></b> : <b> <ImCross /> </b>}
                    </b>
                </div>
                <ul className="SideTbsList">
                    <Link href="/">
                        <li className={show ? "sidebarTabsList flex items-center py-3 relative" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver1} onMouseOut={onMousOut1}>  <FaHome /></b>
                            {show ? "" : <b>Home</b>}
                            {showToster1 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Home</div>
                            </div>}
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={show ? "sidebarTabsList flex items-center py-3" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver2} onMouseOut={onMousOut2}><MdSchool /></b>
                            {show ? "" : <b>Education</b>}
                            {showToster2 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Education</div>
                            </div>}
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={show ? "sidebarTabsList flex items-center py-3" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver3} onMouseOut={onMousOut3}><MdDeveloperMode /></b>
                            {show ? "" : <b>Programming</b>}
                            {showToster3 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Programming</div>
                            </div>}
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={show ? "sidebarTabsList flex items-center py-3" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver4} onMouseOut={onMousOut4}><TbCertificate /></b>
                            {show ? "" : <b>Certification</b>}
                            {showToster4 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Certification</div>
                            </div>}
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={show ? "sidebarTabsList flex items-center py-3 relative" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver5} onMouseOut={onMousOut5}><MdVideoFile /></b>
                            {show ? "" : <b>Shorts</b>}
                            {showToster5 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Shorts</div>
                            </div>}
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={show ? "sidebarTabsList flex items-center py-3 relative" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver6} onMouseOut={onMousOut6}><SiCodeproject /></b>
                            {show ? "" : <b>Projects</b>}
                            {showToster6 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Projects</div>
                            </div>}
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={show ? "sidebarTabsList flex items-center py-3 relative" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver7} onMouseOut={onMousOut7}><SiBookstack /></b>
                            {show ? "" : <b>Courses</b>}
                            {showToster7 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Courses</div>
                            </div>}
                        </li>
                    </Link>
                    <Link href="/video">
                        <li className={show ? "sidebarTabsList flex items-center py-3 relative" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver8} onMouseOut={onMousOut8}><MdLibraryMusic /></b>
                            {show ? "" : <b>Entertainment</b>}
                            {showToster8 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Entertainment</div>
                            </div>}
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={show ? "sidebarTabsList flex items-center py-3 relative" : "sidebarTabsList flex items-center py-2"}>
                            <b className='px-2 text-3xl' onMouseOver={onMouseOver9} onMouseOut={onMousOut9}><MdShoppingBag /></b>
                            {show ? "" : <b>Products</b>}
                            {showToster9 && <div className="tosterTitle transition duration-300 ease-out">
                                <div className="titleBox-Toster bubble relative w-28 h-10 bg-gray-400 rounded flex items-center justify-center ml-3 font-bold">Products</div>
                            </div>}
                        </li>
                    </Link>
                </ul>
                {show ? "" : <div className="sidBar-login-logout flex items-center justify-between py-2 px-1 border-t-2 border-white w-48">
                    <div className="flex items-center justify-between w-full">
                        <div className="profileData flex items-center">
                            <div className="ProfilePicIcon px-2">
                                <b className='text-3xl cursor-pointer'><FaUserCircle /></b>
                            </div>
                            <div className="userName">
                                <h1 className='cursor-default'>Guest</h1>
                            </div>
                        </div>
                        <div className="logOutIconBox">
                            <b className='text-3xl cursor-pointer logoutIco'><RiLoginCircleFill /></b>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default LeftSideBar
