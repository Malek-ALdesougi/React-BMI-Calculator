import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./components.css";

class Footer extends React.Component {
  constructor(prop) {
    super();
  }
  render() {
    return (
      <footer>
        <Card className="card" >
          <Card.Header>Note</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{" "}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </footer>
    );
  }
}

export default Footer;
