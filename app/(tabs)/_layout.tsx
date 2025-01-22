import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";

export default function RootLayout() {
    const [loaded] = useFonts({
        "SpaceMono-Regular" : require("../../assets/fonts/SpaceMono-Regular.ttf"),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    if (!loaded) {
        return null;
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
        </Stack>
    )
}