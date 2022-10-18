import React from "react";
import { Col, Row, Card, CardTitle, CardBody } from "reactstrap";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";
import Tooltip from "@atlaskit/tooltip";
import { percentageOfTasks } from "./helpers/percentageOfTasks";
import ProgressDisplay from "./progressDisplay";
import "./userInsightsCard.css";

const UserInsightCard = (props) => {
  const { userInsight, compareWith } = props ?? {};
  const { total, todo, progress } = userInsight?.progress ?? {};
  const userAssignmentStatus =
    userInsight?.storypoint?.remarkCompareWith[`${compareWith}`];
  const assignmentSeverity = userAssignmentStatus.remark.toUpperCase().includes("OVER")
    ? true
    : false;
  const userTodo = percentageOfTasks(total, todo);
  const userProgress = percentageOfTasks(total, progress);
  const userDone = total === 0 ? 0 : 100 - (userTodo + userProgress);
  const userTotal = total;
  const userStoryPoints = userInsight?.storypoint?.sprintTotal;
  return (
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
            <div className="ms-2 md-d-block">{userInsight?.displayName}</div>
          </CardTitle>
        </Col>
        <Col xs={4}>
          <div className="float-end">
            <Tooltip
              position="bottom-start"
              content={userAssignmentStatus?.message}
            >
              <Lozenge appearance={assignmentSeverity ? "removed" : "success"}>
                {userAssignmentStatus?.remark}
              </Lozenge>
            </Tooltip>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="text-start ms-2 d-flex" style={{ fontSize: "10px" }}>
            <div
              style={{ color: "#0052cc", marginRight: "2px" }}
            >{`${userTotal}`}</div>
            {`Issues Assigned`}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <ProgressDisplay
            issueDone={userDone}
            issueTodo={userTodo}
            issueProgress={userProgress}
          />
        </Col>
        <Col xs={6} md={5} className="offset-md-1 d-flex align-items-end">
          <CardBody
            className="d-flex text-end"
            style={{
              fontSize: "14px",
              paddingLeft: "0",
              paddingRight: "0",
              justifyContent: "flex-end",
              width: "inherit",
            }}
          >
            <div
              style={{
                marginRight: "5px",
                overflow: "hidden",
                whiteSpace: "pre",
                textOverflow: "ellipsis",
              }}
            >{`Total Story points`}</div>
            <Badge appearance="primary">
              <div style={{ padding: "2px" }}>{userStoryPoints}</div>
            </Badge>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default UserInsightCard;
