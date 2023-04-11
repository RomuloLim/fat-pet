import { useTheme } from 'styled-components';

import { Card } from '@components/Card';
import { Title } from '@components/Globals/Title';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { Separator } from '@components/Separator';
import { ScrollView, View } from 'react-native';
import { Container, OtherAnimalsSection, AnimalsView, MainView } from './styles';
import { AnimalsCard } from '@components/AnimalsCard';
import Rat from "@images/rat.svg"
import Keroppi from "@images/Keroppi.svg"
import Snake from "@images/Group 174.svg"
import Monkey from "@images/Group 171.svg"
import { Menu } from '@components/Menu';

export function Home() {
    const theme = useTheme();

    return (
        <MainView>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: '40%' }}
                showsVerticalScrollIndicator={false}
            >
                <Container>
                    <Header
                        title="Danny"
                        navigatesToBackButton
                    />
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
                    </OtherAnimalsSection>

                    <Separator />

                    <AnimalsView>
                        <AnimalsCard
                            icon={Rat}
                            title="Danny"
                            weight={770.52}
                            background={theme.colors.cards.light_blue}
                        />

                        <AnimalsCard
                            icon={Keroppi}
                            title="Remy"
                            weight={770.52}
                            background={theme.colors.cards.light_green}
                        />

                        <AnimalsCard
                            icon={Monkey}
                            title="Maya"
                            weight={770.52}
                            background={theme.colors.cards.light_red}
                        />

                        <AnimalsCard
                            icon={Snake}
                            title="Jade"
                            weight={770.52}
                            background={theme.colors.cards.light_vine}
                        />

                    </AnimalsView>
                </Container>
            </ScrollView>

            <Menu />
        </MainView>
    );
}
