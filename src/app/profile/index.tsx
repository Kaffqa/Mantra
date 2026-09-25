import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { MOCK_CURRENT_USER } from '@/data/mock';
import { SHADOWS } from '@/lib/theme';

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-[#FAFAFA] p-4 pt-12">
      <View className="items-center mb-8">
        <Avatar uri={MOCK_CURRENT_USER.profile_image_url} name={MOCK_CURRENT_USER.full_name} size="xl" />
        <Text className="text-2xl font-black text-[#1A1A2E] mt-4">{MOCK_CURRENT_USER.full_name}</Text>
        <Text className="text-lg text-gray-600 font-bold">{MOCK_CURRENT_USER.university}</Text>
        <Text className="text-md text-gray-500 mb-4">{MOCK_CURRENT_USER.major}</Text>
        <Badge label={MOCK_CURRENT_USER.intent} variant="primary" />
      </View>

      <View className="bg-white border-2 border-black rounded-2xl p-4 mb-6" style={SHADOWS.brutal}>
        <Text className="text-lg font-black text-[#1A1A2E] mb-2">About Me</Text>
        <Text className="text-[#1A1A2E] leading-6">{MOCK_CURRENT_USER.bio}</Text>
      </View>

      <View className="bg-white border-2 border-black rounded-2xl p-4 mb-6" style={SHADOWS.brutal}>
        <Text className="text-lg font-black text-[#1A1A2E] mb-3">Skills</Text>
        <View className="flex-row flex-wrap gap-2">
          {MOCK_CURRENT_USER.skills.map((skill: string) => (
            <Badge key={skill} label={skill} variant="outline" />
          ))}
        </View>
      </View>

      <Pressable 
        onPress={() => router.push('/profile/edit')}
        className="bg-[#1E40AF] border-2 border-black rounded-xl p-4 items-center mb-4"
        style={SHADOWS.brutal}
      >
        <Text className="text-white font-black text-lg">Edit Profile</Text>
      </Pressable>

      <Pressable 
        className="bg-white border-2 border-black rounded-xl p-4 items-center mb-12"
        style={SHADOWS.brutal}
      >
        <Text className="text-[#E53935] font-black text-lg">Sign Out</Text>
      </Pressable>
    </ScrollView>
  );
}
