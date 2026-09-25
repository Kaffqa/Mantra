import React from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScanKtmScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-bold mb-4 text-[#1A1A2E]">Verify Student ID</Text>
        <Text className="text-lg text-center text-gray-600 mb-10">
          Scan your KTM (Kartu Tanda Mahasiswa) to verify your student status.
        </Text>
        
        <View 
          className="w-full h-64 bg-gray-100 border-4 border-black rounded-2xl items-center justify-center mb-10 border-dashed"
        >
          <Text className="text-4xl">💳</Text>
          <Text className="font-bold mt-4 text-[#1A1A2E]">Place KTM here</Text>
        </View>

        <View className="w-full">
          <Button 
            title="Scan KTM" 
            variant="primary" 
            onPress={() => router.push('/(onboarding)/review-data')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
