import React,{useState} from "react";
import React,{useState,useEffect} from "react";

function Store(){
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
  


  export default Store;
