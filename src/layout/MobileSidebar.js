import React from 'react'
import '../assets/styles/mainStyle.css'
import web from "../assets/images/HeaderLogos/web.png";
import cart from "../assets/images/HeaderLogos/cart.png";
import arrayDown from "../assets/images/HeaderLogos/down.png"
import cross from "../assets/images/HeaderLogos/cross.png";
import user from "../assets/images/HeaderLogos/user.png"



function MobileSidebar({handleSidebar}) 
{
  return (

    <div className='sideBarContainer  '>

        <div className='sideBarItemsContainer  h-3/4'>
            
            <div className='topHeaderSidebar  h-1/3'>
                <div className='topOneCont  flex h-2/5 items-center border-b-2 border-gray-400'>
                    
                    <div className='ItemsSidebar flex w-3/4 justify-evenly items-center'>

                    <img src={cross} className="crossImageSidebar h-4" onClick={handleSidebar}></img>
                    
                    <div className='inrCont flex '>
                        <img src={web} className='h-5 pr-1'></img>
                        <p className='text-sm'>IN/INR</p>
                        <img src={arrayDown} className='h-5 pl-2'></img>
                        </div>

                    </div>

                    <div className='cartLogoSidebar flex  w-2/5 h-10  justify-center border-l-2 border-black items-center'>
                        
                        <img src={cart} className='h-5 pr-1'></img>
                        <p className='text-sm'>Cart</p>

                    </div>
                </div>

               
                <div className='topOneCont  flex h-2/4 items-center  border-b-2 border-gray-400'>
                    
                    <div className='ItemsSidebar flex w-1/2 justify-evenly items-center '>
                    <div className='buttonHeader bg-black rounded-full text-white pb-3 pt-3 pl-5 pr-5  hover:text-gray-300 text-xs'>
                    <button>Sign up for free </button>
                    </div>
                  
                    </div>

                    <div className='cartLogoSidebar flex  w-1/2 h-10  justify-center border-l-2 border-black items-center'>
                        <img src={user} className='h-5 pr-1'></img>
                        <p className='text-sm'>Sign in</p>

                    </div>
                 

            

                </div>


            </div>

<div className='bottomSidebarItemContainer'>

    <div className='ItemsBottomSidebar'>

    <div className='dropDownItemsBox  w-11/12 flex justify-between h-9'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>Products</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>

<div className='dropDownItemsBox  w-11/12 flex justify-between h-9'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>Start selling</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>


<div className='dropDownItemsBox  w-11/12 flex justify-between h-9'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>Tools and apps</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>


<div className='dropDownItemsBox  w-11/12 flex justify-between h-9'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>Pricing</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>  

<div className='dropDownItemsBox  w-11/12 flex justify-between h-9'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>Resources</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>  

<div className='dropDownItemsBox  w-11/12 flex justify-between h-9'>
<button className=' pl-6 tracking-tight rounded-lg  w-fit text-sm '>Pro selling</button>
<img src={arrayDown} className={`rotateItemImage h-4 pr-6 mt-2 `}></img>
</div>  

    </div>




</div>
</div>
</div>
  )
}

export default MobileSidebar