import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';


import { Card } from '@components/Card';
import { Title } from '@components/Globals/Title';
import { Header } from '@components/Header';
import { Separator } from '@components/Separator';
import { ScrollView } from 'react-native';
import { Container, OtherAnimalsSection, AnimalsView, MainView } from './styles';
import { AnimalsCard } from '@components/AnimalsCard';
import { Menu } from '@components/Menu';

import { collection, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { database, storage } from "@config/firebaseconfig";

export function Home() {
    const theme = useTheme();
    const [animals, setAnimals] = useState<Animal[]>([]);

    async function handleAnimals() {
        const querySnapshot = await getDocs(collection(database, "Animals"));

        const listRef = ref(storage, 'icons/')
        const images = await listAll(listRef);

        const animalsData = Promise.all(querySnapshot.docs.map(async (doc) => {
            const docData = doc.data();

            const image = images.items.find((image) => {
                return image.name === docData.image
            });

            const imageUrl = await getDownloadURL(image || images.items[0]);

            return { ...doc.data(), id: doc.id, url: imageUrl }
        }));

        setAnimals(await animalsData as unknown as Animal[]);
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
                                return (
                                    <AnimalsCard
                                        iconUrl={animal.url}
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
