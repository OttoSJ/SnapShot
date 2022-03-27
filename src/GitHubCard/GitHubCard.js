import React from "react"
import Card from "react-bootstrap/Card"
import MickeyMouse from './Mickey_Mouse.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>

        <Card.Img variant="top" src={null} />

        <Card.Body>
            <Card.Title>Someboby</Card.Title>
            <Card.Text>
            I am someboby
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard