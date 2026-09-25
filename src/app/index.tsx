import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LandingScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <View className="absolute -top-8 right-0 w-full max-w-[400px] h-[360px] z-10 pointer-events-none">
        <Image
          source={require('../../assets/images/hero-top.png')}
          style={{ width: '100%', height: '100%' }}
          contentFit="contain"
        />
      </View>

      <View style={{ paddingTop: insets.top + 20 }} className="px-6 flex-row items-center z-20">
        <Text className="text-[28px] font-black text-[#1A1A2E] tracking-tight">
          N <Text className="text-gray-500 font-bold">Mantra</Text>
        </Text>
      </View>

      <View className="flex-1 justify-center px-6 z-20 mt-4">
        <Text 
          className="text-[32px] font-black text-[#1A1A2E] leading-tight tracking-tighter"
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          <Text className="text-[#E53935]">Teach</Text> what you{' '}
          <Text className="underline decoration-[#1A1A2E]">know.</Text>
        </Text>

        <Text 
          className="text-[32px] font-black text-[#1A1A2E] leading-tight tracking-tighter mt-1 mb-2"
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          <Text className="text-[#1E40AF]">Learn</Text> what you love.
        </Text>

        <View className="self-start mt-2 relative">
          <View className="absolute inset-0 bg-[#1A1A2E] translate-x-[4px] translate-y-[4px]" />
          <View className="bg-[#FACC15] px-3 py-1">
            <Text className="text-[22px] font-black text-[#1A1A2E]">
              With <Text className="text-[#1E40AF]">Mantra</Text>
            </Text>
          </View>
        </View>

        <View className="mt-14 items-center w-full">
          <Button
            title="Get started with us"
            variant="accent"
            onPress={() => router.push('/(auth)/register')}
            className="w-full max-w-[340px]"
            fullWidth={true}
          />
        </View>
      </View>

      <View className="absolute bottom-0 left-0 right-0 h-[220px] z-10 pointer-events-none">
        <Image
          source={require('../../assets/images/hero-bottom.png')}
          style={{ width: '100%', height: '100%' }}
          contentFit="cover"
        />
      </View>
    </View>
  );
}
