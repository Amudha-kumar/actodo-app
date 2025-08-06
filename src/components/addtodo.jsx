import { useState } from "react"

function AddTodoForm(props)
{
     const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    const [Newactivity,setNewactivity] =useState("")

    function HandleChange(evt)
    {
         setNewactivity(evt.target.value)
    }
    function AddActivity()
{
    setactivityArr([...activityArr,{id:activityArr.length+1,activity:Newactivity,}])
    setNewactivity("")
    
    
}

 return(
    <div className="flex flex-col gap-3">
                <h1 className="font-medium text-2xl">Manage Activities</h1>
                <div>
                    <input type="text" value={Newactivity} onChange={HandleChange} className="border border-black p-1 bg-transparent" placeholder="Next activity?"></input>
                    <button onClick={AddActivity} className="bg-black text-white p-1 border border-black" >Add</button>
                </div>
                </div>
 )
}
export default AddTodoForm