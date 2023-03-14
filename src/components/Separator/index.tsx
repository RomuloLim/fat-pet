import { View } from "react-native"

type SeparatorProps = {
    height?: number
}

export function Separator(props: SeparatorProps) {
    return (
        <View style={{ height: props.height || 20 }} />
    )
}