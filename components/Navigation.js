import React, { useState, useEffect } from 'react'

import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun} from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs'
import { MdTableRows } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navigation({toggleCart}) {
    
    const [screenWidth, setScreenWidth] = useState(0)
    useEffect(() => {
        setScreenWidth(window.screen.width)
    }, [])
    console.log(screenWidth)

    const Search = () =>  <span className='search'><FaSearch size='14'/></span>
    
    const Shop = () => <a href='/shop' className='shop'>Shop</a>;
    
    const Brand = () => <h4 className='brand'><span className='cursor-pointer' onClick={() => {location.href="/"}}>Earthlone</span></h4>;

    const About = () => <a href='/about' className='about'>About</a>;
    const Cart = ({toggleCart}) => <span className='cart' onClick={toggleCart}><BsFillCartFill size='18'/></span>
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleMenuDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
        console.log(isDrawerOpen)
    }
    
    const MenuDrawer = ({toggleMenuDrawer}) => <span className='menu-drawer-button' onClick={toggleMenuDrawer}><MdTableRows size='20'/></span>
   
    return (
            <div className='container mx-auto p-4 justify-center w-full grid grid-cols-3'>
                <div className="flex md:hidden justify-start"><MenuDrawer toggleMenuDrawer={toggleMenuDrawer} /></div>
                <div className="hidden m-auto md:flex justify-start w-full">
                    <div className="hidden md:flex"><Search /></div>
                    <div className="hidden md:flex"><Shop /></div>
                </div>
                <div className="justify-self-center"><Brand /></div>
                <div className="flex justify-end m-auto w-full">
                    <div className="hidden md:flex"><About /></div>
                    <div className="flex "><Cart toggleCart={toggleCart} /></div>
                </div>
                

                <div> 
                    <div className={`menu-drawer ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex flex-col text-right">
                            {/* <span onClick={toggleMenuDrawer}><MenuDrawer toggleMenuDrawer={toggleMenuDrawer} /></span> */}
                            <Search />
                            <Shop />
                            <About/>
                        </div>
                    </div>
                    {isDrawerOpen ? <div onClick={() => setIsDrawerOpen(false)} className="h-screen w-screen fixed top-0 left-0 bg-black opacity-25 z-10"></div> : ""}
                </div>
            </div>
    )
}
