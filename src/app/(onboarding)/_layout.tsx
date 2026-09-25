import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="tour" />
      <Stack.Screen name="upload-face" />
      <Stack.Screen name="scan-ktm" />
      <Stack.Screen name="review-data" />
      <Stack.Screen name="setup-skills" />
    </Stack>
  );
}
