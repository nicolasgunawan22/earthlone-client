import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function Drawer({isOpen, toggleCart, setIsOpen}){
    const amount = 0;

    const substract = () => {return amount - 1}
    const add = () => {return amount + 1}
    // console.log(amount)
    
    return (
        <div> 
            {isOpen ? <div onClick={() => setIsOpen(false)} className="h-screen w-screen fixed top-0 bg-black opacity-25 z-10"></div> : ""}
            <div className={`drawer ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="mr-auto">
                    <span onClick={toggleCart}><AiOutlineClose className='close-drawer' size='36'/></span>
                </div>
                <div className="cart-contents">
                    <h4 className="font-bold mb-8">Cart</h4>
                    <h6>Coming Soon</h6>

                    {/* <div className="text-left mx-10 my-4 grid grid-cols-3 p-1 border-2 border-black">
                        <div className="bg-gray-400 mr-1"></div>
                        <div className="col-span-2 flex flex-col justify-between">
                            <p className="font-semibold">Reusable Stainless Steel Straw Set</p>
                            <div className="flex">
                                <button onClick={substract} className="mx-1 bg-black text-white h-8 w-8">-</button>
                                <h6 className="mx-1 border-2 border-black h-8 w-8 text-center pt-0.5">{amount}</h6>
                                <button onClick={add} className="mx-1 bg-black text-white h-8 w-8">+</button>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}
