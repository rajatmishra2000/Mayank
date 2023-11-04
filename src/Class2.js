import{Component} from "react";
class Class2 extends Component
{
    constructor()
    {
        super()
    this.state=
    {data:"Yahoo"}
    }
    change()
    {
        this.setState({data:"baba"})
    }
    render()
    {
        return(
            <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
}
export default Class2