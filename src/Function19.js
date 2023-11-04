import{useRef} from "react";
function Function19()
{
    var inref = useRef(null)
function Change()
{
    inref.current.style.backgroundColor="Yellow"
    inref.current.style.color="Green"
}
    return(
    <div>
<input type="text" ref={inref}></input><br></br>
<button onClick={Change}>ok</button><br></br>
    </div>
    )
}
export default Function19