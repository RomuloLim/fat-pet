import { useTheme } from "styled-components";

const theme = useTheme();

export type KeyOfThemeColors = keyof typeof theme.colors;