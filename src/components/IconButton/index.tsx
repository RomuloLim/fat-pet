import { ButtonContainer } from "./styles"

import Icon from "@expo/vector-icons/AntDesign";
import { Button, Pressable, TouchableOpacity } from "react-native";

export function IconButton() {
    return (
        <ButtonContainer>
            <Icon name="plus" color="#4A5568" size={35} />
        </ButtonContainer>
    )
}