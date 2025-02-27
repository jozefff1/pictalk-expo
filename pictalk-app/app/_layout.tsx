import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Welcome' }} />
      <Stack.Screen name="pages/Home" options={{ title: 'Home' }} />
      <Stack.Screen name="pages/Profile" options={{ title: 'Profile' }} />
      <Stack.Screen name="pages/Settings" options={{ title: 'Settings' }} />
    </Stack>
  );
};

export default Layout;
