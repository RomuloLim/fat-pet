import { Card } from '@components/Card';
import { Title } from '@components/Globals/Title';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { Separator } from '@components/Separator';
import { View } from 'react-native';
import { Container, OtherAnimalsSection } from './styles';
import { Entypo } from '@expo/vector-icons';
import theme from '../../theme/Light/index';

export function Home() {
    return (
        <Container>
            <Header />
            <Card
                title="Peso atual (g)"
                value="669.36"
                showDetails="Ver detalhes"
                withImage
            />
            <Separator />
            <Card
                title="Variação (g)"
                value="-38.00"
                showDetails="Última semana"
                valuePosition="right"
                valueColor="danger"
            />
            <Separator />
            <Card
                title="Variação (g)"
                value="+128.00"
                showDetails="Último mês"
                valuePosition="right"
                valueColor="success"
            />

            <Separator />

            <OtherAnimalsSection>
                <Title>Outros Animais</Title>
                <IconButton
                    background="primary"
                    color="light"
                    borderColor="light"
                    borderSize="4px"
                />
            </OtherAnimalsSection>
        </Container>
    );
}
