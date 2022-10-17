export const userAllocationHomePage = {
  root: {
    sprintProgress: {
      total: 9,
      unassigned: 6,
      todo: 3,
      progress: 6,
      done: 0,
      sprintStorypoint: 31,
      assigned: 3,
    },
    usersInsights: [
      {
        accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
        displayName: "Kunal",
        avatarUrl:
          "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
        storypoint: {
          sprintTotal: 8,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Over Assigned",
              message: "Kunal is over assigned by 4 points.",
            },
            allUser: {
              remark: "Under Assigned",
              message: "Kunal is Under assigned by 8 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Kunal is Under assigned by 12 points.",
            },
          },
        },
        progress: {
          total: 2,
          todo: 1,
          done: 0,
          progress: 1,
        },
      },
      {
        accountId: "6326e30c14c6b4b221099d1f",
        displayName: "Soumitro Datta",
        avatarUrl:
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
        storypoint: {
          sprintTotal: 3,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 5 points.",
            },
            allUser: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 13 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 17 points.",
            },
          },
        },
        progress: {
          total: 1,
          todo: 0,
          done: 0,
          progress: 1,
        },
      },
    ],
    unAssignedIssues: [
      {
        id: "10025",
        key: "KB-26",
        summary: "Done : T7",
        description: null,
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
          id: "10004",
          description: "Bugs track problems or errors.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
          name: "Bug",
          subtask: false,
          avatarId: 10303,
          entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["aws"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10001",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "In Progress",
          id: "10001",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress",
          },
        },
        storypoint: 1,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=6326e30c14c6b4b221099d1f",
          accountId: "6326e30c14c6b4b221099d1f",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/32",
          },
          displayName: "Soumitro Datta",
          active: true,
          timeZone: "Asia/Calcutta",
          accountType: "atlassian",
        },
      },
      {
        id: "10024",
        key: "KB-25",
        summary: "Done : T6",
        description: null,
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10001",
          id: "10001",
          description: "Tasks track small, distinct pieces of work.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
          name: "Task",
          subtask: false,
          avatarId: 10318,
          entityId: "e679883c-7659-463e-a396-900ced8c2184",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["aws"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10000",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "To Do",
          id: "10000",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        storypoint: 5,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
      {
        id: "10020",
        key: "KB-21",
        summary: "review : issue : ticket 4",
        description: null,
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10001",
          id: "10001",
          description: "Tasks track small, distinct pieces of work.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
          name: "Task",
          subtask: false,
          avatarId: 10318,
          entityId: "e679883c-7659-463e-a396-900ced8c2184",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["frontend"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10000",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "To Do",
          id: "10000",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        storypoint: 2,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
      {
        id: "10019",
        key: "KB-20",
        summary: "progress: bug : ticket 3",
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "this is heading H2",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "this text is in bold and italic",
                  marks: [
                    {
                      type: "em",
                    },
                    {
                      type: "strong",
                    },
                  ],
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "this is google link",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "http://www.google.com",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "emoji",
                  attrs: {
                    shortName: ":grinning:",
                    id: "1f600",
                    text: "😀",
                  },
                },
                {
                  type: "text",
                  text: " ",
                },
              ],
            },
          ],
        },
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
          id: "10004",
          description: "Bugs track problems or errors.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
          name: "Bug",
          subtask: false,
          avatarId: 10303,
          entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["aws"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10001",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "In Progress",
          id: "10001",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress",
          },
        },
        storypoint: 4,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
      {
        id: "10018",
        key: "KB-19",
        summary: "todo : bug : ticket 2",
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "this is desc…",
                },
              ],
            },
          ],
        },
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
          id: "10004",
          description: "Bugs track problems or errors.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
          name: "Bug",
          subtask: false,
          avatarId: 10303,
          entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["database"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10003",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "Review",
          id: "10003",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        storypoint: 6,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
      {
        id: "10017",
        key: "KB-18",
        summary: "todo : ticket 1",
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "this is desc.",
                },
              ],
            },
          ],
        },
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10001",
          id: "10001",
          description: "Tasks track small, distinct pieces of work.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
          name: "Task",
          subtask: false,
          avatarId: 10318,
          entityId: "e679883c-7659-463e-a396-900ced8c2184",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: [],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10003",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "Review",
          id: "10003",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        storypoint: 2,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
    ],
  },
};

export const issueModalData = {
  root: {
    issue: {
      id: "10025",
      key: "KB-26",
      summary: "Done : T7",
      description: null,
      issuetype: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
        id: "10004",
        description: "Bugs track problems or errors.",
        iconUrl:
          "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
        name: "Bug",
        subtask: false,
        avatarId: 10303,
        entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
        hierarchyLevel: 0,
      },
      project: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
        id: "10000",
        key: "KB",
        name: "soumi ka board",
        projectTypeKey: "software",
        simplified: true,
        avatarUrls: {
          "48x48":
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
          "24x24":
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
          "16x16":
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
          "32x32":
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
        },
      },
      priority: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
        iconUrl:
          "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
        name: "Medium",
        id: "3",
      },
      labels: ["aws"],
      status: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10001",
        description: "",
        iconUrl:
          "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
        name: "In Progress",
        id: "10001",
        statusCategory: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/4",
          id: 4,
          key: "indeterminate",
          colorName: "yellow",
          name: "In Progress",
        },
      },
      storypoint: 1,
      reporter: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=6326e30c14c6b4b221099d1f",
        accountId: "6326e30c14c6b4b221099d1f",
        avatarUrls: {
          "48x48":
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
          "24x24":
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/24",
          "16x16":
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/16",
          "32x32":
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/32",
        },
        displayName: "Soumitro Datta",
        active: true,
        timeZone: "Asia/Calcutta",
        accountType: "atlassian",
      },
    },
    recommendations: [
      {
        accountId: "6326e30c14c6b4b221099d1f",
        displayName: "Soumitro Datta",
        avatarUrl:
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
        storypoint: {
          sprintTotal: 3,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 5 points.",
            },
            allUser: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 3 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 17 points.",
            },
          },
        },
        progress: {
          total: 1,
          todo: 0,
          done: 0,
          progress: 1,
        },
        labelScore: 4,
      },
      {
        accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
        displayName: "Kunal",
        avatarUrl:
          "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
        storypoint: {
          sprintTotal: 8,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Over Assigned",
              message: "Kunal is over assigned by 4 points.",
            },
            allUser: {
              remark: "Over Assigned",
              message: "Kunal is over assigned by 2 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Kunal is Under assigned by 12 points.",
            },
          },
        },
        progress: {
          total: 2,
          todo: 1,
          done: 0,
          progress: 1,
        },
        labelScore: 1,
      },
    ],
  },
};
