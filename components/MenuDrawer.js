import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa';

export default function MenuDrawer({ isDrawerOpen, setIsDrawerOpen, toggleMenuDrawer, toggleSearch, isSearchOpen, MenuDrawerButton, Brand, Search, Shop, About }) {
    
    return (
        <div>
            <div className={`menu-drawer ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col">
                    <div className="grid grid-cols-3 mb-6">
                        <span className="flex justify-start"><MenuDrawerButton toggleMenuDrawer={toggleMenuDrawer} /></span>
                        <Brand />
                    </div>
                    
                    <div className="flex justify-center w-full">
                        {isSearchOpen ? (
                            <div className="flex search transition-all ease-linear" onClick={toggleSearch}><AiOutlineClose /></div>
                        ):(
                            <div className="flex justify-center"><Search toggleSearch={toggleSearch} /></div>
                        )}
                        {isSearchOpen ? (
                            <div className="search-bar">
                                <form className="flex border-2 border-black">
                                    <input className="appearance-none text-black w-full px-2 border-0" type="text"/>
                                    <button className="search-bar-button" type="submit"><FaSearch size='14'/></button>
                                </form>
                            </div>
                        ):(
                            null
                        )}
                    </div>
                    <Shop />
                    <About/>
                </div>
            </div>
            
            {isDrawerOpen ? <div onClick={() => setIsDrawerOpen(false)} className="h-screen w-screen fixed top-0 left-0 bg-black opacity-25 z-10"></div> : ""}
        </div>
    )
}
