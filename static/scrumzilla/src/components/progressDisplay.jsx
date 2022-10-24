import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import "./homePage.css";
function ProgressDisplay(props) {
  const emphasis = props.emphasized;
  return (
    <Card
      style={{
        border: emphasis ? "auto" : "none",
        textAlign: "center",
        backgroundColor: emphasis ? "#EBECF0" : "#00000000",
      }}
    >
      <CardBody
        style={{
          padding: emphasis ? "5px 10px" : "0",
        }}
      >
        {emphasis ? <p className="card-title">Progress Tracker</p> : null}
        <Row style={{ justifyContent: "center" }}>
          <Col xs={4} className="middle-padding">
            <Card
              style={{
                fontWeight: "600",
                color: "#5E6C84",
                border: emphasis ? "auto" : "none",
                backgroundColor: emphasis ? "#FFFFFF" : "#00000000",
              }}
            >
              <CardBody className="tab">
                <p className="tab-header">Todo</p>
                {`${props.issueTodo}%`}
              </CardBody>
            </Card>
          </Col>
          <Col xs={4} className="middle-padding">
            <Card
              style={{
                fontWeight: "600",
                color: "#0052cc",
                border: emphasis ? "auto" : "none",
                backgroundColor: emphasis ? "#FFFFFF" : "#00000000",
              }}
            >
              <CardBody className="tab">
                <p className="tab-header">Progress</p>
                {`${props.issueProgress}%`}
              </CardBody>
            </Card>
          </Col>
          <Col xs={4} className="middle-padding">
            <Card
              style={{
                fontWeight: "600",
                color: "#36B37E",
                border: emphasis ? "auto" : "none",
                backgroundColor: emphasis ? "#FFFFFF" : "#00000000",

              }}
            >
              <CardBody className="tab">
                <p className="tab-header">Done</p>
                {`${props.issueDone}%`}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default ProgressDisplay;
