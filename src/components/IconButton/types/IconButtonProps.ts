import { ReactNode } from "react";

import { TouchableOpacityProps } from "react-native";

export type IconButtonProps = TouchableOpacityProps & {
    children?: ReactNode,
    background?: string,
    color?: string,
    borderColor?: string,
    borderSize?: string,
    upside?: boolean,
}