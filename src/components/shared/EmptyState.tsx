import React from 'react';
import { View, Text } from 'react-native';

export interface EmptyStateProps {
  emoji: string;
  title: string;
  description: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ emoji, title, description, className = '' }) => {
  return (
    <View className={`items-center justify-center p-8 bg-white border-2 border-black rounded-2xl border-dashed ${className}`}>
      <Text className="text-6xl mb-4">{emoji}</Text>
      <Text className="text-xl font-bold text-black mb-2 text-center">{title}</Text>
      <Text className="text-center text-gray-600 font-medium">{description}</Text>
    </View>
  );
};
