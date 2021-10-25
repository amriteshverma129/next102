import React from "react";
import Link from 'next/link'
import Head from 'next/head'
import {mapStateToProps} from '../container/container'
import {connect} from 'react-redux'

export const Navbar = (props) => {
    console.log(props)
    return (  <React.Fragment>
           <Head><title>NavBar</title></Head>
         <nav className="style.navbar navbar navbar-expand-lg navbar-dark p-2 "  style={{height:"10vh"}} >
        <span className="navbar-brand  ml-5" style={{ color: "white" ,fontWeight:"300px"}} >PoolCarz</span>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-2"><Link href="/"><a className="nav-link font-weight-bold">Home</a></Link></li>
        <li className="nav-item mr-2"><Link href="/components/details"><a className="nav-link font-weight-bold">Details</a></Link></li>
        <li className="nav-item mr-2"><Link href="/components/bookride"><a className="nav-link font-weight-bold">BookRide</a></Link></li>
        {props.userName===""?<li className="nav-item mr-2"><Link href="/components/login"><a className="nav-link font-weight-bold">Login</a></Link></li>:
        <li className="nav-item mr-2"><Link href="/components/logout"><a className="nav-link font-weight-bold">Logout</a></Link></li>}
          </ul>
        </nav>
    </React.Fragment>);
}
 
export default connect(mapStateToProps,null)(Navbar);