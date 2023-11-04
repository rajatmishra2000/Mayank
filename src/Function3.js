import{useState} from "react";
function Function3()
{
    const[data,setdata]=useState("Yahoo")
    function change()
    {
        setdata("baba")
    }
    return(
      <div>
     <h1>{data}</h1>
     <button onClick={change}>ok</button>
      </div>  
    )
}
export default Function3