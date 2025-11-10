import React, { useState } from "react";
import MessageInput from "../components/MessageInput.js";

function Upload() {
  const [aiReply, setAiReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (text) => {
    setAiReply("");    
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage: text }),
      });

      const data = await response.json();

      if (response.ok) {
        setAiReply(data.reply);
      } else {
        console.error("API error:", data.error);
        setAiReply("Error: " + data.error);
      }
    } catch (err) {
      console.error("Network error:", err);
      setAiReply("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload Documents</h1>
      <p>Uploading documents and other information will be done here.</p>

      <div style={{ marginTop: "20px" }}>
        <h2>Send a Message</h2>
        <MessageInput onSend={handleSendMessage} />
        {!loading && aiReply && (
          <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc" }}>
            <strong>AI Reply:</strong> {aiReply}
          </div>
        )}
        {loading && (
          <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc" }}>
            <strong>Loading...</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
