import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SHADOWS } from '@/lib/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReviewDataScreen() {
  const [name, setName] = useState('Budi Santoso');
  const [univ, setUniv] = useState('Universitas AMIKOM');
  const [jurusan, setJurusan] = useState('Informatika');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
        <View className="items-center mb-8">
          <View className="bg-green-100 border-2 border-black rounded-full px-4 py-1 mb-4" style={SHADOWS.brutalSm}>
            <Text className="font-bold text-green-700">✓ AI Detected Data</Text>
          </View>
          <Text className="text-3xl font-bold text-[#1A1A2E] text-center">Review Your Info</Text>
        </View>

        <View className="space-y-4 mb-8">
          <View className="mb-4">
            <Input label="Nama" value={name} onChangeText={setName} />
          </View>
          <View className="mb-4">
            <Input label="Universitas" value={univ} onChangeText={setUniv} />
          </View>
          <View className="mb-4">
            <Input label="Jurusan" value={jurusan} onChangeText={setJurusan} />
          </View>
        </View>
      </ScrollView>
      
      <View className="p-6 bg-white border-t-2 border-black">
        <Button 
          title="Continue" 
          variant="primary" 
          onPress={() => router.push('/(onboarding)/setup-skills')}
        />
      </View>
    </SafeAreaView>
  );
}
