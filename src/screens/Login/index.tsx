import { View, Image } from "react-native";
import { useTheme } from "styled-components";

import { Separator } from "@components/Separator";
import PlantRed from "@images/plant-red.svg";
import PlantBlue from "@images/plant-blue.svg";
import Circle from "@images/circle.svg";

import { ButtonText, Description, LoginContainer, BaseIcon, Logo, LogoContainer, DescriptionContainer, SocialButton, PlantsContainer, SubSection } from "./styles";

export function Login() {
    const theme = useTheme();

    return (
        <LoginContainer>
            <PlantsContainer>
                <PlantRed />
                <Circle />
                <PlantBlue />
            </PlantsContainer>
            <DescriptionContainer>
                <LogoContainer>
                    <Logo
                        source={{
                            uri: "https://i.ibb.co/ft3Rw2y/logo.png",
                        }}
                    />
                </LogoContainer>
            </DescriptionContainer>

            <View>
                <Description>
                    Dê ao seu melhor amigo a atenção e cuidado que ele merece
                </Description>
            </View>

            <View>
                <SubSection>
                    Acompanhe a saúde e o bem-estar dos seus pets em um só lugar.
                </SubSection>

                <SocialButton>
                    <BaseIcon
                        name="google"
                        size={20}
                    />
                    <ButtonText>
                        Entrar com Google
                    </ButtonText>
                    <View style={{ width: 20, height: 20 }} />
                </SocialButton>

                <Separator />

                <SocialButton>
                    <BaseIcon
                        name="facebook-square"
                        size={20}
                    />
                    <ButtonText>
                        Entrar com Facebook
                    </ButtonText>
                    <View style={{ width: 20, height: 20 }} />
                </SocialButton>
            </View>
        </LoginContainer>
    )
} 