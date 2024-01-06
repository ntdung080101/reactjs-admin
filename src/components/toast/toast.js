import { useState } from "react";
import { Toast } from "react-bootstrap";

const ToastComponent = (props) => {
    const [show, setShow] = useState(false);

    return <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{position: 'absolute', right: '10px', top: '10px'}}>
    <Toast.Header>
        <strong className="me-auto">{props.header}</strong>
    </Toast.Header>
    <Toast.Body>{props.body}</Toast.Body>
</Toast>
};

export default ToastComponent;