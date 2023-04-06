import styled from "styled-components/native";

export const Container = styled.View`
    padding: 24px;
    `

export const OtherAnimalsSection = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    `

export const AnimalsView = styled.View`
    flex-direction: row;
    align-items: stretch;
    flex-flow: row wrap;
    justify-content: space-between;
    `

export const MainView = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_100};
`