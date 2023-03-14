import { ReactNode } from "react";
import { Title as StyledTitle } from "./styles";

type TitleProps = {
    children: ReactNode
}

export function Title(props: TitleProps) {
    return (
        <StyledTitle {...props} />
    )
}