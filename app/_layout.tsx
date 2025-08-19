import { Stack } from "expo-router";

export default function RootLayout() {
  return (
   <Stack
        screenOptions={{
           animation: "slide_from_right",
           animationDuration: 1000,
           contentStyle: {
              backgroundColor: "transparent",
           },
           headerShown: false,
        }}
>
   <Stack.Screen name="index" />
   <Stack.Screen name="pokemon/[id]" />
</Stack>
  )
}