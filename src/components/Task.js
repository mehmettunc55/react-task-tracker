import React from 'react'
import reactDom from 'react-dom'
import { FaTimes } from 'react-icons/fa'


const Task = ({task, deleteTask, toogleDone}) => {
    return (
        <div className='task' onDoubleClick={() => toogleDone(task.id)}>
            <h3>{task.text}<FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={() => deleteTask(task.id)}/></h3> 
            <p>{task.day}</p>          
        </div>
    )
}

export default Task
