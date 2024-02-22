import React, { useEffect } from "react";
import axios from 'axios';
function Countries(){
    var[country,setCountry]=React.useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then(function(res){
            console.log(res.data)
        setCountry(res.data)
    },[])

    })
    return(
                <div>
                    <h1>List of countries</h1>
                    <ul>
                        {
                            country.map((a)=>{
                                return(
                                    <li>{a.capital}</li>
                                )
                            })
                        }
                    </ul>
                </div>
    )
                    }
export default Countries;