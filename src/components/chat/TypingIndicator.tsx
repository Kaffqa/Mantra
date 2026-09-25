import React from 'react';
import { View, Text } from 'react-native';

export const TypingIndicator: React.FC = () => {
  return (
    <View className="self-start flex-row items-center bg-white border-2 border-black rounded-2xl rounded-tl-none p-3 mb-4">
      <Text className="text-[#1A1A2E] font-bold italic text-sm">sedang mengetik...</Text>
    </View>
  );
};
