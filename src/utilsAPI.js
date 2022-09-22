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