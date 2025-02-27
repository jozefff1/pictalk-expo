import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const SentenceBar = ({ selectedIcons }) => {
  return (
    <View>
      <Text>Sentence Bar</Text>
      <FlatList
        data={selectedIcons}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50 }} />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default SentenceBar;