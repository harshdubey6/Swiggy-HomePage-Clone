import React from 'react'
import { useState,useEffect } from 'react';
import Card from './Card';
const OnlineDelivery = () => {

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
                   <div className='text-[25px] font-bold'>Resturant with online delivery in Mumbai</div>
             </div>
             <div className='grid grid-cols-4 gap-3'>
               {
                    data.map(
                         (d,i)=>{
                              return<Card {...d}/>
                         }
                    )
               }
          </div>
          </div>
         
  )
}

export default OnlineDelivery