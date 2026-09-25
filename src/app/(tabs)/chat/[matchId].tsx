import React from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { MOCK_MESSAGES, MOCK_PROFILES } from '@/data/mock';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { ChatInput } from '@/components/chat/ChatInput';
import { TypingIndicator } from '@/components/chat/TypingIndicator';

export default function ChatRoomScreen() {
  const { matchId } = useLocalSearchParams<{ matchId: string }>();
  const messages = MOCK_MESSAGES.filter(m => m.match_id === matchId).reverse();
  const partner = MOCK_PROFILES[0]; // Mock partner
  const isTyping = true; // placeholder

  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <View className="bg-white border-b-2 border-black p-4 flex-row items-center pt-12">
        <Pressable onPress={() => router.back()} className="mr-4">
          <Text className="text-2xl">⬅️</Text>
        </Pressable>
        <Text className="text-xl font-black text-[#1A1A2E]">{partner.full_name}</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        inverted
        renderItem={({ item }) => (
          <MessageBubble message={item.content} isMine={item.sender_id === 'user-001'} time={item.created_at} />
        )}
        ListHeaderComponent={() => isTyping ? <TypingIndicator /> : null}
        contentContainerStyle={{ padding: 16 }}
      />
      
      <ChatInput />
    </View>
  );
}
