import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <View className="absolute bottom-[-100px] left-[-10px] right-[-10px] h-[380px] z-0 pointer-events-none">
        <Image
          source={require('../../../assets/images/login-bottom.png')}
          style={{ width: '100%', height: '100%' }}
          contentFit="cover"
          contentPosition="top"
        />
      </View>

      <ScrollView 
        className="flex-1 z-10" 
        contentContainerStyle={{ flexGrow: 1, paddingTop: insets.top + 20, paddingBottom: insets.bottom + 320, paddingHorizontal: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center mb-6">
          <Text className="text-[28px] font-black text-[#1A1A2E] tracking-tight">
            N <Text className="text-gray-500 font-bold">Mantra</Text>
          </Text>
        </View>

        <View className="mb-8 flex-row justify-between items-start">
          <View className="flex-1 pr-4">
            <Text 
              className="text-[36px] font-black mb-1 tracking-tight leading-none"
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              <Text className="text-[#E53935]">Welcome </Text>
              <Text className="text-[#1E40AF]">back!</Text>
            </Text>
            <Text className="text-[#1A1A2E] text-[18px] font-medium leading-relaxed mt-1">
              Learn from peers. Teach what you know
            </Text>
          </View>
          
          <View className="w-[110px] h-[110px] mt-[-10px] mr-[-10px] z-0 shrink-0">
            <Image
              source={require('../../../assets/images/login-top.png')}
              style={{ width: '100%', height: '100%' }}
              contentFit="contain"
            />
          </View>
        </View>

        <View className="mb-5">
          <Input 
            label="enter your college email" 
            placeholder="example@telkomuniversity.ac.id" 
            value={email} 
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-2">
          <Input 
            label="enter your password" 
            placeholder="enter your password here" 
            value={password} 
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye-outline" : "eye-off-outline"} 
                  size={24} 
                  color="#9CA3AF" 
                />
              </TouchableOpacity>
            }
          />
        </View>

        <View className="items-end mb-6">
          <TouchableOpacity onPress={() => console.log('Forgot password pressed')}>
            <Text className="text-[14px] text-[#4A90E2] font-medium">
              forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-4 mt-2">
          <View className="flex-1">
            <Button 
              title="SIGN IN" 
              variant="primary" 
              onPress={() => router.push('/(auth)/verify-otp')}
              fullWidth
            />
          </View>
          <View className="flex-1">
            <Button 
              title="SIGN UP" 
              variant="secondary" 
              onPress={() => router.push('/(auth)/register')}
              fullWidth
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
