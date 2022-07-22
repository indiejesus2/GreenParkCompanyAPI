import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const EmployeeFile = props => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(props.show)
    }, [props.show])


    const id = props.employee.id
    const [file, setFile] = useState(null)

    const handleSubmit = () => {
        let data = new FormData()
        debugger
        data.append("file", file, file.name)
        data.append('employee_id', id)
        props.uploadFile(data)
    }

    const handleChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        setFile(file)
        if (file) {
            reader.onloadend = () => setFileName
        }
    }

    const handleClose = () => {
        history.push('/');
        setShow(false)
    }

    return (
        <div className="employee-file">
            <Modal show={show} backdrop centered onHide={handleClose} >
                <Modal.Header style={{ "backgroundColor": "#373737"}}>
                    <Modal.Title style={{ color: "#fff" }}>
                        Upload Document
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ "backgroundColor": "#373737"}}>
                <Form.Group>
                        <Form.Label>Upload Document:</Form.Label>
                        <Form.Control type="file" name="file" size="sm" onChange={(event) => handleChange(event)} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} />
                </Form.Group>
                <Button onClick={handleSubmit}>Upload Document</Button>
                </Modal.Body>
            </Modal>
        </div>
    )
    
}

export default EmployeeFile