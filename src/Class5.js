import{Component} from "react";
class Class5 extends Component
{
    constructor()
    {
      super()
      this.state=
      {data:10}
    console.log("Constructor is a called");
    }
    change()
    {
        this.setState({data:this.state.data+1})
    }
    render()
    {
        console.log("Render is a called");
    return(
        <div>
        <h1>{this .state.data}</h1>
        <button onClick={()=>this.change()}>ok</button>
        </div>
    )
    }
componentDidMount()
{
    console.log("Component did mount is a called");
}
shouldComponentUpdate()
{
    console.log("should component update is a called");
    return true
}
componentDidUpdate()
{
    console.log("Component did update is a called");
}
}
export default Class5