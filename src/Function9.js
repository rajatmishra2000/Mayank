import{useState} from "react";
function Function9()
{
  const[login,setlogin]=useState("")
  const[passward,setpassward]=useState("")
  const[message,setmessage]=useState("")
  function Change(e)
  {
    login==="Ram"?passward==="1234"?setmessage("Welcome"+login):setmessage("Invalid passward"):passward==="1234"?setmessage("Invalid loginid"):setmessage("Invalid loginid and Invalid password")
    e.preventDefault()
  }
  return(
    <div>
 <h1>{message}</h1>
    <form onSubmit={Change}>
 Enter your loginid<input type="text" onChange={(e)=>setlogin(e.target.value)}></input><br></br>
 Enter your passward<input type="password" onChange={(e)=>setpassward(e.target.value)}></input><br></br>
<input type="submit"></input><br></br>
 </form>
    </div>
  )
}
export default Function9