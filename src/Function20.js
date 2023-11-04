import{Component,createRef} from "react";
class Function20 extends Component
{
    constructor()
    {
        super()
        this.inref=createRef()
    }
    Change()
    {
      this.inref.current.style.backgroundColor="Yellow"
      this.inref.current.style.color="Green"
    }
     render()
     {
        return(
         <div>
    <input type="text" ref={this.inref}></input><br></br>
    <button onClick={()=>this.Change()}>ok</button><br></br>
         </div>   
        )
     }
}
export default Function20