import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ConfirmSubscription = (props) => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    
    useEffect(() => {
        setShow(props.show)
    })

    return (
        <React.Fragment>    
        <Modal show={show} animation backdrop >

            <Modal.Header>
            Confirm Subscription </Modal.Header>

            <Modal.Body>
                Please confirm the subscription type.
                </Modal.Body>
                <Modal.Footer>

                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={props.handleSubmit}>Confirm</Button>
                </Modal.Footer>
        </Modal>
                        </React.Fragment>
    )
}

export default ConfirmSubscription