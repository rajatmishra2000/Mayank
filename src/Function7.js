import{useState} from "react";
function Function7()
{
    const[data,setdata]=useState(false)
    function Change()
    {
        setdata(!data)
    }
    return(
    <div>
    {
      data?<h1>Ram</h1>:<h1></h1>
    }
    <button onClick={Change}>toggle</button>
    </div>
    )
}
export default Function7