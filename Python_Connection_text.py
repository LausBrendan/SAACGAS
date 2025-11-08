import boto3
import json

# Create the client for Bedrock Agent Runtime
client = boto3.client("bedrock-agent-runtime", region_name="us-west-2")

# Invoke your Bedrock agent using its ID and Alias ID
response = client.invoke_agent(
    agentId="GT4MHPUA8V",                 # Your agent ID
    agentAliasId="SDMJWSSBKZ",    # Replace this with your alias ID
    sessionId="local-session-1",
    inputText="Hello agent, what can you do?"
)

# Stream the response
for event in response["completion"]:
    if "chunk" in event:
        print(event["chunk"]["bytes"].decode("utf-8"), end="")
