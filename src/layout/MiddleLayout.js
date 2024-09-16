import React from 'react'
import { useContext } from 'react';
import { BackgroundColorContext } from '../Components/BackgroundColorContext.js';
function MiddleLayout() {

// all middle body content is here with using taildwind css.
const { bgColor, changeBackgroundColor } = useContext(BackgroundColorContext); 
console.log(typeof(bgColor));
 console.log(bgColor==="white" ? "DON AHMED" : "ENGINEER");


  return (
    <div className="middleLayoutContainer  w-full pt-0 md:pt-32 md:block flex md:justify-normal justify-center " >

<div className='wholeContentWrap w-full '>


{/* First Container */}

            <div className='middleLayoutItemContainer  pl-0 pr-0 pt-6 lg:pl-36 lg:pr-36 lg:pt-9' >

                <div className=' w-full h-full flex p-3 md:flex-row flex-col-reverse '>

                    <div className='leftContainerLayout w-full  md:pt-0 pt-8'>
                        <div className='textContainerLayout '>
                            <div className='bigTextLayout pl-3'>
                                <h1 className='text-4xl md:text-6xl   '>Print on demand for your ecommerce business</h1>
                            </div>

                            <div className="normalText pt-8 pl-3">
                                <h1 className='text-2xl'>Sign up for free and only pay for what you sell</h1>

                                <div className='paragraphText pt-2'>
                                <p>Turn your passion into profit with the world's largest print on demand network.</p>

                            </div>

                            </div>

                         

                            <div className='layoutButtonContainer flex pt-8 '>
                            <div className='btn'>
                            <button className='buttonHeader bg-black rounded-full text-white pb-2 pt-2 pl-4 pr-4 ml-3 text-sm hover:text-gray-300 md:text-sm text-xs'>Get started for free </button>
                            </div>

                            <div className='btn'>
                            <button className='buttonHeader bg-white rounded-full text-black pb-2 pt-2 pl-4 pr-4 ml-3 text-sm hover:text-gray-300 md:text-sm text-xs'>Get started for free </button>
                            </div>

                            </div>

                            <div className='shopifyImageContainer pt-8 pl-3'>
                                <div className='imgCont'>
                                <img className='shopify h-10' src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg"></img>
                                </div>

                                <div className='starsContainer flex'>
                                    <img className='stars h-5' src="https://www.gelato.com/assets/rating-stars/star.svg" ></img>
                                    
                                    <img className='stars h-5' src="https://www.gelato.com/assets/rating-stars/star.svg" ></img>
                                    <img className='stars h-5' src="https://www.gelato.com/assets/rating-stars/star.svg" ></img>
                                    <img className='stars h-5' src="https://www.gelato.com/assets/rating-stars/star.svg" ></img>
                                    <img className='stars h-5' src="https://www.gelato.com/assets/rating-stars/star.svg" ></img>

                                    <p>4.8/5</p>
                                </div>

                                <div className='textShopify'>
                                    <p>Based on 887 Reviews</p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className='rightContainerLayoutv w-full pt-0 lg:pt-9 '>

                        <div className='imageContainer pt-9 '>
                            <img src="https://a.storyblok.com/f/165154/1280x720/5ed0187b38/02_hp_top-banner_1280x720-white-version-1.jpg/m/" className='md:hidden block'></img>
                            <img src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/" className='md:block hidden'></img>

                        </div>

                    </div>

                </div>

            </div>



















{/* Second Container */}

            <div className='horizontalContainerSecondMiddleLayout  mt-6 '>
    <div className='horizontalContainerItems  flex justify-around items-center pl-0 pr-0 pt-0 pb-9 lg:pl-36 lg:pr-36 lg:pt-9  md:flex hidden'  style={{backgroundColor:bgColor==="white" ? "#fcebf4" : '#C0C0C0'}} >

    <div className='itemsHorizontal w-52 flex flex-col justify-center'>
        <div className='percentageContainer flex justify-center'>

            <h1 className='text-3xl'>90%</h1>



        </div>

        <div className='textPercentage'>
            <h1 className='text-2xl'>of all orders are produced locally</h1>

        </div>

    </div>

    <div className='itemsHorizontal  w-52 flex flex-col justify-center'>
        <div className='percentageContainer flex justify-center'>

            <h1 className='text-3xl'>90%</h1>



        </div>

        <div className='textPercentage'>
            <h1 className='text-2xl'>of all orders are produced locally</h1>

        </div>

    </div>


    <div className='itemsHorizontal w-52  flex flex-col justify-center'>
        <div className='percentageContainer flex justify-center'>

            <h1 className='text-3xl'>140%</h1>



        </div>

        <div className='textPercentage'>
            <h1 className='text-2xl'>of all orders are produced locally</h1>

        </div>

    </div>




    </div>

</div>














{/* Third Container */}

<div className='middleLayoutItemContainer    pl-0 pr-0 pt-0 pb-9 lg:pl-36 lg:pr-36 lg:pt-9'>


<div className='headingUpperText  flex justify-center'>
    <h1 className='text-4xl md:text-6xl  font-semibold'>Why choose Gelato</h1>

</div>

<div className=' w-full h-full flex p-3  md:flex-row flex-col'>

    <div className='leftContainerLayout w-full flex items-center '>

    <div className='imageContainer '>

<img src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"></img>

</div>

    </div>


    <div className='rightContainerLayoutv w-full  pl-5'>


    <div className="normalText pt-8 pl-3">
        <div className='upperTextContainer flex ' >
    
                <h1 className='text-2xl '> ▻ World's largest print-on-demand network</h1>
                </div>

                <div className='paragraphText pt-2'>
                <p className='text-base font-light'>140+ print partners in 32 countries. Gelato is a truly global service.</p>

            </div>

            </div>

            <div className="normalText pt-2 pl-3">
        <div className='upperTextContainer flex ' >
    
                <h1 className='text-2xl'> ▻ Sell globally, produce locally</h1>
                </div>

                <div className='paragraphText pt-2'>
                <p className='text-base font-light'>Your products are produced close to your customers, wherever they are..</p>

            </div>

            </div>

            <div className="normalText pt-2 pl-3">
        <div className='upperTextContainer flex ' >
    
                <h1 className='text-2xl'> ▻ 100% free editing tools</h1>
                </div>

                <div className='paragraphText pt-2'>
                <p className='text-base font-light'>Create your custom products using our suite of free tools.</p>

            </div>

            </div>

            <div className="normalText pt-2 pl-3">
        <div className='upperTextContainer flex ' >
    
                <h1 className='text-2xl'> ▻ 60+logistics partners</h1>
                </div>

                <div className='paragraphText pt-2'>
                <p className='text-base font-light'>Our global network of logistics partners ensures your products are delivered fast.</p>

            </div>

            </div>


            <div className="normalText pt-2 pl-3">
        <div className='upperTextContainer flex ' >
    
                <h1 className='text-2xl'> ▻ High-quality products
                </h1>
                </div>

                <div className='paragraphText pt-2'>
                <p className='text-base font-light'>We partner with the world's leading brands to ensure the best quality products.</p>

            </div>

            </div>

            <div className="normalText pt-2 pl-3">
        <div className='upperTextContainer flex ' >
    
                <h1 className='text-2xl'> ▻ Endless creativity with Shutterstock Images</h1>
                </div>

                <div className='paragraphText pt-2'>
                <p className='text-base font-light'>Access millions of images and graphics to create unique products you can sell in your store.</p>

            </div>

            </div>

            <div className="normalText pt-2 pl-3">
        <div className='upperTextContainer flex ' >
    
                <h1 className='text-2xl'> ▻ 1-click integration to the leading ecommerce platforms</h1>
                </div>

                <div className='paragraphText pt-2'>
                <p className='text-base font-light'>Connect your store to Gelato using our integrations with Shopify, Etsy and more.</p>

            </div>

            </div>


            <div className="normalText pt-2 pl-3">
        <div className='upperTextContainer flex ' >
    
                <h1 className='text-2xl'> ▻ Sell globally, produce locally</h1>
                </div>

                <div className='paragraphText pt-2'>
                <p className='text-base font-light'>Your products are produced close to your customers, wherever they are..</p>

            </div>

            </div>


            
     

    </div>

</div>

</div>











{/* Fourth Container */}

<div className='middleLayoutItemContainer  pl-0 pr-0 pt-0 lg:pl-36 lg:pr-36 lg:pt-9' style={{backgroundColor:bgColor==="white" ? "#fcebf4" : '#C0C0C0'}}>

<div className='inline-block items-center pl-8 md:inline-block hidden'>
<p className='paraTextUpper'>For print on demand sellers</p>
    </div>


<div className=' w-full h-full flex p-3 md:flex-row flex-col-reverse'>


    <div className='leftContainerLayout w-full '>
        <div className='textContainerLayout '>
            <div className='bigTextLayout pl-3'>
                <h1 className='text-4xl md:text-6xl '>Accelerate business growth with innovative design tools and apps</h1>
            </div>

            <div className="normalText pt-8 pl-3 ">
                <h1 className='text-2xl font-medium'>See how our cutting-edge solutions can help you reach new customers and maximize your profits.</h1>

          

            </div>

         

            <div className='layoutButtonContainer flex pt-8 '>
            <div className='btn'>
            <button className='buttonHeader bg-black rounded-full text-white pb-2 pt-2 pl-4 pr-4 ml-3 text-sm hover:text-gray-300'>Get started for free </button>
            </div>

        

            </div>

        </div>

    </div>


    <div className='rightContainerLayoutv w-full   pt-9'>

        <div className='imageContainer pt-9'>

            <img src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/"></img>

        </div>

    </div>

</div>

</div>



















{/* fifthContainer */}

<div className='middleLayoutItemContainer    pl-0 pr-0 pt-0 lg:pl-36 lg:pr-36 lg:pt-9'>
<div className=' w-full h-full flex p-3 md:flex-row flex-col'>

    <div className='leftContainerLayout w-full flex items-center '>

    <div className='imageContainer '>

<img src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/"></img>

</div>

    </div>


    <div className='rightContainerLayoutv flex items-center w-full  pl-5'>


    <div className='textContainerLayout '>
           <p className='pl-5 md:block hidden'>For print producers</p>
            <div className='bigTextLayout pl-3'>
                <h1 className='text-4xl md:text-6xl '>GelatoConnect</h1>
            </div>

            <div className="normalText pt-8 pl-3 ">
                <h1 className='text-2xl font-medium'>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry.</h1>

          

            </div>

         

            <div className='layoutButtonContainer flex pt-8 '>
            <div className='btn'>
            <button className='buttonHeader bg-black rounded-full text-white pb-2 pt-2 pl-4 pr-4 ml-3 text-sm hover:text-gray-300'>Learn more </button>
            </div>

        

            </div>

        </div>


    </div>

</div>

</div>













{/* Sixth Container */}
<div className='middleLayoutItemContainer     pl-0 pr-0 pt-0 pb-9 lg:pl-36 lg:pr-36 lg:pt-9 ' style={{backgroundColor:bgColor==="white" ? "#fcebf4" : '#C0C0C0'}}>

<div className=' w-full h-full flex p-3 md:flex-row flex-col-reverse ' >


    <div className='leftContainerLayout w-full  '>
        <div className='textContainerLayout '>
            <div className='bigTextLayout pl-3'>
                <h1 className='text-4xl md:text-6xl '>Meet GelatoConnect at Printing United</h1>
            </div>

            <div className="normalText pt-8 pl-3 ">
                <h1 className='text-base text-black font-normal'>Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.</h1>

          

            </div>

         

            <div className='layoutButtonContainer flex pt-8 '>
            <div className='btn'>
            <button className='buttonHeader bg-black rounded-full text-white pb-2 pt-2 pl-4 pr-4 ml-3 text-sm hover:text-gray-300'>Book a meeting </button>
            </div>
            </div>

        </div>

    </div>


    <div className='rightContainerLayoutv w-full   pt-9 pl-5 flex item-center'>

        <div className='imageContainer pt-9'>

            <img src="https://a.storyblok.com/f/165154/1280x720/5d47159829/gelato-printing-united-2024.png/m/1000x0/"></img>

        </div>

    </div>

</div>

</div>



</div>


    </div>
  )
}

export default MiddleLayout