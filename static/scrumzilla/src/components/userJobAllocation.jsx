import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import { userAllocationHomePage } from "./mocks/mockData";
import IssueTable from "./issueTable";
import "./userAllocation.css";
const percentageOfTasks = (total, value) => {
  return Math.round((value / total) * 100);
};
const UserJobAllocation = (props) => {
  const [userEmpData, setEmpData] = useState();
  useEffect(() => {
    setEmpData(userAllocationHomePage);
  }, []);
  const { total, todo, progress, assigned } =
    userEmpData?.root?.sprintProgress ?? {};
  let issuesAssigned = 0;
  let issuesNotAssigned = 0;
  let issueTodo = 0;
  let issueProgress = 0;
  let issueDone = 0;
  const issueList = !!userEmpData?.root?.unAssignedIssues
    ? userEmpData?.root?.unAssignedIssues
    : [];

  if (!!userEmpData?.root?.sprintProgress) {
    issuesAssigned = percentageOfTasks(total, assigned);
    issuesNotAssigned = 100 - issuesAssigned;
    issueTodo = percentageOfTasks(total, todo);
    issueProgress = percentageOfTasks(total, progress);
    issueDone = 100 - (issueTodo + issueProgress);
  }

  return (
    <div style={{ width: "95%" }}>
      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={5} sm={3}>
              <Card>
                <CardBody
                  style={{ backgroundColor: "#EBECF0", padding: "5px 10px" }}
                >
                  <p className="card-title">Ticket Tracker</p>
                  <Row style={{ justifyContent: "center" }}>
                    <Col xs={6} className="middle-padding">
                      <Card
                        style={{
                          fontWeight: "600",
                          color: "#0052cc",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Assigned</p>
                          {`${issuesAssigned}%`}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={6} className="middle-padding">
                      <Card
                        style={{
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
            <Col xs={0} sm={4}></Col>
            <Col xs={7} sm={5}>
              <Card>
                <CardBody
                  style={{ backgroundColor: "#EBECF0", padding: "5px 10px" }}
                >
                  <p className="card-title">Progress Tracker</p>
                  <Row style={{ justifyContent: "center" }}>
                    <Col xs={4} className="middle-padding">
                      <Card
                        style={{
                          fontWeight: "600",
                          color: "#5E6C84",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Todo</p>
                          {`${issueTodo}%`}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={4} className="middle-padding">
                      <Card
                        style={{
                          fontWeight: "600",
                          color: "#0052cc",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Progress</p>
                          {`${issueProgress}%`}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={4} className="middle-padding">
                      <Card
                        style={{
                          fontWeight: "600",
                          color: "#36B37E",
                        }}
                      >
                        <CardBody className="tab">
                          <p className="tab-header">Done</p>
                          {`${issueDone}%`}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xs={12}>
              <Card
                style={{
                  backgroundColor: "#ebecf0",
                  border: "5px solid #ebecf0",
                  borderRadius: "10px",
                }}
              >
                <div className="heading">Issues</div>
                <Card
                  style={{ backgroundColor: "#ffffff", borderRadius: "10px", padding:'13px' }}
                >
                  <IssueTable issueList={issueList} />
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Col xs={12}>
              <div className="heading">Insights</div>
              <Card
                style={{ border: "5px solid #ebecf0", borderRadius: "10px" }}
              >
                <div
                  style={{ height: "300px", backgroundColor: "#ffffff" }}
                ></div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserJobAllocation;
