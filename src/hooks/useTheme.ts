import { themes, ThemeKey } from "@/lib/themes";

export const useTheme = (themeId: ThemeKey) => {
  return themes[themeId];
};