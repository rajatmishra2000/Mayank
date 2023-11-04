import{useState}from "react"
function Function25()
{
    return(
    <div>
<YellowComp cmp={Counter}></YellowComp>
<GreenComp cmp={Counter}></GreenComp>
    </div>
    )
}
function YellowComp(props)
{
     return(
      <div>
<h1 style={{backgroundColor:"Yellow",width:"40px"}}>Yellow<props.cmp></props.cmp></h1>
</div>
     )
}
function GreenComp(props)
{
    return(
    <div>
<h1 style={{backgroundColor:"Green",width:"40px"}}>Green<props.cmp></props.cmp></h1>
</div>
    )
}
function Counter()
{
   const[data,setdata]=useState(0)
   function Change()
   {
     setdata(data+1)   
}
    return(
    <div>
<h1>{data}</h1>
<button onClick={Change}>ok</button>
    </div>
    )
}
export default Function25