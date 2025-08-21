import ThemedText from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  // const color = useThemeColors();
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText variant="headline" color="graywhite">NBA YA MBINZA</ThemedText>
      <Link href={{pathname : "/patedex/[id]" , params : {id : "3"}}}>Go to Players</Link> {/** Link vers la page des joueurs 3 */} 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#ff3c00ff" , flex : 0 },
});
