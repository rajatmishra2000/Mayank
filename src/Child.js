import{useState} from "react"
function Child(props)
{
const[name,setname]=useState("")
function Changehandeler(e)
{
 e.preventDefault()
 props.getdata(name)
}
    return(
<div>
<h1>{name}</h1>
<form onSubmit={Changehandeler}>
<input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input><br></br>
<button>Submit</button>
</form>
</div>
    )
}
export default Child