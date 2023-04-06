import { ScrollView, ScrollViewProps } from 'react-native';

import { Container, MainView } from "./styles";


type BaseContainerProps = ScrollViewProps & {
    withScrollView?: boolean;
}

export function BaseContainer({ withScrollView, children, ...rest }: BaseContainerProps) {
    return (
        <MainView>
            {
                withScrollView ? (
                    <ScrollView {...rest}>
                        <Container>
                            {children}
                        </Container>
                    </ScrollView>
                ) : (
                    <Container>
                        {children}
                    </Container>
                )
            }
        </MainView>
    )
}