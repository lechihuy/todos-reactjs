function CompletedButton(props) {
    return (
        <button 
            className={'btn btn-sm ' + (props.filter === 'completed' ? 'btn-success' : 'text-success')} 
            onClick={props.switchFilter.bind(this, 'completed')}
        >
            <i className="far fa-check-circle"></i> Completed
        </button>
    );
}

export default CompletedButton;