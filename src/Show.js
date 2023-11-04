import{useState} from "react";
function Show()
{
const[data,setData]=useState(false)
function Show()
{
    setData(true)
}
function Hide()
{
    setData(false)
}
return(
<div>
{
    data?<h1>Ram</h1>:<h1></h1>
}
<button onClick={Show}>Show</button>
<button onClick={Hide}>Hide</button>
</div>
)
}
export default Show