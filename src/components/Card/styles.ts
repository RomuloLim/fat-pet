import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 40%;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 24px;
    padding: 20px;
`