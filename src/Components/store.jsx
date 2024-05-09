import React,{useState} from "react";
import "../App.jsx"

function store(){
  const [data,setback]=useState(null);
  const fetchdata ={
    if ( data){
      fetch()
      .then (response)=response.json()
      .then (jsondata )= setdata(jsondata)
      .catch (error = console.error)
      ("error Fetching data :",error);
    }
    }
  }
  return(
    <div>
      <button onClick={fetchdata}></button>
      
    </div>
  )