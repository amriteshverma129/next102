import React from "react";
import Navbar from './navbar'
import Head from 'next/head'
import Footer from './footer'

const Layout = ({children}) => {
    return (
        <React.Fragment  style={{height:"100vh"}}>
            <Head><title>Layout</title></Head>
            <div className=" d-flex flex-column" style={{height:"100vh"}}>
            <Navbar/>
             {children}
            <Footer/>
            </div>
       
         
        </React.Fragment>
      );
}
 
export default Layout;