import TodoItem from './TodoItem';

function TodoList(props) {
    let hasTask = props.todos.filter(item => {
        if (props.filter === 'all') return true;
        if (props.filter === 'pending') return !item.isCompleted;
        if (props.filter === 'completed') return item.isCompleted;
        return true;
    }).length;

    return (
        <ul className="todos-list list-group">
            {hasTask ? 
                props.todos.map((item, key) => 
                    <TodoItem key={key} item={item} filter={props.filter}
                        toggleTaskComplete={props.toggleTaskComplete.bind(this, key)}
                        removeTask={props.removeTask.bind(this, key)}
                    >{item.task}</TodoItem>
                )
            : <li className="py-2 text-muted text-center">No task yet.</li>}
        </ul>
    );
}

export default TodoList;