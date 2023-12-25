export function Items(props) {
    function handleOnDelete() {
        console.log(props.task);
        props.onDelete(props.task);

    }
    return (
        <div>
            <div>{props.task}</div>
            <button onClick={handleOnDelete}>Delete</button>
        </div>

    )
}
