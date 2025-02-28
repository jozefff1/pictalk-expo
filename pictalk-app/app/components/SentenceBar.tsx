import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';

interface Icon {
  id: string;
  name: string;
  imageUrl: string;
}

interface SentenceBarProps {
  selectedIcons: Icon[];
  onRemoveIcon: (icon: Icon) => void;
}

const SentenceBar: React.FC<SentenceBarProps> = ({ selectedIcons, onRemoveIcon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sentence Bar</Text>
      <FlatList
        data={selectedIcons}
        renderItem={({ item }) => (
          <Draggable
            onDragRelease={() => onRemoveIcon(item)}
            renderSize={80}
            x={0}
            y={0}
          >
            <TouchableOpacity onPress={() => onRemoveIcon(item)} style={styles.iconContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.iconImage} />
              <Text style={styles.iconText}>{item.name}</Text>
            </TouchableOpacity>
          </Draggable>
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