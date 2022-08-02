import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, CloseButton } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const EmployeeFile = props => {

    const [show, setShow] = useState(false)
    const history = useHistory()
    // const handleClose = () => props.handleClose()
    const handleClose = () => {
        setShow(false)
        props.handleShow()
    }

    useEffect(() => {
        setShow(props.show)
    }, [props.show])


    // const id = props.employee.id
    const [file, setFile] = useState(null)
    const [msg, setMsg] = useState(props.msg)

    const handleSubmit = () => {
        let data = new FormData()
        data.append("file", file, file.name)
        data.append('employee_id', props.id)
        props.uploadFile(data)
        props.handleMsg()
    }

    const handleChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        setFile(file)
        if (file) {
            reader.onloadend = () => setFileName
        }
    }

    return (
        <Modal show={show} backdrop centered onHide={handleClose} >
            <div className="employee-file">
                <Modal.Header style={{ "backgroundColor": "#373737"}} closeButton>
                    <div className="d-flex justify-content-between">
                        <Modal.Title style={{ color: "#fff" }}>
                            Upload Document
                        </Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body style={{ "backgroundColor": "#373737"}}>
                <Form.Group>
                        <Form.Label>Upload Document:</Form.Label>
                        <Form.Control type="file" name="file" size="sm" onChange={(event) => handleChange(event)} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} />
                </Form.Group>
                <Button onClick={handleSubmit}>Upload Document</Button>
                </Modal.Body>
                    <div id="closeButton">
                        <CloseButton onClick={handleClose} 
                            style={{
                                position: "relative",
                                bottom: 15 + "px",
                                right: 15 + "px"
                            }}
                        />
                    </div>
            </div>
        </Modal>
    )
    
}

export default EmployeeFile