import React from 'react'
import facebook from "../assets/images/Footericons/facebook.png"
import instagram from "../assets/images/Footericons/instagram.png"
import tiktok from "../assets/images/Footericons/tiktok.png"
import youtube from "../assets/images/Footericons/youtube.png"
import linkedin from "../assets/images/Footericons/linkedin.png"
import "../assets/styles/mainStyle.css"
import { useContext } from 'react';
import { BackgroundColorContext } from './BackgroundColorContext.js';

function Footer() {



  return (
    <div className='FooterContainer  w-screen bg-black -z-50'  >

        <div className='footerItemsContainer  invert h-screen pl-36 pr-36 pt-9 lg:block hidden'>

            <div className='footerItemTop  flex justify-between items-center '>

                <div className='imageContainerFooter'>
                    <img src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg" className='footerLogoImage  h-7'></img>

                </div>

                <div className='rightFooterItems flex  justify-center items-center  w-2/4 '>
                    <div className='findTextFooter '>
                        <p>Find Gelato on:</p>

                    </div>
                    <div className='socialMediaIconsContainer flex  w-2/3 justify-between pl-4'>
                        <div className='socialMediaLogo p-3  w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                            <img src={instagram} className='  h-7 '></img>

                        </div>
                        <div className='socialMediaLogo p-3 w-fit rounded-full hover:bg-gray-300 cursor-pointer '>
                            <img src={facebook} className=' h-7 '></img>

                        </div>

                        <div className='socialMediaLogo p-3  w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                            <img src={tiktok} className='h-7 '></img>

                        </div>

                        <div className='socialMediaLogo p-3  w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                            <img src={linkedin} className='h-7 '></img>

                        </div>

                        <div className='socialMediaLogo p-3 w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                            <img src={youtube} className='h-7 '></img>

                        </div>

                    </div>

                </div>


            </div>
            
            <div className='middleContainerFooter pt-4 flex '>

                <div className='firstDetailContainer  w-1/4
                '>
                   <p className='text-sm'>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>

                <div className='btnFooter pt-3 pl-1'>
                    <button className='btnGetStarted rounded-full p-2 w-2/5 bg-black text-sm text-white'>Get Started</button>

                </div>


                <div className='getTheAppContainer mt-11'>
                    <div className='textApp'>
                        
                        Get the app

                    </div>

                    <div className='getTheAppImages invert flex pt-2 '>
                        <div className='footerAppContainer'>
                        <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg"></img>
                        </div>
                        <div className='footerAppContainer pl-2'>
                        <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg"></img>
                        </div>
                    </div>

                </div>
                </div>

                <div className='secondDetailContainer commonContainer flex items-start flex-col  pl-4 lg:flex hidden'>
<div className='textApp '>
                    <h1>Print on demand</h1>
                    </div>

<div className='textContFooter  flex flex-col pt-3 '>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>What is print on demand</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Product catalog</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Shipping and delivery</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Dropshipping products</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Pro sellers</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>White label products</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Return policy</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Global,yet local</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-400'>Sustainability</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Support</span>
    

</div>

                </div>


                <div className='thirdContainer flex items-center flex-col  commonContainer pl-4 lg:flex hidden'>
<div className='textApp'>
                    <h1>Integration</h1>
                    </div>

<div className='textContFooter  flex flex-col pt-3 '>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Shopify</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Etsy</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Woocommerce</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Wix</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Squarespace</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Squarespace</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>BigCommerce</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>
   
    

</div>

                </div>

                
                <div className='fourthContainer commonContainer flex items-center flex-col lg:flex hidden'>
<div className='textApp'>
                    <h1>Start selling</h1>
                    </div>

<div className='textContFooter  flex flex-col pt-3 '>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Shopify</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Etsy</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Woocommerce</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Wix</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Squarespace</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Squarespace</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>BigCommerce</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>API</span>

   
    

</div>

                </div>

                <div className='fifthContainer commonContainer flex items-start flex-col lg:flex hidden'>
<div className='textApp'>
                    <h1>Company</h1>
                    </div>

<div className='textContFooter  flex flex-col pt-3 '>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Shopify</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Etsy</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Woocommerce</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Wix</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Squarespace</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>Squarespace</span>
    <span className='text-sm hover:cursor-pointer hover:text-gray-700'>BigCommerce</span>
    

   
</div>
                </div>





            </div>


<div className='bottomFooterContainer flex items-center  mt-14'>
    
    <div className='bottomItemContainer flex  w-2/4 justify-between items-center  h-full'>
                
                <div className='itemsBottom'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='itemsBottom'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='itemsBottom'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='itemsBottom'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='itemsBottom'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='itemsBottom lastItem'>
                    <p className='text-sm'>Contact us</p>

                </div>

        
    </div> 


    <div className='languageSection w-2/4  flex justify-end h-full'>

        <div className='inputDropdown w-2/4 flex items-center '>
          
          <select className="options w-3/4  h-full ">

            <option value="English">English</option>
            <option value="English">English</option>
            <option value="English">English</option>
            <option value="English">English</option>
            <option value="English">English</option>
            <option value="English">English</option>




          </select>

        </div>

    </div>



</div>

 </div> 





{/* bottom footer content is responsive bottom content when user will reach to 1000px dimension this bottom query will hit */}





<div className='responsiveContainer  flex justify-center lg:hidden flex'>

<div className='wrapFooterResponsive w-4/5 pt-16'>
    <div className='upperContainer invert '>

    <div className='imageContainerFooter '>
                    <img src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg" className='footerLogoImage  h-7'></img>

                </div>

                <div className='firstDetailContainer pt-3  w-4/5
                '>
                   <p className='text-sm'>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>

                <div className='btnFooter pt-3 pl-1'>
                    <button className='btnGetStarted rounded-full p-2  bg-black text-sm text-white'>Get Started</button>

                </div>

                <div className='additionalDetailsContainer  pt-8 '>

                    <div className='textAdditional pt-3'>
                        <p className='text-lg font-bold'>Print on Demand</p>

                    </div>
                    <div className='textAdditional pt-3'>
                        <p className='text-lg font-bold'>Print on Demand</p>

                    </div>


                    <div className='textAdditional pt-3'>
                        <p className='text-lg font-bold'>Print on Demand</p>

                    </div>


                    <div className='textAdditional pt-3'>
                        <p className='text-lg font-bold'>Print on Demand</p>

                    </div>

                    

                </div>




                <div className='getTheAppContainer mt-11 '>
                    <div className='textApp'>
                        
                        Get the app

                    </div>

                    <div className='getTheAppImages invert flex pt-2 '>
                        <div className='footerAppContainer'>
                        <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg"></img>
                        </div>
                        <div className='footerAppContainer pl-2'>
                        <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg"></img>
                        </div>
                    </div>

                </div>
                </div>

    </div>


    <div className='lowerContainer'>

    <div className='rightFooterItems flex flex-col justify-start items-start   invert pt-9'>
                    <div className='findTextFooter '>
                        <p>Find Gelato on:</p>

                    </div>
                    <div className='socialMediaIconsContainer flex w-full md:w-2/3 justify-between pl-4'>
                        <div className='socialMediaLogo p-3  w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                            <img src={instagram} className='  h-7 '></img>

                        </div>
                        <div className='socialMediaLogo p-3 w-fit rounded-full hover:bg-gray-300 cursor-pointer '>
                            <img src={facebook} className=' h-7 '></img>

                        </div>

                        <div className='socialMediaLogo p-3  w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                            <img src={tiktok} className='h-7 '></img>

                        </div>

                        <div className='socialMediaLogo p-3  w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                            <img src={linkedin} className='h-7 '></img>

                        </div>

                        <div className='socialMediaLogo p-3 w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                            <img src={youtube} className='h-7 '></img>

                        </div>

                    </div>

                </div>


                <div className='languageSection w-2/4  flex  h-full invert pt-9'>

<div className='inputDropdown w-2/4 flex  '>
  
  <select className="options w-3/4  h-full ">

    <option value="English">English</option>
    <option value="English">English</option>
    <option value="English">English</option>
    <option value="English">English</option>
    <option value="English">English</option>
    <option value="English">English</option>




  </select>

</div>

</div>


<div className='bottomItemContainer flex flex-col   h-full invert'>
                
                <div className='pt-3'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='pt-3'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='pt-3'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='pt-3'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='pt-3'>
                    <p className='text-sm'>Contact us</p>

                </div>
                <div className='pt-3'>
                    <p className='text-sm'>Contact us</p>

                </div>

        
    </div> 



    </div>

    </div>


    </div>





    </div>
  )
}

export default Footer