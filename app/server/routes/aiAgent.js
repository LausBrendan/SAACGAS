import express from "express";
import dotenv from "dotenv";
import { BedrockAgentRuntimeClient, InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime";

dotenv.config();
const router = express.Router();

const client = new BedrockAgentRuntimeClient({
  region: process.env.AWS_REGION || "us-west-2",
});

router.post("/chat", async (req, res) => {
  try {
    const { userMessage } = req.body;
    if (!userMessage) return res.status(400).json({ error: "Missing userMessage" });

    const command = new InvokeAgentCommand({
      agentId: process.env.AWS_AGENT_ID,
      agentAliasId: process.env.AWS_AGENT_ALIAS_ID,
      sessionId: "local-session-1",
      inputText: userMessage,
    });

    const response = await client.send(command);

    let fullReply = "";
    for await (const chunkEvent of response.completion) {
      if (chunkEvent.chunk) {
        fullReply += new TextDecoder().decode(chunkEvent.chunk.bytes);
      }
    }

    res.json({ reply: fullReply.trim() });
  } catch (err) {
    console.error("Error calling Bedrock Agent:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
