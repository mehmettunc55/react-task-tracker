import {useState} from 'react'
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';

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

  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
