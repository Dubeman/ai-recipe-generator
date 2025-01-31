import { defineBackend } from "@aws-amplify/backend";
import { data } from "./data/resource";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { auth } from "./auth/resource";

const backend = defineBackend({
  auth,
  data,
});

/**
 * Add a Bedrock data source to the backend. This is used to call the Bedrock model. We use the
 * GraphQL API to call the Bedrock model because it's the easiest way to get the data from the model.
 */

const bedrockDataSource = backend.data.resources.graphqlApi.addHttpDataSource(
  "bedrockDS",
  "https://bedrock-runtime.us-east-1.amazonaws.com",
  {
    authorizationConfig: {
      signingRegion: "us-east-1",
      signingServiceName: "bedrock",
    },
  }
);

/**
 * Grant the Bedrock data source access to the Bedrock model.
 */

bedrockDataSource.grantPrincipal.addToPrincipalPolicy(
  new PolicyStatement({
    resources: [
      "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0",
    ],
    actions: ["bedrock:InvokeModel"],
    
  })
);