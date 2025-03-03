import React from 'react'
import { FcRating } from "react-icons/fc";


const Card = (props) => {
  return (
    <div className='w-[272px] shrink-0 grow '>
          <div className=' group h-[182px] rounded-[15px] overflow-hidden relative '>
               <img className=' group-hover:scale-110 duration-150 object cover w-full h-full ' src={"http://localhost:5000/images/" +props.image} alt="" />
               <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter'>
                    {props.offer}
               </div>
          </div>
          <div className='mt-3 text-xl font-bold'>
               {props.title}
          </div>    
          <div className='flex items-center gap-2'>
          <FcRating/>{props.rating}
          <span>{props.minTime}-{props.maxTime } mins</span>  
          </div>
          <div>
               {props.name}
               <br />
               {props.place}
          </div>
    </div>
  )
}

export default Card 


