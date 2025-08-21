import { Stack } from "expo-router";

export default function RootLayout() {
  return (
   <Stack
        screenOptions={{
           animation: "slide_from_right", // scroll horizontally
           animationDuration: 1000, // durer en millisecondes
           contentStyle: {
              backgroundColor: "transparent", // pour le fond transparent
           },
           headerShown: false, // pour ne pas afficher l'en-tête
        }}
>
   <Stack.Screen name="index" />
   <Stack.Screen name="pokemon/[id]" />
</Stack>
  )
}