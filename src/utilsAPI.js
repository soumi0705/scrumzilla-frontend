import api, { route } from "@forge/api";

export const fetchUsers = async (accountID) => {
    const response = await api.asApp().requestJira(route`/rest/api/3/users`, {
        headers: {
          'Accept': 'application/json'
        }
      });
  
    const data = await response.json();
    return data;
  };

  export const testIssuesQuery = async () => {
    let bodyData  = `{
      "expand": [
        "names",
        "schema",
        "operations"
      ],
      "jql": "project = KB",
      "maxResults" : 15
    }`;
    
    const response = await api.asApp().requestJira(route`/rest/api/3/search`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: bodyData
    });
    console.log(response);
    const data = await response.json();
    return data;
  };

  export const fetchIssuesQuery = async () => {
    const response = await api.asApp().requestJira(route`/rest/api/3/events`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
    return data;
  };

  export const fetchByRoute = async (path) => {
    const response = await api.asApp().requestJira(route`${path}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
    return data;
  };