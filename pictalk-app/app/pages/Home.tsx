import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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
  const [removedIcons, setRemovedIcons] = useState<Icon[]>([]);

  const handleSelectIcon = (icon: Icon) => {
    setSelectedIcons((prevIcons) => [...prevIcons, icon]);
  };

  const handleRemoveIcon = (icon: Icon) => {
    setSelectedIcons((prevIcons) => prevIcons.filter((i) => i.id !== icon.id));
    setRemovedIcons((prevIcons) => [...prevIcons, icon]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pictalk App</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/pages/Profile')}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/pages/Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <IconLibrary onSelectIcon={handleSelectIcon} />
      <SentenceBar selectedIcons={selectedIcons} onRemoveIcon={handleRemoveIcon} />
      <Chat />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 32,
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
  button: {
    backgroundColor: '#ff69b4',
    padding: 15,
    borderRadius: 30,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;