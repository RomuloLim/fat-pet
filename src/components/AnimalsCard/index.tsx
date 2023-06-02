import { Text } from "react-native";

import { Separator } from '@components/Separator';

import { Title, Container, Details, Weight, ImageView, ImageContent } from "./stytles";

type AnimalsCardProps = {
    space?: number;
    iconUrl?: string;
    title: string;
    weight: number;
    background: string;
};

export function AnimalsCard({ title, weight, background, iconUrl }: AnimalsCardProps) {
    return (
        <Container background={background}>
            <ImageView background={background}>
                <ImageContent
                    source={{
                        uri: iconUrl
                    }} />
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