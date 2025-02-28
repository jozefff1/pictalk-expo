import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface Icon {
  id: string;
  name: string;
  imageUrl: string;
}

const icons: Icon[] = [
  { id: '1', name: 'Eat', imageUrl: 'https://example.com/eat.png' },
  { id: '2', name: 'Drink', imageUrl: 'https://example.com/drink.png' },
  // Add more icons as needed
];

interface IconLibraryProps {
  onSelectIcon: (icon: Icon) => void;
}

const IconLibrary: React.FC<IconLibraryProps> = ({ onSelectIcon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Icon Library</Text>
      <FlatList
        data={icons}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectIcon(item)} style={styles.iconContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.iconImage} />
            <Text style={styles.iconText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff69b4',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  iconImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ff69b4',
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
    color: '#ff69b4',
    fontWeight: 'bold',
  },
});

export default IconLibrary;