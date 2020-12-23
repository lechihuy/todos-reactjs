function TodoItem(props) {
    if (
        (props.filter === 'pending' && props.item.isCompleted)
    ||  (props.filter === 'completed' && !props.item.isCompleted)
    ) return null;

    return (
        <li className="d-flex list-group-item align-items-center">
            <i className={'fa-2x ' +
                (props.item.isCompleted ? 'fas fa-check-circle text-success' : 'far fa-circle text-light')}
                role="button" onClick={props.toggleTaskComplete}></i> 
            {! props.item.isCompleted
                ? <input type="text" className="mx-3 border-0 p-0 lead" defaultValue={props.children} />
                : <del className="mx-3 text-muted lead">{props.children}</del>
            }
            <button className="btn btn-sm btn-light ms-auto" onClick={props.removeTask}>
                <i className="fas fa-times text-danger"></i>
            </button>
        </li>
    );
}

export default TodoItem;