import Head from 'next/head'
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation'
import Drawer from '../components/Drawer'
import Footer from '../components/Footer'
import { AiOutlineClose, AiOutlineLoading, AiOutlineLoading3Quarters } from 'react-icons/ai'

import { useQuery } from "@apollo/client";
import { getProductsQuery } from '../data/queries'
import Link from 'next/link'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => {
    setIsOpen(!isOpen)
  }
  // const [cached, setCached] = useState(true);
  // const { data, loading, error } = useQuery(getProductsQuery, { ssr: true });

  // useEffect(() => {
  //     if (loading) setCached(false);
  // }, [loading]);
  
  // if (loading) return (
  //   <div>
  //     <Navigation toggleCart={toggleCart} />
  //     <div className="flex items-center justify-center ">
  //         <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
  //     </div>
  //   </div>
  // );
  return (
    <div className=''>
      <Head>
        <title>Earthlone</title>
        <meta name="description" content="Welcome to Earthlone. Buy premium eco-friendly products now. Let's protect our lonely Earth." />
        <meta name="keywords" content="eco-friendly, products, earth, environment, toothbrush, straw"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <Navigation toggleCart={toggleCart} />
          <div className="bg-gray-500 h-96 flex flex-col justify-center text-center relative">
            <img className="brightness-50 w-full h-full cover" src="https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80" alt="" />
            <div className="absolute m-auto w-full">
              <h2 className="text-green-400 font-semibold z-0 relative md:text-5xl"> Welcome to <span className="text-white font-semibold">Earthlone</span></h2>
              <Link href="https://www.tokopedia.com/earthlone">
                  <button data-testid='tokopedia-button' target="_blank" className="mt-6 bg-green-300 shadow-lg rounded-full px-4 py-2 cursor-pointer hover:bg-green-100 focus:border-2 focus:border-green-500" >
                    <img className="h-6 md:h-8 mx-auto" src="/images/logo-tokopedia.svg" alt="" />
                  </button>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="container m-auto my-12">
            <h6 className="font-bold text-center text-green-600 mb-6 uppercase lg:text-xl">The Idea Behind Our Name</h6>
            <h3 className="font-serif font-bold text-center my-2 lg:text-4xl">There is No Other Earth</h3>
            <h5 className="flex mx-auto my-2 w-11/12 md:w-3/6 text-center lg:text-2xl">"Right now, Earth is alone. Earth is the only home we have. So we have to take care of it."</h5>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="py-10 px-4 font-semibold lg:mx-20"> 
              <h6 className="uppercase text-gray-700 text-center mb-4 lg:text-xl">We Provide</h6>
              <h4 className="font-bold lg:text-2xl">Eco-friendly products. <br /> <span  className="font-normal text-green-600">Let's contribute in reducing environmental damage.</span> </h4>
              <div className="">
                <div className="flex my-6">
                  <img className="mx-4 h-16 bg-green-300 rounded-full p-2" src="/images/reusable.svg" alt="" />
                  <div>
                    <p className="font-bold text-base lg:text-xl">Biodegradable</p>
                    <p className="font-light lg:text-lg">Capable of being decomposed by bacteria or other living organisms.</p>
                  </div>
                </div>
                <div className="flex my-6">
                  <img className="mx-4 h-16 bg-green-300 rounded-full p-2" src="/images/biodegradable.svg" alt="" />
                  <div>
                    <p className="font-bold text-base lg:text-xl">Reusable</p>
                    <p className="font-light lg:text-lg">Able to be used again or more than once.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="py-10 px-4">
              <div className="text-center">
                <h4 className="font-bold mb-2 lg:text-2xl">Explore Our Products</h4>
                <Link href="/shop">
                  <button target="_blank" className="text-base lg:text-lg mb-6 bg-green-600 text-white shadow-lg rounded-full px-4 py-2 cursor-pointer hover:bg-green-100 focus:border-2 focus:border-green-500">
                    Products
                  </button>
                </Link>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-2 lg:text-2xl">Visit Our Store</h4>
                <Link href="https://www.tokopedia.com/earthlone">
                  <button target="_blank" className="mb-6 bg-green-300 shadow-lg rounded-full px-4 py-2 cursor-pointer hover:bg-green-100 focus:border-2 focus:border-green-500">
                    <img className="h-8 mx-auto" src="/images/logo-tokopedia.svg" alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
          <Drawer isOpen={isOpen} toggleCart={toggleCart} setIsOpen={setIsOpen}/>
      <Footer />
      </main>
    </div>
  )
}