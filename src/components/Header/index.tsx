import { IconButton } from "@components/IconButton";

import { AntDesign } from "@expo/vector-icons"

import { HeaderContainer, Title, AlignmentContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

type HeaderProps = {
    title: string;
    navigatesToBackButton?: boolean;
}

export function Header({ title, navigatesToBackButton }: HeaderProps) {
    const navigation = useNavigation();
    const theme = useTheme();

    return (
        <HeaderContainer
            isVisible={!!navigatesToBackButton}
        >
            {
                navigatesToBackButton && (
                    <IconButton
                        onPress={() => navigation.goBack()}>
                        <AntDesign
                            name="arrowleft"
                            color={theme.colors.gray_800}
                            size={20}
                        />
                    </IconButton>
                )
            }
            <Title>{title}</Title>
            <AlignmentContainer isVisible={!!navigatesToBackButton} />
        </HeaderContainer>
    )
}