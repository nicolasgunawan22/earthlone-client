import React from 'react'
import Link from 'next/Link'

export default function Footer() {
    const name = null

    const newsletter = () => {
        event.preventDefault()
        // console.log(name)
    }
    return (
        <div className="w-full h-auto p-2 bottom-0 bg-black text-white z-0">
            <div className="footer-contents">
                <div className="footer-social">
                    <h6 className="font-bold">Site</h6>
                    <a className="py-1" href="/about">About</a>
                    <a className="py-1" href="/shop">Shop</a>
                    <a className="py-1" href="/contact-us">Contact Us</a>
                    {/* <a className="py-1" href="/">Return</a>
                    <a className="py-1" href="/">FAQ</a> */}
                </div>
                <div className="footer-social">
                    <h6 className="font-bold">Social</h6>
                    <Link href="https://www.instagram.com/earthlone.id/"><a className="py-1" target="_blank">Instagram</a></Link>
                    <Link href="/"><a className="py-1" target="_blank">Twitter</a></Link>
                    <Link href="https://www.tiktok.com/@earthlone.id"><a className="py-1" target="_blank">TikTok</a></Link>
                </div>
                {/* <div className="footer-social">
                    <h6 className="font-bold">Newsletter</h6>
                    <form onSubmit={newsletter}>
                        <input className="text-black w-52 p-2" type="text" placeholder="email"/>
                        <button className="transition bg-gray-600 hover:bg-gray-700 p-2" type="submit">Submit</button>
                    </form>
                </div> */}
            </div>
            <div className="text-center mx-10">
                    <p>© Copyright 2021 Nicolas Gunawan - All Rights Reserved</p>
            </div>
        </div>
    )
}
