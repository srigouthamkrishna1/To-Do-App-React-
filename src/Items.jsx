export function Items(props) {
    function handleOnDelete() {
        console.log(props.task);
        props.onDelete(props.task);

    }
    return (
        <div className="flex py-1 gap-1">
            <input type="checkbox" className="h-10" onChange={() => props.markAsCompleted(props.task)} />
            <div className={props.completed ? 'line-through' : ''}>{props.task}</div>
            <button onClick={handleOnDelete} className="bg-red-400 px-6 py-2 rounded-lg">Delete</button>
        </div>

    )
}
