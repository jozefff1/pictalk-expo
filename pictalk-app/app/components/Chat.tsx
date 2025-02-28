import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <View style={styles.buttonContainer}>
        <Button title="Go to Profile" onPress={() => router.push('/pages/Profile')} color="#ff69b4" />
        <Button title="Go to Settings" onPress={() => router.push('/pages/Settings')} color="#ff69b4" />
      </View>
      <IconLibrary onSelectIcon={handleSelectIcon} />
      <SentenceBar selectedIcons={selectedIcons} />
      <Chat />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff69b4',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
});

export default Home;