import styled from "styled-components/native";

export const InputContainer = styled.KeyboardAvoidingView`
`

export const FormInput = styled.TextInput`
    width: 100%;
    height: 60px;
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
    color: ${({ theme }) => theme.colors.gray_500};
    padding: 0 24px;
    border-radius: 10px;
    margin-bottom: 5%;
`