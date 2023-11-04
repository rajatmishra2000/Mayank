import{Component,PureComponent} from "react";
class Function18 extends PureComponent
{
    constructor()
    {
        super()
        this.state=
        {
            data:10
        }
    }
    Change()
    {
    this.setState({data:100})
    }
    render()
    {
    console.log("Rendr is a called");
        return(
            <div>
        <h1>{this.state.data}</h1>
    <button onClick={()=>this.Change()}>ok</button>
            </div>
        )
    }
}
export default Function18