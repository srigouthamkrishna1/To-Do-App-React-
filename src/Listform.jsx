
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
            <input type="text" value={text} onChange={handleOnChange} />
            <button onClick={handleAddTask}>Add</button>


        </div>
    )


}
export default ListForm;