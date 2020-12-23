function PendingButton(props) {
    return (
        <button 
            className={'btn btn-sm ' + (props.filter === 'pending' ? 'btn-primary' : 'text-primary')} 
            onClick={props.switchFilter.bind(this, 'pending')}
        >
            <i className="fas fa-ellipsis-h"></i> Pending
        </button>
    );
}

export default PendingButton;