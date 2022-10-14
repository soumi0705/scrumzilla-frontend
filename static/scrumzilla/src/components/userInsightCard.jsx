import React from "react";
import { Col, Row, Card, CardTitle, CardBody } from "reactstrap";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";
import { percentageOfTasks } from "./helpers/percentageOfTasks";
import ProgressDisplay from "./progressDisplay";

const UserInsightCard = (props) => {
  const { userInsight, compareWith } = props ?? {};
  const { total, todo, progress } = userInsight?.progress ?? {};
  const userAssignmentStatus =
    userInsight?.storypoint?.remarkCompareWith[`${compareWith}`];
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
  );
};

export default UserInsightCard;
