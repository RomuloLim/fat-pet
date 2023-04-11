import { ButtonContainer } from "./styles"

import { IconButtonProps } from "./types/IconButtonProps";

import { Entypo } from '@expo/vector-icons';

import { useTheme } from "styled-components";


export function IconButton(props: IconButtonProps) {
    const theme = useTheme();

    return (
        <ButtonContainer {...props}>
            {
                props.children || (
                    <Entypo
                        name='plus'
                        color={theme.colors[props.color || 'gray_800'] as string}
                        size={20}
                    />
                )
            }
        </ButtonContainer>
    )
}