import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function patedex() {
  const params = useLocalSearchParams();
  return (
    <View
      style={styles.container}
    >
      <Text>ID 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})