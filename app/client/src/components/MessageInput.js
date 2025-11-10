import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Box } from "@mui/material";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() === "") return;
    onSend(message);
    setMessage("");
  };

  return (
    <Box display="flex" gap={1} alignItems="center">
      <TextField
        label="Type a message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Send
      </Button>
    </Box>
  );
};

MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired
};

export default MessageInput;
