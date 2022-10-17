import React from "react";
import IssueTable from "./issueTable";
import { Card } from "reactstrap";
const IssuesComponent = (props) => {
  return (
    <Card
      style={{
        backgroundColor: "#ebecf0",
        border: "5px solid #ebecf0",
        borderRadius: "10px",
      }}
      className = "issuesComponent"
    >
      <div className="heading">Issues</div>
      <Card
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "13px",
        }}
      >
        <IssueTable issueList={props.issueList} openModal={props.openModal}/>
      </Card>
    </Card>
  );
}

export default IssuesComponent;
