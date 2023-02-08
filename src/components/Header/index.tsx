import { IconButton } from "@components/IconButton";
import { Text, View } from "react-native";
import { HeaderContainer, Title, AlignmentContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <IconButton />
            <Title>Jade</Title>
            <AlignmentContainer />
        </HeaderContainer>
    )
}