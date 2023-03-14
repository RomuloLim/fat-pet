import styled from "styled-components/native";
import PlantsGroup from '@images/group-plants.svg';
import { KeyOfThemeColors } from "src/@types/genericals";

type CurrentWheightProps = {
    color?: string
}

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 24px;
    padding: 25px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RightContainer = styled.View`
    width: 100%;
    flex-direction: row;
    
    justify-content: space-between;
`

export const Row = styled.View`
    flex-grow: 1;
    justify-content: space-around;
`

export const ImageView = styled(PlantsGroup)`
    margin-left: 50px;
    margin-bottom: -25px;
`

const Text = styled.Text`
    font-family: ${({ theme }) => theme.font_family.medium};
`

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.gray_500};
    font-size: ${({ theme }) => theme.font_size.md};
`

export const CurrentWeight = styled(Text)`
    color: ${(props: CurrentWheightProps) => ({ theme }) => theme.colors[props.color as KeyOfThemeColors || "light"]};
    font-size: ${({ theme }) => theme.font_size.xl};
    font-weight: bold;
`

export const ShowDetails = styled(Text)`
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.font_size.sm};
`