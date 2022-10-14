import React from "react";
import { Table, Button } from "reactstrap";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";

const IssueTable = (props) => {
  return (
    <Table borderless responsive className="text-start">
      <thead>
        <tr>
          <th>Type</th>
          <th>Summary</th>
          <th className="text-center">Priority</th>
          <th className="text-center">Story Point</th>
          <th>Label</th>
          <th>Reporter</th>
          <th>Assign</th>
        </tr>
      </thead>
      <tbody>
        {props?.issueList?.map((issue, index) => {
          return (
            <tr key={index}>
              <td>
                <img
                  src={issue?.issuetype?.iconUrl}
                  alt={`${issue?.issuetype?.name}`}
                />
              </td>
              <td>{issue?.summary}</td>
              <td className="text-center">
                <img
                  src={issue?.priority?.iconUrl}
                  alt={`${issue?.priority?.name}`}
                />
              </td>
              <td className="text-center">
                <Badge appearance="primary">{issue?.storypoint}</Badge>
              </td>
              <td>
                {issue.labels.map((label, index) => (
                  <Lozenge key={index}>{label}</Lozenge>
                ))}
              </td>
              <td className="d-flex align-items-center">
                <Avatar
                  appearance="circle"
                  src={issue?.reporter?.avatarUrls["16x16"]}
                  name={issue?.reporter?.displayName}
                  size={"small"}
                />
                {issue?.reporter?.displayName}
              </td>
              <td>
                <Button
                  style={{
                    backgroundColor: "#0052cc",
                    padding: "3px 10px",
                    fontSize: "inherit",
                  }}
                >
                  Set Assignee
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default IssueTable;
