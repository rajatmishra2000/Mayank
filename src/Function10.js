import{useEffect} from "react";
import React,{useState} from "react";
function Function10()
{
    const[data,setdata]=useState(0)
    const[data1,setdata1]=useState(10)
    React.useEffect(()=>{console.log("UseEffect is a called")},[data])
    function Change()
    {
        setdata(data+1)
    }
    function Change1()
    {
        setdata1(data1+1)
    }
    return(
        <div>
    <h1 style={{backgroundColor:"Yellow", color:"Green"}}>{data}</h1>
    <h1 style={{backgroundColor:"Yellow",color:"Green"}}>{data1}</h1>
    <button onClick={Change}>data</button>
    <button onClick={Change1}>data1</button>
        </div>
    )
}
export default Function10