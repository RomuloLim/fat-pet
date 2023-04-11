import styled from "styled-components/native";

type AnimalsCardStyleProps = {
    background: string;
}

function changeBrightness(color: string){
    const arr = color.split(', ');

    arr[arr.length - 1] = '0.6)';
    return arr.join(', ');
}

export const Container = styled.View`
    width: 49%;
    height: 28%;
    background-color: ${({background}: AnimalsCardStyleProps) => changeBrightness(background)};
    padding: 5% 10%;
    border-radius: 24px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.font_family.regular};
    font-size: ${({ theme }) => theme.font_size.lg};
    color: ${({ theme }) => theme.colors.gray_900};
`

export const Weight = styled.Text`
    font-family: ${({ theme }) => theme.font_family.bold};
    font-size: ${({ theme }) => theme.font_size.lg};
    color: ${({ theme }) => theme.colors.black};
`

export const Details = styled.Pressable`
    border-bottom-width: 1px;
    border-bottom-color: black;
`

export const ImageView = styled.View`
    background-color: ${({background}: AnimalsCardStyleProps) => background};
    padding: 10px;
    border-radius: 100px;
`