import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";

export const auth = betterAuth({
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "hca",
          clientId: import.meta.env.HCA_CLIENT_ID!,
          clientSecret: import.meta.env.HCA_CLIENT_SECRET!,
          discoveryUrl:
            "https://auth.hackclub.com/.well-known/openid-configuration",
          scopes: ["openid", "email", "profile", "slack_id"],
        },
      ],
    }),
  ],
});
