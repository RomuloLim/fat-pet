import styled from 'styled-components/native';

export const MenuContainer = styled.View`
    flex-direction: column;
    background: ${({ theme }) => theme.colors.light};
    width: 100%;
    height: 10%;
    align-items: center;
`

export const IconsContainer = styled.View`
    flex-direction: row;
    flex: 1;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`