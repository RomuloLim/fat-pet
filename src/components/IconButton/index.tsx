import { ButtonContainer } from "./styles"

import { Entypo } from '@expo/vector-icons';

export function IconButton() {
    return (
        <ButtonContainer>
            <Entypo
                name="plus"
                color="#4A5568"
                size={20}
            />
        </ButtonContainer>
    )
}