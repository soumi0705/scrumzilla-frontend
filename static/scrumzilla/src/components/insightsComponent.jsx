import React, { useState } from "react";
import { Col, Row, Card } from "reactstrap";
import Select from "@atlaskit/select";
import "./insightComponent.css";
import UserInsightCard from "./userInsightCard";

const InsightsComponent = (props) => {
  const [compareWith, setCompareWith] = useState({label: 'All Users', value: 'allUser'});
  const userInsightsArray = props?.userInsights;
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
            md={10}
            className={
              "d-flex offset-md-2 align-items-center justify-content-end"
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
        {userInsightsArray?.map((userInsight, index) => (
          <UserInsightCard
            key={index}
            userInsight={userInsight}
            compareWith={compareWith.value}
          />
        ))}
      </Card>
    </Card>
  );
};

export default InsightsComponent;
