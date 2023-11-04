import ChildC from "./ChlidC"
function ChildB(props)
{
    return(
<div>
<ChildC name={props.name}></ChildC>
</div>
    )
}
export default ChildB