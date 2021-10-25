import React from "react";
import {mapDispatchToProps} from  '../container/container'
import {connect} from 'react-redux'
import {useRouter} from 'next/router'

export const Logout = (props) => {
    const router=useRouter()
    return ( 
       <div>
           <button className="btn btn-primary" onClick={()=>{props.unAuthenticate();  router.push('/')}}>Logout</button>
       </div>
     );
}
 
export default connect(null,mapDispatchToProps)(Logout);