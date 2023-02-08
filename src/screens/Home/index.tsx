import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Container } from './styles';

export function Home() {
    return (
        <Container>
            <Header />
            <Card
                label="Peso atual (g)"
                description="669.36"
                footer="Ver detalhes"
            />
        </Container>
    );
}
