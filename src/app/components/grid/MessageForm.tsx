"use client";
import { useState } from "react";
import { Card } from "../ui/Card";
import { Input, MessageInput } from "../inputs";
import { themes } from "@/lib/themes";

const MessageForm = ({ message, setMessage, theme, subject, setSubject }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const currentTheme = themes[theme];

  return (
    <Card theme={theme}>
      <h2 className="text-2xl italic font-semibold text-gray-800 mb-2 ">
        Your Message
      </h2>
      <MessageInput
        message={message}
        setMessage={setMessage}
        subject={subject}
        setSubject={setSubject}
        theme={theme}
      />
      <p className="text-sm text-gray-800 mt-2">
        {message.length} caracteres / 1000
      </p>
      <h2 className="text-sm text-gray-800 mt-4 mb-2">To:</h2>
      <Input
        placeholder="Your love's email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        theme={theme}
      />
      <h2 className="text-sm text-gray-800 mt-4 mb-2">From:</h2>
      <Input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        theme={theme}
      />
      <button
        className={`
            w-full p-3 rounded-xl mt-4 transition relative overflow-hidden
            ${currentTheme.ui.button}
            shadow-lg hover:shadow-xl
            hover:scale-[1.02]
            ${currentTheme.ui.glow}
          `}
      >
        Continue →
      </button>
    </Card>
  );
};

export default MessageForm;
