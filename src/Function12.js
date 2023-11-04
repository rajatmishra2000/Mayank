function Function12()
{
   var arr=[{Rollno:101,studentName:"Rahul",Marks:85},{Rollno:102,studentName:
"Neha",Marks:86},{Rollno:103,studentName:"Karan",Marks:88}]
return(
    <div>
        {
            arr.map((item,i)=>
        <h1 key={i}>{item.Rollno}{item.studentName}{item.Marks}</h1>
            )
        }
    </div>
)    
}
export default Function12