import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: {
        light: "https://oloid.cloud/assets/images/website-logo.svg",
        dark: "https://oloid.cloud/assets/images/website-logo.svg",
      },
      alt: "Oloid",
      width: "130px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            {
              type: "link",
              icon: "square-library",
              label: "Reports API",
              to: "/api/reports",
            },
            {
              type: "link",
              icon: "key",
              label: "Login API",
              to: "/api/auth",
            },
          ],
        },
        {
          type: "category",
          label: "Applications",
          icon: "sparkles",
          items: [
            "/applications",
            {
              type: "link",
              icon: "key",
              label: "Application API",
              to: "/api/applications",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          icon: "sparkles",
          items: [
            "/connections",
            {
              type: "link",
              icon: "key",
              label: "Connection API",
              to: "/api/connections",
            },
          ],
        },
        {
          type: "category",
          label: "Credentials",
          icon: "sparkles",
          items: [
            "/credentials",
            {
              type: "link",
              icon: "key",
              label: "Credentials API",
              to: "/api/credentials",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          icon: "sparkles",
          items: [
            "/endpoints",
            {
              type: "link",
              icon: "key",
              label: "Endpoints API",
              to: "/api/endpoints",
            },
          ],
        },
        {
          type: "category",
          label: "Groups",
          icon: "sparkles",
          items: [
            "/groups",
            {
              type: "link",
              icon: "key",
              label: "Groups API",
              to: "/api/groups",
            },
          ],
        },
        {
          type: "category",
          label: "Settings",
          icon: "sparkles",
          items: [
            "/settings",
            {
              type: "link",
              icon: "key",
              label: "Settings API",
              to: "/api/settings",
            },
          ],
        },
        {
          type: "category",
          label: "Tenant Settings",
          icon: "sparkles",
          items: [
            "/tenantsettings",
            {
              type: "link",
              icon: "key",
              label: "Tenant Settings API",
              to: "/api/tenantsettings",
            },
          ],
        },
        {
          type: "category",
          label: "Transactions",
          icon: "sparkles",
          items: [
            "/transactions",
            {
              type: "link",
              icon: "key",
              label: "Transactions API",
              to: "/api/transactions",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          icon: "sparkles",
          items: [
            "/users",
            {
              type: "link",
              icon: "key",
              label: "Users API",
              to: "/api/users",
            },
          ],
        },
        // {
        //   type: "category",
        //   label: "Useful Links",
        //   collapsible: false,
        //   icon: "link",
        //   items: [
        //     {
        //       type: "link",
        //       icon: "book",
        //       label: "Zudoku Docs",
        //       to: "https://zudoku.dev/docs/",
        //     },
        //   ],
        // },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/rds-reports.yaml",
      path: "/api/reports",
    },
    {
      type: "file",
      input: "./apis/logins.yaml",
      path: "/api/auth",
    },
    {
      type: "file",
      input: "./apis/applications.yaml",
      path: "/api/applications",
      categories: [{ label: "General", tags: ["/applications"] }],
    },
    {
      type: "file",
      input: "./apis/connections.yaml",
      path: "/api/connections",
      categories: [{ label: "General", tags: ["/connections"] }],
    },
    {
      type: "file",
      input: "./apis/credentials.yaml",
      path: "/api/credentials",
      categories: [{ label: "General", tags: ["/credentials"] }],
    },
    {
      type: "file",
      input: "./apis/endpoints.yaml",
      path: "/api/endpoints",
      categories: [{ label: "General", tags: ["/endpoints"] }],
    },
    {
      type: "file",
      input: "./apis/groups.yaml",
      path: "/api/groups",
      categories: [{ label: "General", tags: ["/groups"] }],
    },
    {
      type: "file",
      input: "./apis/settings.yaml",
      path: "/api/settings",
      categories: [{ label: "General", tags: ["/settings"] }],
    },
    {
      type: "file",
      input: "./apis/tenantsettings.yaml",
      path: "/api/tenantsettings",
      categories: [{ label: "General", tags: ["/tenantsettings"] }],
    },
    {
      type: "file",
      input: "./apis/transactions.yaml",
      path: "/api/transactions",
      categories: [{ label: "General", tags: ["/transactions"] }],
    },
    {
      type: "file",
      input: "./apis/users.yaml",
      path: "/api/users",
      categories: [{ label: "General", tags: ["/users"] }],
    },
  ],
};

export default config;
