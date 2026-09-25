import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';

export const ChatInput: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <View className="flex-row items-center bg-white p-3 border-t-2 border-black">
      <Pressable className="p-2 opacity-50" disabled>
        <Text className="text-xl">📎</Text>
      </Pressable>
      <TextInput
        className="flex-1 bg-[#FAFAFA] border-2 border-black rounded-full px-4 py-2 mx-2 font-bold text-[#1A1A2E]"
        placeholder="Type a message..."
        value={text}
        onChangeText={setText}
      />
      <Pressable 
        className={`w-10 h-10 rounded-full items-center justify-center border-2 border-black ${text.length > 0 ? 'bg-[#E53935]' : 'bg-gray-300'}`}
        disabled={text.length === 0}
      >
        <Text className="text-white">➤</Text>
      </Pressable>
    </View>
  );
};
