import{useState} from "react";
function Toggle()
{
const[data,setdata]=useState(false)
function Change()
{
    setdata(!data)
}
if(data==true)
return(
<div>
<h1>Ram</h1>
<button onClick={Change}>toggle</button>
</div>    
)
else
return(
<div>
<h1></h1>
<button onClick={Change}>toggle</button>
</div>
)
}
export default Toggle