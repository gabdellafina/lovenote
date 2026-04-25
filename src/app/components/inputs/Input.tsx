import { themes, ThemeKey } from "@/lib/themes";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme: ThemeKey;
}

const Input = ({ theme, ...props }: InputProps) => {
  const currentTheme = themes[theme];
  const isGoth = theme === "goth";
  const textColor = isGoth ? "text-gray-300" : "text-gray-700";

  return (
    <input
      className={`w-full p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 focus:outline-none ${currentTheme.ui.card} ${textColor}`}
      {...props}
    />
  );
};

export default Input;