import React from "react";
import { Table, Button } from "reactstrap";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";
import "./issueTable.css";
import { percentageOfTasks } from "./helpers/percentageOfTasks";

const IssueModalTable = (props) => {
  const { recommendations } = props ?? {};
  const totalLabelScore = recommendations?.reduce(
    (userA, userB) => userA.labelScore + userB.labelScore
  );
  return (
    <Table borderless responsive className="text-start">
      <thead>
        <tr>
          <th>Contributor</th>
          <th>Issues Assigned</th>
          <th className="text-center">Story Point</th>
          <th>Label Score</th>
          <th>Remark</th>
          <th>Assign</th>
        </tr>
      </thead>
      <tbody>
        {recommendations?.map((user, index) => {
          const labelScore =
            totalLabelScore === 0
              ? 0
              : percentageOfTasks(totalLabelScore, user?.labelScore);
          return (
            <tr key={index}>
              <td>
                <div className="d-flex align-items-center">
                  <Avatar
                    appearance="circle"
                    src={user?.avatarUrl}
                    name={user?.displayName}
                    size={"medium"}
                  />
                  <div
                    className="ms-2"
                    style={{
                      overflow: "hidden",
                      whiteSpace: "pre",
                      textOverflow: "ellipsis",
                      maxWidth: "150px",
                    }}
                  >
                    {user?.displayName}
                  </div>
                </div>
              </td>
              <td>
                <Badge appearance="default">{user?.progress?.total}</Badge>
              </td>
              <td className="text-center">
                <Badge appearance="primary">
                  {user?.storypoint?.sprintTotal}
                </Badge>
              </td>
              <td className="text-center">{`${labelScore}%`}</td>
              <td>
                <Lozenge>{`Remark`}</Lozenge>
              </td>
              <td>
                <Button
                  style={{
                    backgroundColor: "#0052cc",
                    padding: "3px 10px",
                    fontSize: "inherit",
                  }}
                  onClick={(e) => {
                    console.log(`Clicked`);
                  }}
                >
                  Set as Assignee
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default IssueModalTable;
