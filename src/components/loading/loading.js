import './loading.css';

const Loading = (props) => {
    return <div className='wrap-loading'>
        <div className='loading' style={{display: props.status? "":"none"}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
  </div>
    </div>
};

export default Loading;