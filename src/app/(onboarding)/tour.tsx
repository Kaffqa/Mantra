import React, { useState, useRef } from 'react';
import { View, Text, FlatList, useWindowDimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_TOUR_SLIDES = [
  { id: '1', emoji: '🚀', title: 'Teach what you know', description: 'Share your skills and knowledge with other students.' },
  { id: '2', emoji: '🧠', title: 'Learn what you love', description: 'Find a mentor and learn a new skill from your peers.' },
  { id: '3', emoji: '🤝', title: 'With Mantra', description: 'Join the community and grow together.' }
];

export default function TourScreen() {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    if (slideIndex !== currentIndex) {
      setCurrentIndex(slideIndex);
    }
  };

  const nextSlide = () => {
    if (currentIndex < MOCK_TOUR_SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push('/(onboarding)/upload-face');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        ref={flatListRef}
        data={MOCK_TOUR_SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width }} className="flex-1 justify-center items-center p-6">
            <Text className="text-8xl mb-8">{item.emoji}</Text>
            <Text className="text-3xl font-bold text-center mb-4 text-[#1A1A2E]">{item.title}</Text>
            <Text className="text-lg text-center text-gray-600">{item.description}</Text>
          </View>
        )}
      />
      
      <View className="p-6">
        <View className="flex-row justify-center mb-6 space-x-2">
          {MOCK_TOUR_SLIDES.map((_, index) => (
            <View 
              key={index} 
              className={`h-3 rounded-full ${index === currentIndex ? 'w-6 bg-[#1A1A2E]' : 'w-3 bg-gray-300'}`} 
            />
          ))}
        </View>
        
        <Button 
          title={currentIndex === MOCK_TOUR_SLIDES.length - 1 ? 'Get Started' : 'Next'} 
          variant="primary" 
          onPress={nextSlide}
        />
      </View>
    </SafeAreaView>
  );
}
