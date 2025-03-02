import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LiaSignInAltSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";





function Header() {
     const [toggle,setToggle] = useState(false)
     const showSideMenu = ()=>{
          setToggle(true);
     }

     const hideSideMenu = ()=>{
          setToggle(false);
     }
     const links = [
          {
               icon:<IoSearch/>,
               name:"Search"
          },
          {
               icon:<MdOutlineLocalOffer/>,
               name:"Offer"
          },
          {
               icon:<IoIosHelpCircleOutline/>,
               name:"Help"
          },
          {
               icon:<LiaSignInAltSolid/>,
               name:"Sign In"
          },
          {
               icon:<IoCartOutline/>,
               name:"Cart"
          }
     ]

  return (
    <>
          <div className='black-overlay w-full h-full fixed duration-500  ' onClick={hideSideMenu} style={
               {opacity:toggle ? 1 : 0,
                    visibility:toggle ? "visible" : "hidden"
                }   
          } >
               <div onClick={ (e)=>{
                    e.stopPropagation();
               }} className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{
                    left:toggle ? '0%':'-100%',

               }}>

               </div>
          </div>
          <header className='p-[15px] shadow-xl font-poppins'>
               <div className='max-w-[1200px] mx-auto  flex items-center'>
                    <div className='w-[100px]'>
                         <img src="images/logo.png  " className='w-full' alt="" />
                    </div>
                    <div className=''>
                         <span className='font-bold  border-b-[3px] border-black'>Rantanada</span> Jodhpur , Rajashthan, India <  RxCaretDown onClick={showSideMenu} className='inline text-2xl text-[#fc8019] font-bold cursor-pointer'/>
                    </div>
                         <nav className='flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                              {
                                   links.map(
                                        (link,index)=>{
                                             return <li key={index} className='flex items-center gap-2 hover:text-orange-400 cursor-pointer'>
                                                  {link.icon}
                                                  {link.name}
                                             </li>
                                        }
                                   )
                              }
                              
                         </nav>
               </div>
               
          </header>
               
     </>
  )
}

export default Header