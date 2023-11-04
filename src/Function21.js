import Function22 from './Function22'
import{useRef} from "react";
function Function21()
{
    var inref= useRef(null)
function Change()
{
    inref.current.style.backgroundColor="Yellow"
    inref.current.style.color="Green"
}
    return(
    <div>
<Function22 ref={inref}></Function22>
<button onClick={Change}>ok</button>
    </div>
    )
}
export default Function21