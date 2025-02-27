import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const icons: Icon[] = [
  { id: '1', name: 'Eat', imageUrl: 'https://example.com/eat.png' },
  { id: '2', name: 'Drink', imageUrl: 'https://example.com/drink.png' },
  // Add more icons as needed
];

interface Icon {
  id: string;
  name: string;
  imageUrl: string;
}

interface IconLibraryProps {
  onSelectIcon: (icon: Icon) => void;
}

const IconLibrary: React.FC<IconLibraryProps> = ({ onSelectIcon }) => {
  return (
    <View>
      <Text>Icon Library</Text>
      <FlatList
        data={icons}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectIcon(item)}>
            <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50 }} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default IconLibrary;