import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { IconButtonProps } from "./types/IconButtonProps";
import { KeyOfThemeColors } from "src/@types/genericals";

export const ButtonContainer = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 50px;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    elevation: 4;
    
    border-bottom-width: ${({borderSize}: IconButtonProps) => borderSize || '0px'};
    border-width: ${({borderSize}: IconButtonProps) => borderSize || '1px'};
    border-color: ${({borderColor}: IconButtonProps) => ({theme}) => theme.colors[borderColor as KeyOfThemeColors|| 'gray_600']};
    background-color: ${({background}: IconButtonProps) => ({theme}) => theme.colors[background as KeyOfThemeColors|| 'light']};
    `;