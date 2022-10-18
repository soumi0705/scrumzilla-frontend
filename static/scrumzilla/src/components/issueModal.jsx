import React, { useEffect, useState } from "react";
import Button from "@atlaskit/button";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";
import Select from "@atlaskit/select";
import { Col, Row, Card } from "reactstrap";
import styled from "styled-components";
import IssueModalTable from "./IssueModalTable";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import { Link, useParams } from "react-router-dom";
import { issueModalData } from "./mocks/mockData";
import { ReactRenderer } from "@atlaskit/renderer";
import "./issueModal.css";
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

const DescriptionBox = styled.div`
  padding: 12px;
  margin-top: 10px;
`;

const IssueModal = () => {
  const [issueData, setIssueData] = useState();
  const { issue, recommendations } = issueData?.root ?? {};
  const [compareWith, setCompareWith] = useState({
    label: "All Users",
    value: "allUser",
  });
  const { issueID } = useParams();
  useEffect(() => {
    setIssueData(issueModalData);
  }, []);
  return (
    <div style={{ width: "95%" }}>
      <Button
        style={{ fontSize: "14px", paddingLeft: "0px" }}
        iconBefore={<ArrowLeftIcon label="" size="medium" />}
        appearance="subtle"
        component={Link}
        to={"/"}
      >
        Back
      </Button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%" }}>
          <TitleRow>{issue?.summary}</TitleRow>

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
              <IssueHeaders>Description</IssueHeaders>
            </Col>
            <Col xs={12} md={6}>
              {issue?.description ? (
                <DescriptionBox>
                  <ReactRenderer document={issue?.description} />
                </DescriptionBox>
              ) : (
                "No Description"
              )}
            </Col>
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
                  <Row>
                    <Col
                      xs={12}
                      md={5}
                      className={
                        "d-flex offset-md-7 align-items-center justify-content-end"
                      }
                    >
                      {`Compare with :`}
                      <Select
                        inputId="compare-with-selector"
                        onChange={(value) => setCompareWith(value)}
                        value={compareWith}
                        className="compare-select"
                        classNamePrefix="user-select"
                        options={[
                          { label: "User Data", value: "userPreviousData" },
                          { label: "All Users", value: "allUser" },
                          { label: "Sprint Limit", value: "sprintLimit" },
                        ]}
                      />
                    </Col>
                  </Row>
                  <IssueModalTable
                    recommendations={recommendations}
                    compareWith={compareWith.value}
                  />
                </Card>
              </Card>
            </Col>
          </IssueRow>
        </div>
      </div>
    </div>
  );
};

export default IssueModal;
