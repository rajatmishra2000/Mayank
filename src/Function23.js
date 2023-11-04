import{useState} from "react";
function Function23()
{
    const[num,setnum]= useState("Neha")
    return(
    <div>
    <h1>{num}</h1>
<input type="text" value={num} onChange={(e)=>setnum(e.target.value)}></input>
    </div>
    )
}
export default Function23