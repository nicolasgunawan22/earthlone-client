import React, { useState, useEffect } from 'react'

import MenuDrawer from '../components/MenuDrawer'

import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun} from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs'
import { MdTableRows } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navigation({toggleCart}) {
    
    const [screenWidth, setScreenWidth] = useState(0)
    useEffect(() => {
        setScreenWidth(window.screen.width)
    }, [])
    // console.log(screenWidth)

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleMenuDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
        // console.log(isDrawerOpen)
    }

    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
        // console.log(isSearchOpen)
    }

    const Search = ({toggleSearch}) =>  <span className='search' onClick={toggleSearch}><FaSearch size='14'/></span>
    
    const Shop = () => <a href='/shop' className='shop'>Shop</a>;
    
    const Brand = () => <h4 className='brand'><span className='cursor-pointer' onClick={() => {location.href="/"}}>Earthlone</span></h4>;

    const About = () => <a href='/about' className='about'>About</a>;
    const Cart = ({toggleCart}) => <span className='cart' onClick={toggleCart}><BsFillCartFill size='18'/></span>
    
    
    const MenuDrawerButton = ({toggleMenuDrawer}) => <span className='menu-drawer-button' onClick={toggleMenuDrawer}><MdTableRows size='20'/></span>
   
    return (
            <div className='container mx-auto p-4 justify-center w-full grid grid-cols-3 select-none'>
                <div className="flex md:hidden justify-start"><MenuDrawerButton toggleMenuDrawer={toggleMenuDrawer} /></div>
                <div className="hidden m-auto md:flex justify-start w-full">
                    {isSearchOpen ? (
                        <div className="hidden md:flex search"  onClick={toggleSearch} ><AiOutlineClose/></div>
                    ):(
                        <div className="hidden md:flex"><Search toggleSearch={toggleSearch} /></div>
                    )}
                    {isSearchOpen ? (
                        <div className="search-bar">
                            <form className="flex border-2 border-black">
                                <input className="appearance-none text-black w-40 px-2 border-0" type="text"/>
                                <button className="search-bar-button" type="submit"><FaSearch size='14'/></button>
                            </form>
                        </div>
                    ):(
                        null
                    )}
                    <div className="hidden md:flex"><Shop /></div>
                </div>
                <div className="justify-self-center"><Brand /></div>
                <div className="flex justify-end m-auto w-full">
                    <div className="hidden md:flex"><About /></div>
                    <div className="flex "><Cart toggleCart={toggleCart} /></div>
                </div>
                <MenuDrawer
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                    toggleMenuDrawer={toggleMenuDrawer}
                    toggleSearch={toggleSearch}
                    isSearchOpen={isSearchOpen}
                    MenuDrawerButton={MenuDrawerButton}
                    Search={Search}
                    Shop={Shop}
                    About={About}
                    
                />
            </div>
    )
}
