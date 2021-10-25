import React from "react";
import {useEffect,useState} from 'react'
import {useRouter} from 'next/router' 

const Details = ({data}) => {
    // const [dataArray,setDataArray]=useState([])
    // useEffect(async ()=>{
    //     let r= await fetch('http://localhost:3000/api/vehicles',{method:'GET'})
    //      let data =await r.json()
    //      setDataArray(data)
    //     console.log(data)
    // },[])
    const router =useRouter()
    return ( <React.Fragment>
       
       { data.map((item,i)=>{
       return <div key={i} className="card mb-5 mt-5 container detail" onClick={()=>{router.push(`/components/${item.owner}/${i}?userName=Amritesh`)}}>
          <h3>{item.vehicle}</h3>
          <h4>{item.owner}</h4>
          <h5>{item.details}</h5>
       </div>
       })}
    </React.Fragment> );
}
 


export async function getStaticProps(){
    
    const res=await fetch('http://localhost:3000/api/vehicles')
    const data=await res.json()
   
    return {
        props:{
          data
        }
    }
}
export default Details;