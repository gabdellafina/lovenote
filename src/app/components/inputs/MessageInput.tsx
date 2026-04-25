"use client";
import { themes } from "@/lib/themes";

const MessageInput = ({ message, setMessage, subject, setSubject, theme }) => {
  const currentTheme = themes[theme];

  const isGoth = theme === "goth";

  const textColor = isGoth ? "text-gray-300" : "text-gray-700";

  return (
    <div className="pt-4 pb-0 border-b border-white/10">
      
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="I miss you..."
        className={`w-full p-4 rounded-t-2xl border focus:outline-none
          ${currentTheme.ui.card}
          ${textColor}
        `}
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
        className={`w-full h-40 p-4 rounded-b-2xl border resize-none focus:outline-none
          ${currentTheme.ui.card}
          ${textColor}
        `}
      />

    </div>
  );
};

export default MessageInput;