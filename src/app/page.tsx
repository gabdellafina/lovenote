"use client";
import Header from "@/app/components/Header";
import { MessageForm, Preview, Themes } from "./components/grid";
import { useState } from "react";
import { themes } from "@/lib/themes";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("blue");
  const currentTheme = themes[theme];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        key={theme}
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentTheme.home.background} `}
      >
        <div className="relative z-10 text-white">
          <Header />
          <main className="max-h-48 grid grid-cols-3 gap-6 max-w-7xl mx-auto p-10">
            <MessageForm
              theme={theme}
              subject={subject}
              setSubject={setSubject}
              message={message}
              setMessage={setMessage}
            />

            <Preview message={message} theme={theme} subject={subject} />

            <Themes theme={theme} setTheme={setTheme} />
          </main>
        </div>
      </div>
    </div>
  );
}
