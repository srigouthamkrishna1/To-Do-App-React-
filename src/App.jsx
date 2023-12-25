
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

  return (
    <div>
      <h1>To Do List</h1>
      <ListForm handleOnAdd={handleOnAdd} />
      <div>
        {tasks.map(t => {
          return <Items key={t.id} id={t.id} task={t.task} onDelete={onDelete}> </Items>
        })}
      </div>

    </div>
  )
}

export default App
