import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#C40075", // 배경색 (짙은 핑크)
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      flexDirection: "row", // 아이콘 + 입력창 가로 배치
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 40,
      width: 320,
      height: 55,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    input: {
      flex: 1, // 남은 공간 차지
      fontSize: 16,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: "#92004A", // 어두운 핑크 (버튼색)
      borderRadius: 40,
      width: 320,
      height: 55,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      letterSpacing: 1,
    },
    text: {
      color: "white",
      marginBottom: 20,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 30, fontWeight: "bold" }]}>안녕하세요!</Text>
      <Text style={[styles.text, { fontSize: 20 }]}>홍길동님</Text>
      <Text style={[styles.text, { fontSize: 20 }]}>010 1234 5678</Text>

      {/* 🔒 입력창 */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock-outline" size={24} color="gray" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="비밀번호 입력"
          placeholderTextColor="gray"
        />
      </View>

      {/* 🚪 로그인 버튼 */}
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}
