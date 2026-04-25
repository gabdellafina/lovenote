import {themes} from "@/lib/themes";

const Input = ({ isAnonymous, theme, ...props }) => {
  const currentTheme = themes[theme];
  const isGoth = theme === "goth";

  const textColor = isGoth ? "text-gray-300" : "text-gray-700";

  
  return (
    <input 
      className={`w-full p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10  focus:outline-none ${currentTheme.ui.card} ${textColor} ${isAnonymous ? "opacity-0" : ""}`}
      {...props}
    />
  );
};

export default Input