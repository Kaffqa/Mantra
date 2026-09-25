import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ProfileCard } from '@/components/explore/ProfileCard';
import { FilterModal } from '@/components/explore/FilterModal';
import { MOCK_PROFILES } from '@/data/mock';
import { SHADOWS } from '@/lib/theme';

export default function ExploreScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterVisible, setFilterVisible] = useState(false);

  const handleNext = () => {
    if (currentIndex < MOCK_PROFILES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentProfile = MOCK_PROFILES[currentIndex];

  return (
    <View className="flex-1 bg-[#FAFAFA] p-4">
      <View className="flex-row justify-end mb-4">
        <Pressable 
          onPress={() => setFilterVisible(true)}
          className="bg-white border-2 border-black rounded-xl px-4 py-2"
          style={SHADOWS.brutal}
        >
          <Text className="font-bold text-[#1A1A2E]">Filters ⚙️</Text>
        </Pressable>
      </View>

      <View className="flex-1 items-center justify-center">
        {currentProfile ? (
          <ProfileCard profile={currentProfile} />
        ) : (
          <Text className="text-xl font-bold text-gray-500">No more profiles!</Text>
        )}
      </View>

      {currentProfile && (
        <View className="flex-row justify-center mt-6 space-x-8 gap-8">
          <Pressable 
            onPress={handleNext}
            className="w-16 h-16 bg-white border-2 border-black rounded-full items-center justify-center"
            style={SHADOWS.brutal}
          >
            <Text className="text-2xl">❌</Text>
          </Pressable>
          <Pressable 
            onPress={handleNext}
            className="w-16 h-16 bg-[#E53935] border-2 border-black rounded-full items-center justify-center"
            style={SHADOWS.brutal}
          >
            <Text className="text-2xl text-white">❤️</Text>
          </Pressable>
        </View>
      )}

      <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />
    </View>
  );
}
