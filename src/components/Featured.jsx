import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import Loader from './Loader';

function Featured() {
    const [products, setProducts] = useState([]);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Fetching data from a Django REST API endpoint using axios
        axios.get('http://127.0.0.1:8000/api/products/')
        .then(response => {
          // Handle the response data
          setProducts(response.data)
          setLoading(false);
        })
        .catch(error => {
          // Handle errors
          console.error('There was a problem with the axios request:', error);
        });
      }, []);

    const showProduct = (index) => {
        setLoading(true);
        setCurrentProductIndex(index);
        console.log(products[currentProductIndex].color);
        setLoading(false);
    }
    // const showNextProduct = () => {
    //     setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    // }
    // const showPreviousProduct = () => {
    //     setCurrentProductIndex((prevIndex) => (prevIndex == 0 ? products.length - 1 : prevIndex - 1 ));
    // }

    return (
        <div className="flex flex-colmt-8 w-full h-full flex-1 overflow-auto items-center justify-center">
                {loading?(
                        <div className='bg-slate-300 w-full h-full rounded-2xl overflow-hidden'>
                            <Loader />
                        </div>
                    ):(
                        <div className="flex flex-col flex-wrap items-center justify-center w-full h-full p-2 gap-2 relative">
                            <img className='object-contain w-full h-full rounded-xl' src={products[currentProductIndex].image} alt="shoe"/>
                            <div className='flex flex-col overflow-y-auto font-extrabold text-4xl absolute w-96 h-96 m-8 top-10 left-10'>
                                {products.map((product, index) => (
                                    <span 
                                        className={`text-${index===currentProductIndex?'5xl':'gray-200'} cursor-pointer`} 
                                        key={index} 
                                        onClick={() => showProduct(index)}
                                    >
                                    {product.name.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                            <div className="absolute m-8 top-40 right-40 z-0 flex flex-row items-center">
                                <img className='w-10 h-auto' src="/src/assets/images/right-arrow.png" alt="Explore more" />
                                <span className='p-4 rounded-full text-3xl font-extrabold cursor-pointer'>Explore More</span>
                            </div>
                            <div className="w-[30em] h-auto flex flex-col absolute m-8 bottom-10 left-10 gap-4">
                                <span className="text-xl font-extrabold">UNBEATABLE PERFORMANCE</span>
                                <span className='font-extrabold text-gray-700'>We&abs;ve dedicated ourselves to crafting the perfect footwear for every basketball enthusiast.</span>
                                <span className='font-extrabold text-5xl'>*2024</span>
                            </div>
                            <div className="w-[30em] h-auto flex flex-col absolute m-8 bottom-0 right-0 gap-2">
                                {products[currentProductIndex].limited?(
                                    <span className="font-extrabold text-transparent text-2xl italic bg-clip-text bg-gradient-to-r from-pink-400 to-red-600">LIMITED EDITION</span>
                                    )
                                :(
                                    <></>
                                )}
                                <span className='font-extrabold text-3xl'>{products[currentProductIndex].name}</span>
                                <span className='font-bold text-3xl text-gray-600'>${products[currentProductIndex].price}</span>
                                <div className="flex flex-row items-center gap-2">
                                {/* {products[currentProductIndex].colors.map((color, index) => (
                                <span
                                    key={index}
                                    className={`rounded-full w-10 h-10 cursor-pointer`}
                                    style={{ backgroundColor: color }}
                                ></span>
                                ))} */}


                                    
                                    {/* <span className="rounded-full w-10 h-10 bg-yellow-500"></span>
                                    <div className="flex items-center justify-center border-2 border-green-900 rounded-full w-12 h-12 relative">
                                        <span className="absolute rounded-full w-10 h-10 bg-gray-800 top-50 left-50"></span>
                                    </div>
                                    <span className="rounded-full w-10 h-10 bg-red-500"></span> */}
                                </div>
                                <div className="flex items-center justify-center rounded-full text-gray-200 font-bold p-4 bg-gray-800 text-2xl w-48 mt-6">
                                    <span>Add to bag</span>
                                </div>
                            </div>
                        </div>  
                    )}
        </div>
    )
}

export default Featured;