import AddTodoForm from "./addtodo"
import TodoList from "./todolist"
import { useState } from "react"



function TodoContainer() {
     const [activityArr, setactivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Have breakfast"
        },
        {
            id: 3,
            activity: "Take a shower"
        }

    ])
    return (
        <div className="flex flex-wrap gap-5">
            <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}></AddTodoForm>
            <TodoList activityArr={activityArr} setactivityArr={setactivityArr} ></TodoList>
                
            
        </div>
    )
}
export default TodoContainer