import { useState } from "react"
import './Navbar.css'

function Navbar() {
    var [itemsInCart, setItemsInCart] = useState(0)
    return (
        <div className='flex flex-row rounded-lg h-16 w-full p-2 pl-6 gap-4 justify-center relative'>
            <img className="w-8 h-8 absolute top-[.1em] -left-1 opacity-85" src="/src/assets/images/logo.png" alt="KwikMart" />
            <span className="font-extrabold text-2xl ml-0 mr-auto cursor-pointer">wikMart</span>
            <span className="text-xl font-extrabold text-gray-800 cursor-pointer transition-transform transform duration-300 hover:-translate-y-1">New & Featured</span>
            <span className="text-xl font-extrabold text-gray-500 cursor-pointer transition-transform transform duration-300 hover:-translate-y-1">Men</span>
            <span className="text-xl font-extrabold text-gray-500 cursor-pointer transition-transform transform duration-300 hover:-translate-y-1">Women</span>
            <span className="text-xl font-extrabold text-gray-500 cursor-pointer transition-transform transform duration-300 hover:-translate-y-1">Kids</span>
            <span className="text-xl font-extrabold text-gray-500 cursor-pointer transition-transform transform duration-300 hover:-translate-y-1">Sale</span>
            <div className="flex flex-row gap-6 ml-auto mr-0 justify-center items-center">
                <img className="cursor-pointer w-7 h-7" src="/src/assets/images/search.png" alt="search" />
                <img className="cursor-pointer w-8 h-8" src="/src/assets/images/love.png" alt="favorites" />
                <div className="relative cursor-pointer" onClick={()=>setItemsInCart(prevItems => prevItems + 1)}>
                    <img className="w-8 h-8" src="/src/assets/images/bag.png" alt="cart" />
                    <span className="text-sm font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1">{itemsInCart}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
