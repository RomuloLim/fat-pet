import { Text } from "react-native";
import { Container } from "./styles";

export function Card(props: any) {
    return (
        <Container>
            <Text>{props.label}</Text>
            <Text>{props.description}</Text>
            <Text>{props.footer}</Text>
        </Container>
    )
}