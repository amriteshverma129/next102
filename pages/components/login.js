import React from "react";
import {useState} from 'react'
import Head from 'next/head'
import {mapDispatchToProps} from  '../container/container'
import {connect} from 'react-redux'
import {useRouter} from 'next/router'

export const Login = (props) => {

  const router=useRouter()
    console.log(props.authenticate)
    const [form ,setForm]=useState({
      userName : "",
      password :""
    })
    // const [formError,setFormError]=useState({
    //     userName:"",
    //     password:""
    // })
    

    let handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setForm({...form,[name]:value})
    }

    let handleClick=(e)=>{
      
      props.authenticate(form.userName);
     return  router.push('/components/bookride')
    }
    
    // let handleSubmit=(e)=>{
    //    e.preventDefault()
    //    console.log(form.userName)
    //     console.log("hello")

    // }

    return ( <div>
        {/* {JSON.stringify(form)} */}
        <Head><title>Login</title></Head>
       <div className="container m-5">
        <div className="row">
         <div className="col-6 card p-0 login">
          <div className="card-header bg-success text-light">Login</div>
          <div className="card-body form" >
           <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input id="userName" type="text" name="userName" onChange={(e)=>handleChange(e)} value={form.userName} placeholder="Enter the User Name" className="form-control"/>
          
           </div>
           <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" onChange={(e)=>handleChange(e)} value={form.password} placeholder="Enter the Password" className="form-control"/>
           
           </div>
            <button className="btn btn-success" onClick={(e)=>handleClick(e)}>Login</button>
          </div>
         </div>
        </div>
       </div>
    </div>);
}
 
export default connect(null,mapDispatchToProps)(Login)
