import './Styleesheet1.css'
function Function2()
{
 var mname = "Yahoo"
function change()
{
  var mname = "baba"
  alert(mname);
} 
 return(
    <div>
<h1 className='s1'>{mname}</h1>
<button onClick={change}>ok</button>
    </div>
 )
}
export default Function2