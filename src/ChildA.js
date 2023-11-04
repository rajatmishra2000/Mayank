import ChildB from "./ChlidB"
function ChlidA(props)
{
    return(
<div>
<ChildB name={props.name}></ChildB>
</div>
    )
}
export default ChlidA