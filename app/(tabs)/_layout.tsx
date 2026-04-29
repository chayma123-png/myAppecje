import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Page 1' }} />
      <Stack.Screen name="login" options={{ title: 'login' }} />
      <Stack.Screen name="signup" options={{ title: 'Signup' }} />
      <Stack.Screen name="page2" options={{ title: 'Page 2' }} />
      
    </Stack>
  );
}