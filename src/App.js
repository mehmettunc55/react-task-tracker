import {useState} from 'react'
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study React Pre-Class Notes',
      day: 'Feb 5th at 2:30pm',
      isDone: false,
    },
    {
      id: 2,
      text: 'Feed the Dog',
      day: 'Feb 6th at 1:30pm',
      isDone: false,
    },
    {
      id: 3,
      text: 'Attend in-Class',
      day: 'Feb 7th at 20:00pm',
      isDone: false,
    },
  ]);

  
  //Add Tasks
  const addTask =() =>{
    const id = Math.floor(Math.random()*100)+1;
    const newTask = {id, ...tasks};
    setTasks([...tasks, newTask]);
  }



  //Delete Task

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task)=>task.id !== deletedTaskId))
  }

  //Toogle Done

  const toggleDone =(toogleDoneId)=> {
    setTasks(
      tasks.map((task) => (
        task.id === toogleDoneId ? {...task, isDone : !task.isDone} : task
      )
    )
  }


  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      <AddTask addTask={addTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask} toogleDone = {toogleDone}/>
    </div>
  );
}

export default App;
