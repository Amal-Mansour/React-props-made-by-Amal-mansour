import React from 'react'
import { Card } from 'react-bootstrap'


const Project = ({ project }) => {

    const styleCard = {
        width: '18rem',
        margin: "10px",
        borderColor: "#333333",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",


    }
    
    return (
        <div >

            <Card style={styleCard}>
                <Card.Img variant="top" src={project.srcImage} />
                <Card.Body >
                    <Card.Title style={{ color: "green" }}>{project.name}</Card.Title>
                    <br />
                    <br />
                    <Card.Text>{project.describtion}</Card.Text>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Project;
