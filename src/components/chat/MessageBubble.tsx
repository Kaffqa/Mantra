import React from 'react';
import { View, Text } from 'react-native';

interface MessageBubbleProps {
  message: string;
  isMine: boolean;
  time?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isMine, time }) => {
  return (
    <View className={`mb-4 max-w-[80%] ${isMine ? 'self-end' : 'self-start'}`}>
      <View 
        className={`p-3 rounded-2xl border-2 border-black ${
          isMine ? 'bg-[#E53935] rounded-tr-none' : 'bg-white rounded-tl-none'
        }`}
      >
        <Text className={`font-bold ${isMine ? 'text-white' : 'text-[#1A1A2E]'}`}>
          {message}
        </Text>
      </View>
      {time && (
        <Text className={`text-xs text-gray-500 font-bold mt-1 ${isMine ? 'text-right' : 'text-left'}`}>
          {time}
        </Text>
      )}
    </View>
  );
};
