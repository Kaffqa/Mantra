import React from 'react';
import { View, Text } from 'react-native';

interface TourSlideProps {
  emoji: string;
  title: string;
  description: string;
}

export const TourSlide: React.FC<TourSlideProps> = ({ emoji, title, description }) => {
  return (
    <View className="flex-1 items-center justify-center p-6 w-full">
      <View className="w-32 h-32 bg-[#FACC15] border-4 border-black rounded-full items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(26,26,46,1)]">
        <Text className="text-6xl">{emoji}</Text>
      </View>
      <Text className="text-3xl font-black text-[#1A1A2E] text-center mb-4">{title}</Text>
      <Text className="text-lg text-gray-700 text-center font-bold">{description}</Text>
    </View>
  );
};
