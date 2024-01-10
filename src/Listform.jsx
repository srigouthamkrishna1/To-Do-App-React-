
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function ListForm({ handleOnAdd }) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    function handleAddTask() {
        handleOnAdd(text);
    }
    return (
        <div>
            <input className='border-2 border-black w-5/6 h-9 ' type="text" value={text} onChange={handleOnChange} />
            <button onClick={handleAddTask} className='bg-blue-400 w-1/12 rounded-r h-9'>Add</button>


        </div>
    )


}
export default ListForm;