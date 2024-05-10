//TODO

import { CustomThemeConfig } from "tailwindcss/types/config";
import { colors } from "./colors";

type CustomThemeType = Partial<CustomThemeConfig>;

export const extendTheme: CustomThemeType = {
  colors,
};
