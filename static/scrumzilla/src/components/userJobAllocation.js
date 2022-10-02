import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import { propsOfUserAllocation } from "./mocks/mockData";
import "./userAllocation.css";
const UserJobAllocation = (props) => {
  const [userEmpData, setEmpData] = useState(propsOfUserAllocation);
  useEffect(() => {
    setEmpData(propsOfUserAllocation);
  }, [props]);
  const { issues } = userEmpData;
  console.log(issues.find((issue) => issue.assignee === "").length);
  // const issuesAssigned =
  //   (issues.find((issue) => issue.assignee === "").length / issues.length) *
  //   100;
  const issuesAssigned = 30; // mock data
  const issuesNotAssigned = 100 - issuesAssigned;
  return (
    <div style={{width: '95%'}}>
      {/* <Row>
        <Col xs={12} md={8}>Data 1</Col>
        <Col xs={12} md={4}>Data 2</Col>
      </Row> */}
      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={5} sm={3}>
              <Card>
                <CardBody
                  style={{ backgroundColor: "#EBECF0", padding: "10px" }}
                >
                  <p className="card-title">Ticket Tracker</p>
                  <Row container style={{ justifyContent: "center" }}>
                    <Col item xs={6}>
                      <Card
                        style={{
                          margin: "0px 5px 0px 0px",
                          fontWeight: "600",
                          color: "#0747a6",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Assigned</p>
                          {`${issuesAssigned}%`}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={6}>
                      <Card
                        style={{
                          margin: "0px 0px 0px 5px",
                          fontWeight: "600",
                          color: "#FF5630",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Unassigned</p>
                          {`${issuesNotAssigned}%`}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col item xs={0} sm={4}></Col>
            <Col item xs={7} sm={5}>
              <Card>
                <CardBody
                  style={{ backgroundColor: "#EBECF0", padding: "10px" }}
                >
                  <p className="card-title">Progress Tracker</p>
                  <Row container style={{ justifyContent: "center" }}>
                    <Col item xs={4}>
                      <Card
                        style={{
                          margin: "0px 5px 0px 0px",
                          fontWeight: "600",
                          color: "#5E6C84",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Todo</p>
                          {`${issuesAssigned}%`}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={4}>
                      <Card
                        style={{
                          margin: "0px 5px 0px 5px",
                          fontWeight: "600",
                          color: "#0065FF",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Progress</p>
                          {`${issuesNotAssigned}%`}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={4}>
                      <Card
                        style={{
                          margin: "0px 0px 0px 5px",
                          fontWeight: "600",
                          color: "#36B37E",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Done</p>
                          {`${issuesNotAssigned}%`}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col item xs={12} md={4}></Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} className="heading">
              Issues
            </Col>
          </Row>
          <Card style={{ border: "5px solid #ebecf0", borderRadius: "10px" }}>
            <div style={{ height: "300px", backgroundColor: "#ffffff" }}></div>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Row container>
              <Col item xs={12} className="heading">
                Insights
              </Col>
            </Row>
            <Card style={{ border: "5px solid #ebecf0", borderRadius: "10px" }}>
              <div
                style={{ height: "300px", backgroundColor: "#ffffff" }}
              ></div>
            </Card>
          </Row>
        </Col>
      </Row>

      {/* <img
        src="https://my-jira-app.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium"
        alt="Issue Type Icon"
      />
      <img
        src="https://my-jira-app.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
        alt="Issue Type Icon"
      />
      <img
        src="https://my-jira-app.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10307?size=medium"
        alt="Issue Type Icon"
      />
      <img
        src="https://my-jira-app.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium"
        alt="Issue Type Icon"
      /> */}
    </div>
  );
};

export default UserJobAllocation;
