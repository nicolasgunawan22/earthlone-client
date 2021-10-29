import React from 'react'

export default function Footer() {
    const name = null

    const newsletter = () => {
        event.preventDefault()
        console.log(name)
    }
    return (
        <div className="w-full h-auto p-2 bottom-0 bg-black text-white z-0">
            <div className="footer-contents">
                <div className="footer-social">
                    <h7 className="font-bold">Site</h7>
                    <a className="py-1" href="/about">About</a>
                    <a className="py-1" href="/shop">Shop</a>
                    <a className="py-1" href="/">Contact Us</a>
                    <a className="py-1" href="/">Return</a>
                    <a className="py-1" href="/">FAQ</a>
                </div>
                <div className="footer-social">
                    <h7 className="font-bold">Social</h7>
                    <a className="py-1" href="/">Instagram</a>
                    <a className="py-1" href="/">Twitter</a>
                    <a className="py-1" href="/">TikTok</a>
                </div>
                <div className="footer-social">
                    <h7 className="font-bold">Newsletter</h7>
                    <form onSubmit={newsletter}>
                        <input className="text-black w-52 p-2" type="text" placeholder="email"/>
                        <button className="transition bg-gray-600 hover:bg-gray-700 p-2" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="text-center">
                    <p>© Copyright 2021 Nicolas Gunawan - All Rights Reserved</p>
            </div>
        </div>
    )
}
