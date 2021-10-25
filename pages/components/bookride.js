import React,{useState} from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import ShowRides from './showrides'

const BookRide = () => {

    const router=useRouter()
    const [buttonClicked,setButtonClicked]=useState(false)

    return (<React.Fragment>
        <Head><title>BookRide</title></Head>
        <div className="container mt-5 bookride mb-5">
           <div className="row card">
              <div className="card-header col-12 bg-danger">Book a Ride</div>
              <div className="card-body text-justify">
              Pool Carz is an online application which enables users to share 
            rides with others. You can either book a ride or offer a ride. Did we mention that this app is advertisement free? To add 
            on the top of that its free of cost! So what are you waiting for ? Check  out the rides available and start PCing!!Pool Carz is an online application which enables users to share 
            rides with others. You can either book a ride or offer a ride. Did we mention that this app is advertisement free? To add 
            on the top of that its free of cost! So what are you waiting for ? Check  out the rides available and start PCing!!
          
          
              </div>
            <div className="card-body text-center">
             <button className="btn btn-danger mb-3" type="button" onClick={()=>{setButtonClicked(!buttonClicked)}}>Show Rides</button><br/>
             {buttonClicked && buttonClicked?<ShowRides/>:null}
             <button className="btn btn-danger" type="button" onClick={()=>{router.push('/components/offerride')}}>Offer Ride</button>
            </div>
           </div>
        </div>
    </React.Fragment>);
}
 
export default BookRide;