import React from "react";
import Head from 'next/head'
const Footer = () => {
    return ( 
        <React.Fragment>
            <Head><title>Footer</title></Head>
            <div className="container-fluid mt-auto" >
            <div className="row bg-dark text-light p-2  " style={{height:"10vh"}}>
               <h4>Copyright</h4>
             </div>
            </div>
         
        </React.Fragment>
     );
}
 
export default Footer;