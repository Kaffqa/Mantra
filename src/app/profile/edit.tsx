import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { MOCK_CURRENT_USER } from '@/data/mock';
import { SHADOWS } from '@/lib/theme';

export default function EditProfileScreen() {
  const [bio, setBio] = useState(MOCK_CURRENT_USER.bio);

  return (
    <ScrollView className="flex-1 bg-[#FAFAFA] p-4 pt-12">
      <View className="flex-row items-center mb-6">
        <Pressable onPress={() => router.back()} className="mr-4">
          <Text className="text-2xl">⬅️</Text>
        </Pressable>
        <Text className="text-2xl font-black text-[#1A1A2E]">Edit Profile</Text>
      </View>

      <View className="mb-6">
        <Text className="font-bold text-[#1A1A2E] mb-2">Bio</Text>
        <TextInput
          className="bg-white border-2 border-black rounded-xl p-4 text-[#1A1A2E] min-h-[100px]"
          multiline
          value={bio}
          onChangeText={setBio}
          style={SHADOWS.brutal}
          textAlignVertical="top"
        />
      </View>

      <View className="mb-6">
        <Text className="font-bold text-[#1A1A2E] mb-2">Intent</Text>
        <Pressable className="bg-white border-2 border-black rounded-xl p-4 flex-row justify-between" style={SHADOWS.brutal}>
          <Text className="text-[#1A1A2E]">{MOCK_CURRENT_USER.intent}</Text>
          <Text>▼</Text>
        </Pressable>
      </View>

      <Pressable 
        onPress={() => router.back()}
        className="bg-[#E53935] border-2 border-black rounded-xl p-4 items-center mt-6"
        style={SHADOWS.brutal}
      >
        <Text className="text-white font-black text-lg">Save Changes</Text>
      </Pressable>
    </ScrollView>
  );
}
