"use client";
import Header from "@/app/components/Header";
import { MessageForm, Preview, Themes } from "./components/grid";
import { useState } from "react";
import { themes, ThemeKey } from "@/lib/themes";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState<ThemeKey>("blue");
  const currentTheme = themes[theme];
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        key={theme}
        className={`absolute inset-0 transition-all duration-700 ${currentTheme.home.background}`}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {currentTheme.home.blobs.map((blob, i) => (
          <div
            key={i}
            className={`blob-${i + 1} absolute rounded-full blur-3xl opacity-40 ${blob.color} ${blob.size} ${blob.position}`}
          />
        ))}
      </div>

      <div className="relative z-10 text-white">
        <Header />
        <main className="max-h-48 grid grid-cols-3 gap-6 max-w-7xl mx-auto p-10">
          <MessageForm
            theme={theme}
            subject={subject}
            setSubject={setSubject}
            message={message}
            setMessage={setMessage}
            setIsAnonymous={setIsAnonymous}
            isAnonymous={isAnonymous}
            email={email}
            setEmail={setEmail}
            name={name}
            setName={setName}
          />
          <Preview
            message={message}
            theme={theme}
            subject={subject}
            isAnonymous={isAnonymous}
            email={email}
            name={name}
          />
          <Themes theme={theme} setTheme={setTheme} />
        </main>
      </div>
    </div>
  );
}