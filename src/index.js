import Resolver from "@forge/resolver";
import { fetchUsers } from "./utilsAPI";
import * as fs from 'fs';
const resolver = new Resolver();

resolver.define("getText", (req) => {
  console.log(req);

  return "Hello, world! this is World";
});

resolver.define("doCalculation",async ({ payload, context }) => {
  console.log(payload);
  const userData = await fetchUsers(context.accountId);
  console.log(userData);
  return userData;
});

export const handler = resolver.getDefinitions();
