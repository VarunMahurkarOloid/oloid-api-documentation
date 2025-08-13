import type { ZudokuConfig } from "zudoku";
import Welcome from "./Welcome";

const config: ZudokuConfig = {
  theme: {
    light: {
      background: "#ffffff",
      foreground: "#020817",
      card: "#ffffff",
      cardForeground: "#020817",
      popover: "#ffffff",
      popoverForeground: "#020817",
      primary: "#0284c7",
      primaryForeground: "#ffffff",
      secondary: "#f1f5f9",
      secondaryForeground: "#020817",
      muted: "#f1f5f9",
      mutedForeground: "#64748b",
      accent: "#f1f5f9",
      accentForeground: "#020817",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
      border: "#e2e8f0",
      input: "#e2e8f0",
      ring: "#0284c7",
      radius: "0.5rem",
    },
    dark: {
      background: "#020817",
      foreground: "#f8fafc",
      card: "#020817",
      cardForeground: "#f8fafc",
      popover: "#020817",
      popoverForeground: "#f8fafc",
      primary: "#0ea5e9",
      primaryForeground: "#f8fafc",
      secondary: "#1e293b",
      secondaryForeground: "#f8fafc",
      muted: "#1e293b",
      mutedForeground: "#94a3b8",
      accent: "#1e293b",
      accentForeground: "#f8fafc",
      destructive: "#ef4444",
      destructiveForeground: "#f8fafc",
      border: "#1e293b",
      input: "#1e293b",
      ring: "#0ea5e9",
      radius: "0.5rem",
    },
  },
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
      label: "API Reference",
      icon: "code",
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
      type: "custom-page",
      path: "/",
      element: <Welcome />,
    },
    {
      type: "category",
      label: "Changelog",
      icon: "megaphone",
      items: ["/welcome"],
    },
    {
      type: "category",
      label: "API Reference Advanced",
      icon: "user-lock",
      items: ["/logins"],
    },
    // {
    //   type: "link",
    //   to: "/api",
    //   label: "API Reference",
    // },
  ],
  // redirects: [{ from: "/", to: "/introduction" }],
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
