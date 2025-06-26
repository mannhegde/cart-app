import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStackNavigator from './src/navigation/Stack';
import { ToastProvider } from './src/providers/toast/ToastContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </ToastProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
