function Function13()
{
    var arr=[{Rollno:101,StudentName:"Rahul",Marks:85},{Rollno:102,StudentName:"Neha",Marks:86},
{Rollno:103,StudentName:"Karan",Marks:89}]
return(
    <div>
    <table>
    <tr>
    <th>Rollno</th>
    <th>StudentName</th>
    <th>Marks</th>
    </tr>
    {
        arr.map((item,i)=>
    <tr>
    <td key={i}>{item.Rollno}</td>
    <td key={i}>{item.StudentName}</td>
    <td key={i}>{item.Marks}</td>
    </tr>
        )
    }
    </table>
    </div>
)
}
export default Function13