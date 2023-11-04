import React,{useEffect} from "react";
function Useeffect(props)
{
   useEffect(()=>{
    console.log("UseEffect is a called");
},[props.data])
return(
<div>
</div>
)
}
export default Useeffect