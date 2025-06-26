// App.tsx - Replace the existing App.tsx content
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStackNavigator from "./src/navigation/Stack";

const queryClient = new QueryClient();

function App(): React.JSX.Element {
    return (
        <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    <RootStackNavigator/>
                </NavigationContainer>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
}

export default App;
