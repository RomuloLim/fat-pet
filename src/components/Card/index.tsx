import { Container, CurrentWeight, Row, ShowDetails, Title, RightContainer, ImageView } from "./styles";

type CardProps = {
    title: string,
    showDetails: string,
    value: string | number,
    valueColor?: string,
    valuePosition?: string,
    withImage?: boolean,
}

export function Card(props: CardProps) {
    return (
        <Container>
            <Row>
                {
                    props.valuePosition === "right" ?
                        (
                            <RightContainer>
                                <Row>
                                    <ShowDetails>{props.title}</ShowDetails>
                                    <Title>{props.showDetails}</Title>
                                </Row>

                                <Row>
                                    <CurrentWeight color={props.valueColor}>{props.value}</CurrentWeight>
                                </Row>
                            </ RightContainer>
                        ) :
                        (
                            <>
                                <Title>{props.title}</Title>
                                <CurrentWeight>{props.value}</CurrentWeight>
                                <ShowDetails>{props.showDetails}</ShowDetails>
                            </>
                        )
                }
            </Row>
            {
                props.withImage &&
                <ImageView />
            }
        </Container>
    )
}