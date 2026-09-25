import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Badge } from '@/components/ui/Badge';
import { SHADOWS } from '@/lib/theme';
import { ProfileWithSkills } from '@/types';

interface ProfileCardProps {
  profile: ProfileWithSkills;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View className="bg-white border-2 border-black rounded-2xl overflow-hidden w-full max-w-sm" style={SHADOWS.brutal}>
      <View className="relative w-full aspect-square bg-gray-200">
        <Image 
          source={{ uri: profile.profile_image_url || 'https://via.placeholder.com/400' }} 
          style={{ width: '100%', height: '100%' }}
          contentFit="cover"
        />
        <View className="absolute top-4 left-4">
          <Badge label={profile.intent} variant="primary" />
        </View>
      </View>
      
      <View className="p-4 border-t-2 border-black">
        <Text className="text-2xl font-black text-[#1A1A2E]">{profile.full_name}</Text>
        <Text className="text-md font-bold text-gray-600 mb-3">{profile.university} • {profile.major}</Text>
        
        <View className="flex-row flex-wrap gap-2 mb-4">
          {profile.skills?.slice(0, 3).map((skill: string) => (
            <Badge key={skill} label={skill} variant="outline" />
          ))}
        </View>

        <Pressable onPress={() => setExpanded(!expanded)} className="flex-row justify-between items-center py-2">
          <Text className="font-bold text-[#1A1A2E]">About Me</Text>
          <Text>{expanded ? '▲' : '▼'}</Text>
        </Pressable>
        
        {expanded && (
          <Text className="text-[#1A1A2E] mt-2 leading-6">{profile.bio}</Text>
        )}
      </View>
    </View>
  );
};
