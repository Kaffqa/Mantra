import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { router } from 'expo-router';
import { MOCK_CHAT_PREVIEWS } from '@/data/mock';
import { Avatar } from '@/components/ui/Avatar';
import { SHADOWS } from '@/lib/theme';
import type { ChatPreview } from '@/types';

export default function ChatListScreen() {
  const renderItem = ({ item }: { item: ChatPreview }) => (
    <Pressable 
      onPress={() => router.push(`/(tabs)/chat/${item.match_id}`)}
      className="bg-white border-2 border-black rounded-2xl p-4 mb-4 flex-row items-center"
      style={SHADOWS.brutalSm}
    >
      <Avatar uri={item.partner.profile_image_url} size="md" />
      <View className="flex-1 ml-4 mr-2">
        <View className="flex-row justify-between items-center mb-1">
          <Text className="font-bold text-[#1A1A2E] text-lg">{item.partner.full_name}</Text>
          <Text className="text-xs text-gray-500 font-bold">
            {item.last_message ? new Date(item.last_message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
          </Text>
        </View>
        <Text className="text-gray-600" numberOfLines={1}>
          {item.last_message?.content ?? 'No messages yet'}
        </Text>
      </View>
      {item.unread_count > 0 && (
        <View className="bg-[#E53935] w-6 h-6 rounded-full items-center justify-center border-2 border-black">
          <Text className="text-white text-xs font-bold">{item.unread_count}</Text>
        </View>
      )}
    </Pressable>
  );

  return (
    <View className="flex-1 bg-[#FAFAFA] p-4">
      <Text className="text-2xl font-black text-[#1A1A2E] mb-6">Messages</Text>
      <FlatList
        data={MOCK_CHAT_PREVIEWS}
        keyExtractor={(item) => item.match_id}
        renderItem={renderItem}
      />
    </View>
  );
}
