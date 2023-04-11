import styled from "styled-components/native"

type AlignmentContainerProps = {
    isVisible: boolean
}

export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ isVisible }: AlignmentContainerProps) => isVisible ? 'space-between' : 'center'};
    padding: 8% 0;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.font_size.lg};
    font-family: ${({ theme }) => theme.font_family.bold};
`

export const AlignmentContainer = styled.View`
    width: 48px;
    height: 48px;
    display: ${({ isVisible }: AlignmentContainerProps) => isVisible ? 'flex' : 'none'};
`