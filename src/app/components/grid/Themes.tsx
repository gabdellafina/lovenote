'use client';

import { Card } from "../ui/Card";
import { themes } from "@/lib/themes";
import  ThemeButton from "../ui/ThemeButton";


const Themes = ({ theme, setTheme }) => {
  return (
    <Card theme={theme}>
      <h2 className="text-2xl italic font-semibold text-gray-800 mb-2">
        Pick a theme
      </h2>

      <div className="space-y-3">

        {Object.values(themes).map((t) => (
          <ThemeButton
            key={t.id}
            themeId={t.id}
            onClick={() => setTheme(t.id)}
            selected={t.id === theme}
          />
        ))}

      </div>
    </Card>
  );
};

export default Themes;