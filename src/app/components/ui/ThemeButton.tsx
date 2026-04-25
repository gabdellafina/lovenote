import { themes } from "@/lib/themes";

const ThemeButton = ({ themeId, onClick, selected }) => {
  const theme = themes[themeId];

  if (!theme) return null;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition bg-white/50 ${
        selected
          ? `border-indigo-500 scale-[1.02] ${
              themeId === "goth" ? "text-gray-500" : "text-gray-400"
            }`
          : "border-white/10 hover:bg-white/20 text-gray-300"
      }`}
    >
      <div className="flex items-center gap-2">
        <p className="text-2xl">{theme.emoji}</p>

        <div>
          <p className="text-xl font-semibold">{theme.name}</p>
          <p className="text-md text-gray-800">{theme.desc}</p>
        </div>
      </div>
    </button>
  );
};

export default ThemeButton;
