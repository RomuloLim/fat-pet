import { Text } from 'react-native';
import { BaseContainer } from '@components/Globals/BaseContainer';
import { ScrollView, ScrollViewProps } from 'react-native';
import { BackgroundView } from './styles';
import { Input } from '@components/Globals/Input';
import { Header } from '@components/Header';

export function NewPet() {
    return (
        <BaseContainer
        >
            <Header
                title='Novo Pet'
                navigatesToBackButton
            />
            <BackgroundView>
                <Input
                    placeholder='Nome do Pet'
                />
                <Input
                    placeholder='Idade'
                />
                <Input
                    placeholder='Gênero'
                />
                <Input
                    placeholder='Tipo de Animal'
                />

            </BackgroundView>
        </BaseContainer>
    )
}