function Function17(props)
{
      var username = "Chinu"
      function Change()
      {
        props.data(username)
      }
    return(
        <div>
    <button onClick={Change}>ok</button>
        </div>
    )
}
export default Function17