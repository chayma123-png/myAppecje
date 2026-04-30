import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="page2" />
      <Stack.Screen name="mestaches" />
      <Stack.Screen name="calendrier" />
      <Stack.Screen name="formation" />
      <Stack.Screen name="event" />
    </Stack>
  );
}