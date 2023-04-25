import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import { DocumentData, collection, getDocs } from "firebase/firestore";

import { Card } from '@components/Card';
import { Title } from '@components/Globals/Title';
import { Header } from '@components/Header';
import { Separator } from '@components/Separator';
import { ScrollView, View } from 'react-native';
import { Container, OtherAnimalsSection, AnimalsView, MainView } from './styles';
import { AnimalsCard } from '@components/AnimalsCard';
import Rat from "@images/rat.svg"
import { Menu } from '@components/Menu';

import database from "@config/firebaseconfig.tsx";

export function Home() {
    const theme = useTheme();
    const [animals, setAnimals] = useState([] as DocumentData);

    async function handleAnimals() {
        const querySnapshot = await getDocs(collection(database, "Animals"));

        setAnimals(querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
        }));
    }

    useEffect(() => {
        handleAnimals();
    }, []);

    return (
        <MainView>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: '40%' }}
                showsVerticalScrollIndicator={false}
            >
                <Container>
                    <Header
                        title="Danny"
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
                        {
                            animals.map((animal) => {
                                console.log(animal);
                                return (
                                    <AnimalsCard
                                        icon={Rat}
                                        title={animal.name}
                                        weight={animal.weight}
                                        background={theme.colors.cards[animal.color as keyof typeof theme.colors.cards]}
                                        key={animal.id}
                                    />
                                )
                            })
                        }
                    </AnimalsView>
                </Container>
            </ScrollView>

            <Menu />
        </MainView>
    );
}
