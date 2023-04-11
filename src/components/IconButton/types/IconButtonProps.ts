import { ReactNode } from "react";

import { TouchableOpacityProps } from "react-native";

import { KeyOfThemeColors } from "src/@types/genericals";

export type IconButtonProps = TouchableOpacityProps & {
    children?: ReactNode,
    background?: string,
    color?: KeyOfThemeColors,
    borderColor?: string,
    borderSize?: string,
    upside?: boolean,
}