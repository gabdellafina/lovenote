import { themes } from "@/lib/themes";

export const useTheme = (themeId: string) => {
  return themes[themeId];
};