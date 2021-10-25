import React, { useEffect, useState } from "react";


const ShowRides = (props) => {

    const [data, setData] = useState([])
    const [fromInfosys, setFromInfosys] = useState(false)
    const [toInfosys, setToInfosys] = useState(false)
    const [others, setOthers] = useState(false)
    const [ride, setRide] = useState(-1);
    
    
    useEffect(async () => {
        const res = await fetch('http://localhost:3000/api/vehicles');
        const obj = await res.json();
        setData(obj)

    }, [])



    let filtered = data.filter((item) => {
        if (fromInfosys) {

            if (item.pickup === "Infosys")
                return true
            else
                return false
        }
        else if (toInfosys) {
            if (item.destination === "Infosys")
                return true
            else
                return false
        }
        else {
            return true
        }

    })
    
    let filteredMore=filtered.filter((obj,i)=>{
        if (i === ride)
         return true
    })

  console.log(filteredMore)
    return (<React.Fragment>
        <button className="btn btn-danger mr-2 " type="button" name="fromInfosys" onClick={() => { setFromInfosys(true); setToInfosys(false); setOthers(false) }} >From Infosys</button>
        <button className="btn btn-danger mr-2 " type="button" name="toInfosys" onClick={() => { setFromInfosys(false); setToInfosys(true); setOthers(false) }}>To Infosys</button>
        <button className="btn btn-danger mr-2 " type="button" name="others" onClick={() => { setFromInfosys(false); setToInfosys(false); setOthers(true) }}>Others</button><br />

        <table className="table table-bordered mt-5 mb-5">
            <thead>
                <tr>
                    <th>Car Name</th>
                    <th>Pick Up</th>
                    <th>Destination</th>
                    <th>Seats Available</th>
                </tr>
            </thead>
            <tbody>
                {filtered && filtered.map((item, i) => {
                    return (<tr key={i} onClick={() => setRide(i)}>
                        <td>{item.vehicle}</td>
                        <td>{item.pickup}</td>
                        <td>{item.destination}</td>
                        <td>{item.seats}</td>
                    </tr>)
                })}
            </tbody>
        </table>
        {
            ride !== -1 ? <div className="container-fluid  mb-5 card "   >
                <div className="row p-3 ">
                <table className="table table-bordered  ">
                    <thead>
                        <tr>
                            <th>Car Name</th>
                            <th>Pick Up</th>
                            <th>Destination</th>
                            <th>Seats Available</th>
                        </tr>
                    </thead>
                    <tbody>
                       {filteredMore && filteredMore.map((item,index)=>{
                         return  <tr key="index">
                        <td>{item.vehicle}</td>
                        <td>{item.pickup}</td>
                        <td>{item.destination}</td>
                        <td>{item.seats}</td>
                          </tr>
                       })}
                    </tbody>
                </table>
                <button className="btn btn-danger btn-block ">Book</button>
                </div>
            </div> : null
        }


    </React.Fragment>);
}

// export async function getStaticProps(){

//     const res=await fetch(`http://localhost:3000/api/vehicles`)
//     const data=await res.json()

//     return {
//         props:{
//           data
//         }
//     }
// }
export default ShowRides;