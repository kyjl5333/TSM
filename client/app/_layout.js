import { Stack } from "expo-router";
import { NavigationProvider } from '../contexts/navigationContext';

export default function RootLayout() {
  return (
    <NavigationProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="sch_list" />
        <Stack.Screen name="sch_detail" />
        <Stack.Screen name="recom" />
        <Stack.Screen name="profile" />
      </Stack>
    </NavigationProvider>
  )

}
