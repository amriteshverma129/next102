import {useRouter} from 'next/router'
import { useEffect,useState } from 'react';
const Person = () => {
  const router=useRouter()
  const [data,setData]=useState([]);
    useEffect(async()=>{
      const res=await fetch(`http://localhost:3000/api/vehicle/${router.query.owner}`)
      const obj=await res.json()
      setData(obj)
    },[])
    return ( 
        <div className="container m-5 font-weight-bold display-4 " >
           {data && data.map((item,i)=>{
            return <div className="row " key={i}>
              <div className="col-6 offset-3 ride">
              {item.vehicle}
            <br/>
            {item.owner}
            <br/>
            {item.details}
            <br/>
            {router.query.userName}
                </div>
            </div> 
           })}
        </div>
     );
}
// export async function getStaticProps(ctx){
    
//   const res=await fetch(`http://localhost:3000/api/vehicle/${ctx.query.owner}`)
//   const data=await res.json()
 
//   return {
//       props:{
//         data
//       }
//   }
// }
 
export default Person;