import { styles } from "@/constants/thma";
import { Text, TextInput, View } from "react-native";

export default function FormField({
    field,
    label,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
}){
    return (
        <View style={styles.field}>
            <Text>{label}</Text>
            <TextInput style={styles.textInput}
            value={values[field]}
            onChangeText={handleChange(field)}
            onBlur={handleBlur(field)}
            />
            {touched[field]&&errors[field] ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errors[field]}</Text>
                </View>
            ):null}
            
        </View>
    )
}