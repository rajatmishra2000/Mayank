import{useState} from "react";
function Function6()
{
    const[data,setdata]=useState(false)
function Change()
{
    setdata(true)
}
function Change1()
{
    setdata(false)
}
   return(
    <div>
     {
        data?<h1>Ram</h1>:<h1></h1>
     }
     <button onClick={Change}>Show</button>
     <button onClick={Change1}>Hide</button>
    </div>
   )
}
export default Function6