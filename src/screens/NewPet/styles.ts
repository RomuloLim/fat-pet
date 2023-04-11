import styled from "styled-components/native";

export const BackgroundView = styled.View`
    background-color: ${({ theme }) => theme.colors.main};
    height: 85%;
    padding: 10%;
    border-radius: 20px;
    margin: auto 0;
`;