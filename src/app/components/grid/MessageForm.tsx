"use client";
import { Card } from "../ui/Card";
import { Input, MessageInput } from "../inputs";
import { themes, ThemeKey } from "@/lib/themes";
import Toggle from "../ui/Toggle";
import { useState } from "react";

interface MessageFormProps {
  message: string;
  setMessage: (value: string) => void;
  theme: ThemeKey;
  subject: string;
  setSubject: (value: string) => void;
  setIsAnonymous: (value: boolean) => void;
  isAnonymous: boolean;
  email: string;
  setEmail: (value: string) => void;
  name: string;
  setName: (value: string) => void;
}

const MessageForm = ({message,setMessage,theme,subject,setSubject,setIsAnonymous,isAnonymous,email,setEmail,name,setName,}: MessageFormProps) => {

  const handleSend = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email, subject, message, theme, name, isAnonymous }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) throw new Error("Erro ao enviar");

      setSent(true);
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar 💔");
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const currentTheme = themes[theme];

  return (
    <Card theme={theme}>
      <h2 className="text-2xl italic font-semibold text-gray-800 mb-2">
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
        disabled={isAnonymous}
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        theme={theme}
      />
      <h2 className="text-sm mt-4 mb-2 text-gray-800">Send anonymously</h2>
      <Toggle enabled={isAnonymous} setEnabled={setIsAnonymous} />
      <button
        onClick={handleSend}
        className={`
          w-full p-3 rounded-xl mt-4 transition relative overflow-hidden
          ${currentTheme.ui.button}
          shadow-lg hover:shadow-xl hover:scale-[1.02]
          ${currentTheme.ui.glow}
        `}
      >
        {loading ? "Sending..." : sent ? "Sent 💖" : "Send 💌"}
      </button>
    </Card>
  );
};

export default MessageForm;