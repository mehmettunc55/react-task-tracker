import React from 'react'
import Task from './Task';


const Tasks = ({tasks, deleteTask, toogleDone}) => {

    


    return (
        <div>
            {tasks?.map((task) => (
               <Task key={task.id} task={task} deleteTask={deleteTask}/>
            ))}
        </div>
    )
}

export default Tasks
