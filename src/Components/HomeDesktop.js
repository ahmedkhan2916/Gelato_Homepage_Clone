import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import MiddleLayout from '../layout/MiddleLayout.js';
import { BackgroundColorProvider } from './BackgroundColorContext.js';
import { useContext } from 'react';
import { BackgroundColorContext } from './BackgroundColorContext.js';

function HomeDesktop() {

  // const { bgColor, changeBackgroundColor } = useContext(BackgroundColorContext);

  
  return (
    <BackgroundColorProvider>
    <>
    <Header></Header>
    <MiddleLayout></MiddleLayout>
    <Footer></Footer>    
    </>
    </BackgroundColorProvider>
  )
}
export default HomeDesktop;