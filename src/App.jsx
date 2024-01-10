
import './App.css'
import { useState } from 'react'
import ListForm from './Listform'
import { Items } from './Items';

function App() {
  const [tasks, setTasks] = useState([]);
  function handleOnAdd(input) {
    setTasks([...tasks, { task: input, id: new Date(), completed: false }]);
  }
  function onDelete(input) {

    const updatedTasks = tasks.filter((t) => {

      return (t.task != input);
    })
    console.log(updatedTasks);
    setTasks([...updatedTasks]);


  }
  function markAsCompleted(task) {
    let updatedTasks = tasks.map((u) => {
      let t = { ...u }
      if (t.task == task) {

        t.completed = !t.completed

      }
      return t;
    })
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1 className='text-2xl my-1 text-center'>To Do List</h1>
      <ListForm handleOnAdd={handleOnAdd} />
      <div>
        {tasks.map(t => {
          return <Items key={t.id} id={t.id} task={t.task} completed={t.completed} onDelete={onDelete} markAsCompleted={markAsCompleted}> </Items>
        })}
      </div>

    </div>
  )
}

export default App
