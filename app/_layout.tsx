import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import React from 'react';
import { DataContext, fetchData } from '../constants/Context';
import { ProductResponse } from '../constants/Types';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [data, setData] = useState<ProductResponse | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  }

  return (
    <DataContext.Provider value={data}>
      <Stack screenOptions={{
        headerTitle: 'Stock',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="single" options={{
          headerTitle: 'Product',
        }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </DataContext.Provider>
  );
}
