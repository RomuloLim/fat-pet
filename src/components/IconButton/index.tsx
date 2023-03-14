import { ButtonContainer } from "./styles"

import { IconButtonProps } from "./types/IconButtonProps";

import { Entypo } from '@expo/vector-icons';

import theme from '../../theme/Light'
import { KeyOfThemeColors } from "src/@types/genericals";

export function IconButton(props: IconButtonProps) {
    return (
        <ButtonContainer {...props}>
            {
                props.children || (
                    <Entypo
                        name="plus"
                        color={theme.colors[props.color as KeyOfThemeColors] || '#4A5568'}
                        size={20}
                    />
                )
            }
        </ButtonContainer>
    )
}