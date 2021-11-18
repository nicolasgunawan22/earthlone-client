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

    const Search = ({toggleSearch}) =>  <span data-testid="nav-button" aria-label="search-button" className='search' onClick={toggleSearch}><FaSearch size='14'/></span>
    
    const Shop = () => <a data-testid="nav-button" href='/shop' className='shop'>Products</a>;
    
    const Brand = () => <h4 data-testid="nav-button" className='brand'><span className='cursor-pointer my-auto flex justify-center' data-testid="brand-button" onClick={() => {location.href="/"}}> <img className="p-0 sm:h-10" src="images/logo-black.svg" alt="" /> </span></h4>;

    const About = () => <a data-testid="nav-button" href='/about' className='about'>About</a>;
    const Cart = ({toggleCart}) => <button data-testid="nav-button" aria-label="cart-button" className='cart' onClick={toggleCart}><BsFillCartFill size='18'/></button>
    
    
    const MenuDrawerButton = ({toggleMenuDrawer}) => <span className='menu-drawer-button' onClick={toggleMenuDrawer}><MdTableRows size='20'/></span>
   
    return (
            <nav data-testid="navigation-bar" className='container mx-auto p-4 justify-center w-full grid grid-cols-3 select-none'>
                <div className="flex md:hidden justify-start"><MenuDrawerButton toggleMenuDrawer={toggleMenuDrawer} /></div>
                <div className="hidden m-auto md:flex justify-start w-full">
                    {isSearchOpen ? (
                        <div className="hidden md:flex search"  onClick={toggleSearch} ><AiOutlineClose/></div>
                    ):(
                        <button className="hidden md:flex"><Search toggleSearch={toggleSearch} /></button>
                    )}
                    {isSearchOpen ? (
                        <div className="search-bar">
                            <form className="flex border-2 border-black">
                                <input className="appearance-none text-black w-40 px-2 border-0" type="text" data-testid="search-bar" placeholder='Type something here'/>
                                <button className="search-bar-button" type="submit"><FaSearch size='14'/></button>
                            </form>
                        </div>
                    ):(
                        null
                    )}
                    <div className="hidden md:flex"><Shop /></div>
                </div>
                <div className="my-auto"><Brand /></div>
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
                    Brand={Brand}
                    Search={Search}
                    Shop={Shop}
                    About={About}
                    
                />
            </nav>
    )
}
