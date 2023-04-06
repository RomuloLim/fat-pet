import { useTheme } from "styled-components";
import { IconButton } from "@components/IconButton";
import { IconsContainer, MenuContainer } from "./styles";

import FontAwesome from '@expo/vector-icons/FontAwesome5'

export function Menu() {
    const theme = useTheme();

    return (
        <>
            <MenuContainer>
                <IconsContainer>
                    <FontAwesome name="home" size={24} color={theme.colors.gray_700} />
                    <FontAwesome name="calendar" size={24} color={theme.colors.gray_700} />
                    <IconButton
                        background="primary"
                        color="light"
                        borderColor="light"
                        borderSize="2px"
                    />
                    <FontAwesome name="pills" size={24} color={theme.colors.gray_700} />
                    <FontAwesome name="user" size={24} color={theme.colors.gray_700} />
                </IconsContainer>
            </MenuContainer>
        </>
    );
}