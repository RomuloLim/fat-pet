import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import { FormInput } from './styles';

type InputProps = {
    placeholder: string;
    placeholderTextColor?: string;
    autoCapitalize?: string;
    autoCorrect?: boolean;
}

export function Input(props: InputProps) {
    return (
        <KeyboardAvoidingView
            behavior='padding'
        >
            <FormInput
                placeholder={props.placeholder}
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />
        </KeyboardAvoidingView>
    )
}