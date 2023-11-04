import{useState} from "react";
function Function5(p)
{
  const[data,setdata] = useState(p.firstname)
  const[data1,setdata1] = useState(p.channel)
   function Change()
   {
    setdata("baba")
    setdata1("twiter")
   }
  return(
    <div>
<h1>{data}</h1>
<h1>{data1}</h1>
<button onClick={Change}>ok</button>
    </div>
  )
}
export default Function5