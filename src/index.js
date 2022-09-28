import Resolver from "@forge/resolver";
import { testIssuesQuery, fetchIssuesQuery, fetchUsers, fetchByRoute } from "./utilsAPI";
import * as fs from 'fs';
const resolver = new Resolver();

resolver.define("getText", (req) => {
  console.log(req);

  return "Hello, world! this is World";
});

resolver.define("doCalculation",async ({ payload, context }) => {
  console.log(payload);
  const issueData = await testIssuesQuery();
  console.log(issueData);
  console.log('Issue Data:', await fetchByRoute(issueData.issues[0].self));
  return issueData;
});

export const handler = resolver.getDefinitions();
