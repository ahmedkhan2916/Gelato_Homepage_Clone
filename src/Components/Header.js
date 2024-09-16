import React from 'react'
import { useState } from 'react';
import "../assets/styles/mainStyle.css"
import { useContext } from 'react';
import { BackgroundColorContext } from './BackgroundColorContext.js';
import headset from "../assets/images/HeaderLogos/headset.png";
import web from "../assets/images/HeaderLogos/web.png";
import cart from "../assets/images/HeaderLogos/cart.png";
import user from "../assets/images/HeaderLogos/user.png";
import arrayDown from "../assets/images/HeaderLogos/down.png"
import menu from "../assets/images/HeaderLogos/menu-burger.png"
import MobileSidebar from '../layout/MobileSidebar.js';


function Header() {

// all header content is here:-

const { bgColor, changeBackgroundColor } = useContext(BackgroundColorContext);

    const Items=[

        {id:1,label:"Products",showDropDown:true},
        {id:2,label:"Start selling",showDropDown:true},
        {id:3,label:"Tools and apps",showDropDown:true},
        {id:4,label:"Pricing",showDropDown:true},
        {id:5,label:"Resources",showDropDown:true},
        {id:6,label:"Pro sellers",showDropDown:false},
        {id:7,label:"GelatoConnect",showDropDown:true}

    ]


    const [dropdown,setDropdown]=useState("hidden");
    const [dropdownBottom,setDropdownBottom]=useState(null);
    const [sideBar,setSidebar]=useState(false);


    const handleDropdown=()=>{
   
        console.log("yes");

        if(dropdown=="hidden")
        {
        setDropdown("flex");
        changeBackgroundColor("	#C0C0C0");
        
    //   document.body.style.backgroundColor="gray";
        document.body.style.backgroundColor="rgba(191, 191, 191)";
       const target= document.getElementById("ZINDEX");

       target.style.zIndex="2000";
       

        }
        else{

            setDropdown("hidden");
            document.body.style.backgroundColor="white";
            changeBackgroundColor("white")
        }
    }

    const handleBottomHeader=(id)=>{

      setDropdownBottom(id);

    }

    const handleMouseleave=()=>{

        setDropdownBottom(null)

    }

    const handleSidebar=()=>{

        setSidebar(!sideBar);
      
        if(sideBar===true)
        {
          document.body.style.backgroundColor="white";
          changeBackgroundColor("white")
          
        }
        else{
          
          document.body.style.backgroundColor="#C0C0C0";
          changeBackgroundColor("#C0C0C0")

          
      
        }
      
      }

  return (
    <div className={`headerContainer h-16 `}  style={{backgroundColor:`${bgColor}`}}>

<div
        className={`fixed inset-y-0 left-0  bg-white  transform transition-transform duration-300 ease-in-out z-20 ${
          sideBar ? 'translate-x-0' : '-translate-x-full'
        }`}
         >
        <MobileSidebar handleSidebar={handleSidebar} />
      </div>

    <div className='headerItemsContainer flex  justify-around h-full items-center  ' >




        <div className='imageContainer  flex items-center'>

        <div className='hamburgureMenuSideBar xl:hidden flex'  onClick={handleSidebar}>

<img src={menu} className='h-5 pr-7'></img>


</div>
            <img src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg" className='logoHeader h-7'></img>

        </div>

        <div className='rightItemContainer text-sm flex w-fit  '>
            <div className='Items flex rounded-full items-center w-max lg:pl-4 pr-4 md:flex hidden'>
                <img className='rightHeaderLogo h-5' src={headset}></img>
                <p className='headerText pl-2 tracking-tight'>Contact us</p>
            </div>

            <div className='Items flex rounded-full items-center w-max pl-4 pr-4  relative lg:flex hidden' onClick={handleDropdown} id="ZINDEX">
                <img className='rightHeaderLogo h-5' src={web}></img>
                <p className='headerText pl-2 tracking-tight' >IN/INR</p>
                <img src={arrayDown} className='h-4 pl-2'></img>

                <div className={`dropdown  absolute top-12 z-10 ${dropdown} flex-col  h-24 bg-white rounded-lg justify-center items-center `} >
                <div className='arrow-up'></div>
                    <button className='btndropdown p-2 tracking-tight rounded-lg  w-fit'>Language-IN</button>
                    <button className='btndropdown p-2 tracking-tight rounded-lg  w-fit'>Currency-INR</button>

                </div>
            </div>


            <div className='Items flex rounded-full items-center w-max pl-4 pr-4 md:flex hidden'>
                <img className='rightHeaderLogo h-5' src={cart}></img>
                <p className='headerText pl-2 tracking-tight'>Cart</p>
            </div>

            <div className='Items flex rounded-full items-center w-max pl-4 pr-4 lg:flex hidden'>
                <img className='rightHeaderLogo h-5' src={user}></img>
                <p className='headerText pl-2 tracking-tight'>Sign in</p>
            </div>

        <button className='buttonHeader bg-black rounded-full text-white pb-2 pt-2 pl-4 pr-4 ml-3 hover:text-gray-300'>Sign up for free </button>

        </div>

    </div>

{/* bottom item header */}


    

<div className='bottomItemHeaderContainer headerContainer flex justify-center  h-12 xl:flex hidden' style={{backgroundColor:`${bgColor}`}}>

<div className='allItemsContainer w-3/4 h-full flex'>

{

   Items.map((item)=>( 
    
    
    
    <div className='Items flex relative items-center w-max h-full  lg:pl-4 pr-4 ' onMouseEnter={()=>handleBottomHeader(item.id)} onMouseLeave={handleMouseleave}>
               
    <p className='headerText pl-2 tracking-tight text-sm'>{item.label}</p>
    <div className='arrowContainer flex justify-center items-center ml-1'>
    <img src={arrayDown} className={`${item.showDropDown?"block" : 'hidden'} arrayDownHeader h-4 ${item.showDropDown&& dropdownBottom===item.id ? 'rotate-180' : 'rotate-0' }  hover:transition-transform duration-500 ease-in-out`} ></img>
    </div>

    <div className={`dropdown absolute top-12 left-0 right-0 ${item.showDropDown&& dropdownBottom===item.id ? 'flex' : 'hidden'} flex-col w-72  bg-white justify-center items-center`} >

<div className='arrow-up'></div>

<div className='dropDownItemsBox  w-11/12 flex justify-between h-16'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>BestSellers</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>

<div className='dropDownItemsBox  w-11/12 flex justify-between h-16'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>BestSellers</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>


<div className='dropDownItemsBox  w-11/12 flex justify-between h-16'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>BestSellers</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>



<div className='dropDownItemsBox  w-11/12 flex justify-between h-16'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>BestSellers</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>



<div className='dropDownItemsBox  w-11/12 flex justify-between h-16'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>BestSellers</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>


<div className='dropDownItemsBox  w-11/12 flex justify-between h-16'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>BestSellers</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>


</div>
</div>


))

}
</div>
</div>





       

    </div>
  )
}

export default Header