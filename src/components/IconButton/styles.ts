import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const ButtonContainer = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 50px;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;

    border-width: 1px;
    border-color: #ddd;
    border-bottom-width: 0px;
    elevation: 4;
`;