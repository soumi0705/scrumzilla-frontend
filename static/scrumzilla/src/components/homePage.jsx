import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import { userAllocationHomePage } from "./mocks/mockData";
import IssuesComponent from "./issuesComponent";
import InsightsComponent from "./insightsComponent";
import MoreIcon from "@atlaskit/icon/glyph/more";
import Button from "@atlaskit/button";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import ProgressDisplay from "./progressDisplay";
import { percentageOfTasks } from "./helpers/percentageOfTasks";
import { useLocation } from "react-router";
import "./homePage.css";

const HomePage = (props) => {
  const [userEmpData, setEmpData] = useState();
  let location = useLocation();
  useEffect(() => {
    setEmpData(userAllocationHomePage); //API
    console.log('Gets fired again');
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
  const userInsights = !!userEmpData?.root?.usersInsights
    ? userEmpData?.root?.usersInsights
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
            <Col xs={7} sm={5}>
              <ProgressDisplay
                emphasized
                issueDone={issueDone}
                issueTodo={issueTodo}
                issueProgress={issueProgress}
              />
            </Col>
            <Col xs={12} sm={4}>
              <DropdownMenu
                trigger={({ triggerRef, ...props }) => (
                  <Button
                    {...props}
                    className="float-end mx-2"
                    iconBefore={<MoreIcon label="more" />}
                    ref={triggerRef}
                  />
                )}
              >
                <DropdownItemGroup>
                  {/* <DropdownItem description="Previous versions are saved">
                    Edit
                  </DropdownItem> */}
                  <DropdownItem>Settings</DropdownItem>
                  {/* <DropdownItem>Clone</DropdownItem> */}
                </DropdownItemGroup>
              </DropdownMenu>
              <Button className="float-end">Daily Standup</Button>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xs={12}>
              <IssuesComponent issueList={issueList} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Col xs={12}>
              <InsightsComponent userInsights={userInsights} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
