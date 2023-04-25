import { useTheme } from 'styled-components';

import { Text } from "react-native";
import { Title, Container, Details, Weight, ImageView } from "./stytles";
import { SvgProps } from "react-native-svg";
import { Separator } from '@components/Separator';


type AnimalsCardProps = {
    space?: number;
    icon: React.FC<SvgProps>;
    title: string;
    weight: number;
    background: string;
};

export function AnimalsCard({ icon: Icon, title, weight, background }: AnimalsCardProps) {
    const theme = useTheme();

    return (
        <Container background={background}>
            <ImageView background={background}>
                <Icon width={40} height={40} />
            </ImageView>
            <Title>{title}</Title>
            <Weight>{weight} g</Weight>
            <Separator />
            <Details>
                <Text>Ver Detalhes</Text>
            </Details>
        </Container >
    )
}