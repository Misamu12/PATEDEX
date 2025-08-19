import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "@/components/ThemedText";

export default function Index() {

{/**  const color = useThemeColors(); */}
  return (
    <SafeAreaView style={styles.container}>
     <ThemedText variant="headline" color="graywhite">Patedex</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#FF0000" , flex : 1 },
});

/**
 * 
 * import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerShown: false
    }}
  />;
}
 */
