//TODO

import { colors } from './colors';
import { CustomThemeConfig } from 'tailwindcss/types/config';

type CustomThemeType = Partial<CustomThemeConfig>;

export const extendTheme: CustomThemeType = {
	colors,
};
