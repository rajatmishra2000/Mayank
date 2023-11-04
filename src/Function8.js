import{useState} from "react";
function Function8()
{
    const[name,setname]=useState("")
    const[country,setcountry]=useState("")
    const[checkbox,setcheckbox]=useState(false)
    function display(e)
    {
        alert(name+country+checkbox)
        e.preventDefault()
    }
    return(
    <div>
    <form onSubmit={display}>
Enter Your name:<input type="text"onChange={(e)=>setname(e.target.value)}></input><br></br>'
select country <br></br>
<select onChange={(e)=>setcountry(e.target.value)}>
<option>Select country</option>
<option>India</option>
<option>Australia</option>
<option>Newzlend</option>
</select><br></br>
checkbox<input type="checkbox" onChange={(e)=>setcheckbox(e.target.value)}></input><br></br>
<input type="submit"></input><br></br>
</form>
    </div>
    )
}
export default Function8