import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

export default class Jobs extends Component {

    render() {
        const jobs = this.props.jobs.length > 0 ? this.props.jobs : []
        return ( 
            <CardGroup> 
            <br />   
                {jobs.map(job =>
                <Card id={job.id} key={job.id} bg="info" text="white" style={{ width: '18rem'}}>
                    <Card.Title className="mb-2 text-muted">{job.title}</Card.Title>
                    <Card.Subtitle>Location: {job.city}, {job.state}</Card.Subtitle>
                    <Card.Text>Description: {job.description} </Card.Text>
                    <Card.Footer>
                        <Button onClick={this.handleClick}>Apply</Button>
                    </Card.Footer>
                </Card>
                )}
            </CardGroup>
            
        )
    }
}