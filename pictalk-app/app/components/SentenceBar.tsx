import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

interface Icon {
  id: string;
  name: string;
  imageUrl: string;
}

interface SentenceBarProps {
  selectedIcons: Icon[];
}

const SentenceBar: React.FC<SentenceBarProps> = ({ selectedIcons }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sentence Bar</Text>
      <FlatList
        data={selectedIcons}
        renderItem={({ item }) => (
          <View style={styles.iconContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.iconImage} />
            <Text style={styles.iconText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    margin: 5,
  },
  iconImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ff69b4',
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default SentenceBar;