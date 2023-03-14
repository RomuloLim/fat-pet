import React from "react";
import { SvgProps } from "react-native-svg";

type Props = SvgProps & {
    icon: React.FC<SvgProps>;
}

export function SvgImage({ icon: Icon, width, height, ...rest }: Props) {
    return (
        <Icon width={width} height={height} {...rest} />
    );
}  