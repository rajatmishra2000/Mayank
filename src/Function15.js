function Function15(props)
{
   return(
    <div>
      {
    props.data.map((item,i)=>
    <h1 key={i}>{item.Rollno}{item.studentname}{item.Marks}</h1>
    )
      }
    </div>
   )
}
export default Function15