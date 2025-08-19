import ThemedText from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  // const color = useThemeColors();
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText variant="headline" color="graywhite">NBA YA MBINZA</ThemedText>
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
