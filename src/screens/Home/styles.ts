import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_100};
    padding: 24px;
`

export const OtherAnimalsSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`