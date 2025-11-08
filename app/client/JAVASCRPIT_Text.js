import { BedrockAgentRuntimeClient, InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime";

const client = new BedrockAgentRuntimeClient({ region: "us-west-2" });

const command = new InvokeAgentCommand({
  agentId: "GT4MHPUA8V",
  agentAliasId: "SDMJWSSBKZ",  
  sessionId: "local-test-1",
  inputText: "Hello agent!"
});

const response = await client.send(command);
for await (const chunkEvent of response.completion) {
  if (chunkEvent.chunk) {
    process.stdout.write(new TextDecoder().decode(chunkEvent.chunk.bytes));
  }
}
