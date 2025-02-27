import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import IconLibrary from '../components/IconLibrary';
import SentenceBar from '../components/SentenceBar';
import Chat from '../components/Chat';

type Icon = {
  id: string;
  name: string;
  imageUrl: string;
};

const Home = () => {
  const router = useRouter();
  const [selectedIcons, setSelectedIcons] = useState<Icon[]>([]);

  const handleSelectIcon = (icon: Icon) => {
    setSelectedIcons((prevIcons) => [...prevIcons, icon]);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>
      <Button title="Go to Profile" onPress={() => router.push('/pages/Profile')} />
      <Button title="Go to Settings" onPress={() => router.push('/pages/Settings')} />
      <IconLibrary onSelectIcon={handleSelectIcon} />
      <SentenceBar selectedIcons={selectedIcons} />
      <Chat />
    </View>
  );
};

export default Home;