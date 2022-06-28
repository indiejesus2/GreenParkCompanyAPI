import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ConfirmSubscription = (props) => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    
    useEffect(() => {
        setShow(props.show)
    }, [props.show])

    return (
        <div className="signIn">
            <React.Fragment>    
                <Modal show={show} animation backdrop >
                    <Modal.Header>
                    Cancel Subscription </Modal.Header>
                    <Modal.Body>
                        Please confirm the cancellation.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose}>Go Back</Button>
                            <Button onClick={props.handleSubmit}>Confirm</Button>
                        </Modal.Footer>
                </Modal>
            </React.Fragment>
        </div>
    )
}

export default ConfirmSubscription