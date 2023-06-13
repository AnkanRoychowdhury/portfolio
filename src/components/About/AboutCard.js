import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankan Roychowdhury </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am a student currently pursuing B.Tech in Computer Science & Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Connections
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ( Jab paisa hoga pura world ghumunga )
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's build the future, one line of code at a time..."{" "}
          </p>
          <footer className="blockquote-footer">Ankan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
