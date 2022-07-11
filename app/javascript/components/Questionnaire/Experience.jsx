import React, { useState } from 'react'
import { Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap'

const Experience = props => {

    const [id, setId] = useState(props.id)

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            
            window.addEventListener("resize", handleResize);
            
            handleResize();
            
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }

    const states = [
        "--",
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY"
    ]

    const handleTable = () => {
        if (size.width > 580) {
            return (
                <div>

            <Row className="mb-3">

        <Form.Group as={Col} >
            <FloatingLabel label="Title">
            <Form.Control type="text" name={`experience.${id}.title`} value={props.values.experience.id.title} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>

        <FloatingLabel label="Company">
            <Form.Control type="text" name={`experience.${id}.company`} value={props.values.experience.id.company} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">

        <Form.Group as={Col}>
        <FloatingLabel label="City">
            <Form.Control type="text" name={`experience.${id}.city`} value={props.values.experience.id.city} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col}>
        <FloatingLabel label="State">
            <Form.Select name={`experience.${id}.state`} value={props.values.experience.id.state} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}>
            {states.map(state => 
                <option defaultValue="--">{state}</option>
            )}
            </Form.Select>
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="ZipCode">
            <Form.Control type="text" name={`experience.${id}.zipcode`} value={props.values.experience.id.zipcode} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Start Date">
            <Form.Control type="date" name={`experience.${id}.startdate`} value={props.values.experience.id.startdate} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="End Date">
            <Form.Control type="date" name={`experience.${id}.enddate`} value={props.values.experience.id.enddate} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Description">
            <Form.Control as="textarea" name={`experience.${id}.description`} value={props.values.experience.id.description} onChange={props.handleChange} style={{ backgroundColor: "#2f2f2f", "color": "#fff", height: '100px', "margin-top": 15+"px"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Form.Label>
            <Form.Check label="Current Job" name={`experience.${id}.current`} value={props.values.experience.id.current} onChange={props.handleChange} defaultChecked={props.values.experience.id.current} style={{ color: "#fff" }}/>
        </Form.Label>
            </div>
            )
        } else {
            return (
                <div>
                <Row className="mb-3">
                
        <Form.Group as={Col} >
            <FloatingLabel label="Title">
            <Form.Control type="text" name={`experience.${id}.title`} value={props.values.experience.id.title} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
                <Row className="mb-3">
        <Form.Group as={Col}>

        <FloatingLabel label="Company">
            <Form.Control type="text" name={`experience.${id}.company`} value={props.values.experience.id.company} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">

        <Form.Group as={Col}>
        <FloatingLabel label="City">
            <Form.Control type="text" name={`experience.${id}.city`} value={props.values.experience.id.city} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
                <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="State">
            <Form.Select name={`experience.${id}.state`} value={props.values.experience.id.state} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}>
            {states.map(state => 
                <option defaultValue="--">{state}</option>
            )}
            </Form.Select>
        </FloatingLabel>
        </Form.Group>
        </Row>
                <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="ZipCode">
            <Form.Control type="text" name={`experience.${id}.zipcode`} value={props.values.experience.id.zipcode} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Start Date">
            <Form.Control type="date" name={`experience.${id}.startdate`} value={props.values.experience.id.startdate} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
                <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="End Date">
            <Form.Control type="date" name={`experience.${id}.enddate`} value={props.values.experience.id.enddate} onChange={props.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Description">
            <Form.Control as="textarea" name={`experience.${id}.description`} value={props.values.experience.id.description} onChange={props.handleChange} style={{ backgroundColor: "#2f2f2f", "color": "#fff", height: '100px', "margin-top": 15+"px"}}/>
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Form.Label>
            <Form.Check label="Current Job" name={`experience.${id}.current`} value={props.values.experience.id.current} onChange={props.handleChange} defaultChecked={props.values.experience.id.current} style={{ color: "#fff" }}/>
        </Form.Label>
            </div>
            )
        }
    }

    return(
        <div className="experience">
            {handleTable()}
        </div>
    )
}

export default Experience