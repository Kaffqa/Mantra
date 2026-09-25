import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { SHADOWS } from '@/lib/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VerifyOtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <View className="mb-8">
          <Text className="text-3xl font-bold mb-2 text-[#1A1A2E]">Verify Your Email</Text>
          <Text className="text-gray-600 text-lg">We sent a code to your email.</Text>
        </View>

        <View className="flex-row justify-between mb-8">
          {otp.map((digit, index) => (
            <View 
              key={index} 
              className="w-12 h-14 bg-white border-2 border-black rounded-lg justify-center items-center"
              style={SHADOWS.brutalSm}
            >
              <TextInput 
                className="text-2xl font-bold text-center w-full h-full"
                maxLength={1}
                keyboardType="number-pad"
                value={digit}
                onChangeText={(val) => {
                  const newOtp = [...otp];
                  newOtp[index] = val;
                  setOtp(newOtp);
                }}
              />
            </View>
          ))}
        </View>

        <Button 
          title="VERIFY" 
          variant="primary" 
          onPress={() => router.replace('/(onboarding)/tour')}
          className="mb-6"
        />
        
        <Pressable className="items-center">
          <Text className="text-[#1E40AF] font-bold text-lg">Resend OTP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
