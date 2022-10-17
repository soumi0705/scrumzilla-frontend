import React, { useEffect, useState } from "react";
import Button from "@atlaskit/button";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";
import { Col, Row, Card } from "reactstrap";
import styled from "styled-components";
import IssueModalTable from "./IssueModalTable";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import { Link, useParams } from "react-router-dom";
import { issueModalData } from "./mocks/mockData";

const IssueHeaders = styled.div`
  margin-right: 20px;
  font-weight: 600;
`;

const IssueRow = styled(Row)`
  margin-top: 20px;
`;
const TitleRow = styled.div`
  font-size: 20px;
  font-weight: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IssueModal = () => {
  const [issueData, setIssueData] = useState();
  const { issue, recommendations } = issueData?.root ?? {};
  const { issueID } = useParams();
  useEffect(() => {
    setIssueData(issueModalData);
  }, []);
  return (
    <div style={{ width: "95%" }}>
      <TitleRow>
        {issue?.summary}
        <Button
          style={{fontSize: "14px"}}
          iconBefore={<ArrowLeftIcon label="" size="medium" />}
          appearance="subtle"
          component={Link}
          to={"/"}
        >
          Back
        </Button>
      </TitleRow>

      <IssueRow>
        <Col xs={6} className="d-flex align-items-center">
          <IssueHeaders>Type</IssueHeaders>
          <img
            src={issue?.issuetype?.iconUrl}
            alt={`${issue?.issuetype?.name}`}
          />
        </Col>
        <Col xs={6} className="d-flex align-items-center">
          <IssueHeaders>Priority</IssueHeaders>
          <img
            src={issue?.priority?.iconUrl}
            alt={`${issue?.priority?.name}`}
          />
        </Col>
      </IssueRow>
      <IssueRow>
        <Col xs={12}>
          <IssueHeaders>Summary</IssueHeaders>
        </Col>
        <Col xs={12}>{issue?.summary}</Col>
      </IssueRow>
      <IssueRow>
        <Col xs={6} className="d-flex align-items-center">
          <IssueHeaders>Reporter</IssueHeaders>
          <Avatar
            appearance="circle"
            src={issue?.reporter?.avatarUrls["16x16"]}
            name={issue?.reporter?.displayName}
            size={"small"}
          />
          <div style={{ marginLeft: "10px" }}>
            {issue?.reporter?.displayName}
          </div>
        </Col>
        <Col xs={6} className="d-flex align-items-center">
          <IssueHeaders>Story Point</IssueHeaders>

          <Badge appearance="primary">{issue?.storypoint}</Badge>
        </Col>
      </IssueRow>
      <IssueRow>
        <Col xs={12} className="d-flex align-items-center">
          <IssueHeaders>Labels</IssueHeaders>
          <div className="d-flex">
            {issue?.labels?.map((label, index) => (
              <Lozenge key={index}>{label}</Lozenge>
            ))}
          </div>
        </Col>
      </IssueRow>
      <IssueRow>
        <Col xs={12}>
          <Card
            style={{
              backgroundColor: "#ebecf0",
              border: "5px solid #ebecf0",
              borderRadius: "10px",
            }}
            className="insightsComponent"
          >
            <div style={{ padding: "10px 5px" }}>
              Contributors ordered by Label-Score
            </div>
            <Card
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "13px",
              }}
            >
              <IssueModalTable recommendations={recommendations} />
            </Card>
          </Card>
        </Col>
      </IssueRow>
    </div>
  );
};

export default IssueModal;
