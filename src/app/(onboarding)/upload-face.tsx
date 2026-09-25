import React from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { SHADOWS } from '@/lib/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UploadFaceScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-bold mb-4 text-[#1A1A2E]">Add Your Photo</Text>
        <Text className="text-lg text-center text-gray-600 mb-10">
          Upload a clear photo of your face so others can recognize you.
        </Text>
        
        <View 
          className="w-48 h-48 bg-gray-100 rounded-full border-4 border-black items-center justify-center mb-10"
          style={SHADOWS.brutal}
        >
          <Text className="text-6xl">📷</Text>
        </View>

        <View className="w-full space-y-4">
          <Button 
            title="Take Photo" 
            variant="primary" 
            onPress={() => router.push('/(onboarding)/scan-ktm')}
            className="mb-4"
          />
          <Button 
            title="Choose from Gallery" 
            variant="secondary" 
            onPress={() => router.push('/(onboarding)/scan-ktm')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
