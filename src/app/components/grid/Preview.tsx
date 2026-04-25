'use client';

import { Card } from "../ui/Card";
import { themes } from "@/lib/themes";

const Preview = ({ message, theme, subject }) => {
  const currentTheme = themes[theme];
  const isGoth = theme === "goth";

  const bgColor = isGoth ? "bg-gray-800" : "bg-white";

  const emojis = currentTheme.preview.emojiSet;

  return (
    <Card theme={theme}>
      <h2 className="text-2xl italic font-semibold text-gray-800 mb-4">
        Preview
      </h2>

      <div className="bg-gray-200 rounded-xl overflow-hidden shadow-inner">

        <div className="text-sm text-gray-600 px-6 pt-4 pb-2">
          <p>De: remetente@exemplo.com</p>
          <p>Para: destinatario@email.com</p>
          <p>
            Assunto: {currentTheme.emoji} {subject || "i miss you"}
          </p>
        </div>

        <div className={`text-center py-3 font-serif text-lg ${currentTheme.preview.header}`}>
          {currentTheme.emoji} LoveNote
        </div>

        <div className="px-6 py-6 text-center">

          <p className="text-xl mb-2">
            {emojis[0]} {emojis[1]} {emojis[2]}
          </p>

          <div className={`rounded-2xl p-6 max-w-md mx-auto border ${currentTheme.preview.border}  ${bgColor}`}>

            <h4 className={`font-serif text-xl italic mb-3 ${currentTheme.preview.textPrimary}`}>
              {currentTheme.emoji} {subject || "i miss you"}
            </h4>

            <hr className={`mb-4 ${currentTheme.preview.divider}`} />

            <p className={`text-sm whitespace-pre-line mb-4 ${currentTheme.preview.textSecondary}`}>
              {message || "write your message..."}
            </p>

            <hr className={`mb-4 ${currentTheme.preview.divider}`} />
            <p className={`text-sm italic ${currentTheme.preview.textSecondary}`}>
              With love,
            </p>

            <p className={`font-semibold ${currentTheme.preview.textPrimary}`}>
              your name
            </p>

            <p className="mt-2 text-xl">
              {emojis[0]}
            </p>
          </div>

          <p className={`text-xs mt-4 ${currentTheme.preview.footer}`}>
            sent with love from LoveNote
          </p>

        </div>
      </div>
    </Card>
  );
};

export default Preview;