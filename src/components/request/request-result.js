import Loading from "../loading/loading";

const RequestResult = (props) => {
    return <>
        <Loading status={props.status} />
        {
            <div className="error" style={{color: 'red', textAlign:'center', padding: '5px'}}>{props.error}</div>
        }
        {
            <div className="error" style={{color: 'green', textAlign:'center', padding: '5px'}}>{props.success}</div>
        }
    </>
}

export default RequestResult;