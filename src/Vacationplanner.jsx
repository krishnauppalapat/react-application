import React from "react";
import  './Vacationplanner.css';
import { useEffect } from "react";
import axios from "axios";
const Vacationplanner=()=>{
    var [data,setData]=React.useState([]);
    const url='https://course-api.com/react-tours-project';
    useEffect(()=>{
        axios.get(url).then(function(res){
            console.log(res)
            setData([...res.data])
        })
    },[] )
    return(
        <div className="mainDiv">
            <h1>Our Tours</h1>
            <div className="card">
                {
data.map((a,i)=>{
    return(
        <div key={i}>
            <img src={a.image} alt='' className="imgsize"/>
            <h3>{a.name}</h3>
            <p>{a.info}</p>
            </div>
    )

})
                }

            </div>
        </div>

    )
}
export default Vacationplanner;