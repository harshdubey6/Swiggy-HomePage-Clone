import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from './Card';
const TopRest = () => {
     const [data,setData]= useState([]);
     


     const fetchTopResturant = async()=>{
          const response = await fetch("http://localhost:5000/top-restaurant-chains")
          const apiData = await response.json();
          setData(apiData);
     }
     useEffect(
          ()=>{     
               fetchTopResturant();
          },[]
     )
  return (
    <div className='max-w-[1200px] mx-auto '>
          <div className='flex items-center justify-between my-3'>
               <div className='text-[25px] font-bold'>Top resturant chains in Mumbai</div>
                    <div className='flex '>
                         <div className=' cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center' ><FaArrowLeftLong /></div>
                         <div className=' cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center' ><FaArrowRightLong  />
                    </div>
               </div>
         </div>
         <div className='flex gap-5 overflow-hidden'>
               {
                    data.map(
                         (d,i)=>{
                              return <Card {...d} key={i} />
                         }
                    )
               }
         </div>
         <hr className='my-6 border-[1px]' />
    </div>
  )
}

export default TopRest