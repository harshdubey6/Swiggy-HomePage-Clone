import React, { useState,useEffect } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const Category = () => {
     const  [slide,setSlide] = useState(0);
     const [category,setCategory] = useState([]);


     const fetchCategory = async()=>{
          const response = await fetch("http://localhost:5000/categories")
          const data = await response.json();
          setCategory(data);
     }


     useEffect(
          ()=>{
               fetchCategory();
          },[]
     )

     const nextSlide = ()=>{
          console.log(category.length);
          if(category.length - 8 == slide  ) return false;
          setSlide(slide+3)
     }

     const prevSlide = ()=>{
          if(slide==0) return false
          setSlide(slide-3)
     }
  return (
    <div className='max-w-[1200px] mx-auto '>
          <div className='flex items-center justify-between my-3'>
               <div className='text-[25px] font-bold'>     What's on your mind?</div>
                     <div className='flex '>
                         <div className=' cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center' onClick={prevSlide}><FaArrowLeftLong /></div>
                         <div className=' cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center' onClick={nextSlide}><FaArrowRightLong  />
                         </div>
               </div>
          </div>
          <div className='flex  overflow-hidden'>
               {
                    category.map(
                         (cat,index) => {
                          return(
                              <div style={{
                                  transform:`translateX(-${slide*100}%)` 
                              }} key={index} className='w-[150px] shrink-0 duration-500 '>
                                   <img src={"http://localhost:5000/images/"+ cat.image} alt="" />
                              </div>
                          )    
                         }
                    )
               }  
          </div>
          <hr className='my-6 border-[1px]' />
    </div>
  )
}

export default Category