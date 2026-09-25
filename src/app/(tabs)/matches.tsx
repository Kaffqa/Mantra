import React from 'react';
import { View, Text, SectionList, Pressable } from 'react-native';
import { router } from 'expo-router';
import { MOCK_MATCHES } from '@/data/mock';
import { SHADOWS } from '@/lib/theme';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';

export default function MatchesScreen() {
  const connected = MOCK_MATCHES.filter(m => m.status === 'connected');
  const pending = MOCK_MATCHES.filter(m => m.status === 'pending');

  const sections = [
    { title: 'Connected', data: connected },
    { title: 'Pending', data: pending }
  ];

  const renderItem = ({ item }: { item: any }) => (
    <Pressable 
      onPress={() => item.status === 'connected' && router.push(`/chat/${item.id}`)}
      className="bg-white border-2 border-black rounded-2xl p-4 mb-4 flex-row items-center"
      style={SHADOWS.brutal}
    >
      <Avatar uri={item.profile.profile_image_url} name={item.profile.full_name} size="md" />
      <View className="flex-1 ml-4">
        <Text className="font-bold text-[#1A1A2E] text-lg">{item.profile.full_name}</Text>
        <Text className="text-sm text-gray-600">{item.profile.university}</Text>
        <View className="flex-row flex-wrap mt-2 gap-2">
          {item.profile.skills?.slice(0, 2).map((skill: string) => (
            <Badge key={skill} label={skill} variant="outline" />
          ))}
        </View>
      </View>
      {item.status === 'pending' && (
        <View className="bg-[#FACC15] px-3 py-1 rounded-full border-2 border-black">
          <Text className="text-xs font-bold">Pending</Text>
        </View>
      )}
    </Pressable>
  );

  return (
    <View className="flex-1 bg-[#FAFAFA] p-4">
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl font-black text-[#1A1A2E] my-4">{title}</Text>
        )}
      />
    </View>
  );
}
