function AllButton(props) {
    return (
        <button 
            className={'btn btn-sm ' + (props.filter === 'all' ? 'btn-light' : 'text-dark')} 
            onClick={props.switchFilter.bind(this, 'all')}
        >
            All
        </button>
    );
}

export default AllButton;