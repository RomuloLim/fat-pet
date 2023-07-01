import styled from "styled-components/native";
import AntDesign from '@expo/vector-icons/AntDesign';

export const LoginContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 15% 10% 10%;
    background-color: ${({ theme }) => theme.colors.main};
`

export const DescriptionContainer = styled.View`
    justify-content: space-around;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.font_family.medium};
    font-size: ${({ theme }) => theme.font_size.h1};
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
`

export const Description = styled.Text`
    margin-top: 20px;
    font-size: ${({ theme }) => theme.font_size.xl};
    font-family: ${({ theme }) => theme.font_family.semiBold};
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
    `

export const SubSection = styled.Text`
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.font_size.sm};
    font-family: ${({ theme }) => theme.font_family.light};
    margin-bottom: 14px;
    text-align: center;
`

export const ButtonText = styled.Text<{ color?: string }>`
    color: ${ props => props.color || props.theme.colors.black};
`

export const SocialButton = styled.Pressable`
    background-color: ${({ theme }) => theme.colors.light};
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
`

export const BaseIcon = styled(AntDesign)`
    text-align: left;
    align-content: flex-start;
`

export const LogoContainer = styled.View`
    width: 100%;
    align-items: center;
`

export const Logo = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 150px;
`

export const PlantsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`