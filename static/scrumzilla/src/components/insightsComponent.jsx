import React, { useState } from "react";
import { Col, Row, Card, CardTitle, CardBody } from "reactstrap";
import Select from "@atlaskit/select";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";
import { percentageOfTasks } from "./helpers/percentageOfTasks";
import ProgressDisplay from "./progressDisplay";
import "./insightComponent.css";

const InsightsComponent = (props) => {
  const [compareWith, setCompareWith] = useState("allUser");
  const userInsight = props?.userInsights[0];
  const { total, todo, progress } = userInsight?.progress ?? {};
  const userAssignmentStatus =
    userInsight?.storypoint?.remarkCompareWith[`${compareWith}`];
  const userTodo = percentageOfTasks(total, todo);
  const userProgress = percentageOfTasks(total, progress);
  const userDone = 100 - (userTodo + userProgress);
  const userTotal = total;
  const userStoryPoints = userInsight?.storypoint?.sprintTotal;
  return (
    <Card
      style={{
        backgroundColor: "#ebecf0",
        border: "5px solid #ebecf0",
        borderRadius: "10px",
      }}
      className="insightsComponent"
    >
      <div className="heading">Insights</div>
      <Card
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "13px",
        }}
      >
        <Row>
          <Col
            xs={12}
            md={8}
            className={
              "d-flex offset-md-4 align-items-center justify-content-end"
            }
          >
            {`Compare with :`}
            <Select
              inputId="compare-with-selector"
              onChange={(value) => setCompareWith(value?.value)}
              defaultValue={{ label: "All Users", value: "allUser" }}
              className="compare-select"
              classNamePrefix="user-select"
              options={[
                { label: "Previous User Data", value: "userPreviousData" },
                { label: "All Users", value: "allUser" },
                { label: "Sprint Limit", value: "sprintLimit" },
              ]}
            />
          </Col>
        </Row>
        <Card className="mt-2 p-3">
          <Row>
            <Col xs={8}>
              <CardTitle className="d-flex align-items-center fs-5">
                <Avatar
                  appearance="circle"
                  src={userInsight?.avatarUrl}
                  name={userInsight?.displayName}
                  size={"medium"}
                />
                <div className="ms-2">{userInsight?.displayName}</div>
              </CardTitle>
            </Col>
            <Col xs={4}>
              <div className="float-end">
                <Lozenge>{userAssignmentStatus?.remark}</Lozenge>
              </div>
              <div className="float-end text-end" style={{ fontSize: "10px" }}>
                {userAssignmentStatus?.message}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div
                className="text-start ms-2 d-flex"
                style={{ fontSize: "10px" }}
              >
                <div
                  style={{ color: "#0052cc", marginRight: "2px" }}
                >{`${userTotal}`}</div>
                {`Issues Assigned`}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              {" "}
              <ProgressDisplay
                issueDone={userDone}
                issueTodo={userTodo}
                issueProgress={userProgress}
              />
            </Col>
            <Col xs={5} className="offset-1 d-flex align-items-end">
              <CardBody
                className="d-flex text-end"
                style={{
                  fontSize: "14px",
                  paddingLeft: "0",
                  paddingRight: "0",
                  justifyContent: "flex-end",
                }}
              >
                <div style={{ marginRight: "5px" }}>{`Total Story points`}</div>
                <Badge appearance="primary">
                  <div style={{ padding: "2px" }}>{userStoryPoints}</div>
                </Badge>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Card>
    </Card>
  );
};

export default InsightsComponent;
