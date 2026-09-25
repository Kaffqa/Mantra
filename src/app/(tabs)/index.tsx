import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MOCK_PROFILES, MOCK_CURRENT_USER } from '@/data/mock';
import { SHADOWS } from '@/lib/theme';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-[#FAFAFA] p-4">
      <Text className="text-3xl font-black text-[#1A1A2E] mb-6">Halo, {MOCK_CURRENT_USER.full_name}! 👋</Text>
      
      <View className="flex-row justify-between mb-6">
        <Card className="flex-1 mr-2 p-4 items-center bg-[#FACC15]">
          <Text className="text-4xl font-black text-[#1A1A2E]">12</Text>
          <Text className="text-sm font-bold text-[#1A1A2E] mt-2">New Matches</Text>
        </Card>
        <Card className="flex-1 ml-2 p-4 items-center bg-[#4DB6AC]">
          <Text className="text-4xl font-black text-[#1A1A2E]">5</Text>
          <Text className="text-sm font-bold text-[#1A1A2E] mt-2">Pending</Text>
        </Card>
      </View>

      <Text className="text-xl font-bold text-[#1A1A2E] mb-4">Recent Activity</Text>
      
      {MOCK_PROFILES.slice(0, 3).map((profile) => (
        <View key={profile.id} className="bg-white border-2 border-black rounded-2xl p-4 mb-4 flex-row items-center" style={SHADOWS.brutal}>
          <View className="w-12 h-12 bg-[#B39DDB] rounded-full border-2 border-black mr-4 items-center justify-center">
            <Text className="text-xl">🧑‍🎓</Text>
          </View>
          <View className="flex-1">
            <Text className="font-bold text-[#1A1A2E]">{profile.full_name}</Text>
            <Text className="text-sm text-gray-600">{profile.university}</Text>
          </View>
          <Badge label="New Match" variant="primary" />
        </View>
      ))}
    </ScrollView>
  );
}
