import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Avatar } from '../ui/Avatar';

export interface HeaderProps {
  showAvatar?: boolean;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ showAvatar = true, className = '' }) => {
  return (
    <View className={`flex-row items-center justify-between px-4 py-3 bg-[#FAFAFA] border-b-2 border-black ${className}`}>
      <View className="flex-row items-center">
        <Text className="text-2xl font-black text-black tracking-tight">
          N <Text className="text-[#E53935]">Mantra</Text>
        </Text>
      </View>
      
      {showAvatar && (
        <TouchableOpacity 
          onPress={() => router.push('/profile')}
          activeOpacity={0.7}
        >
          <Avatar size="sm" />
        </TouchableOpacity>
      )}
    </View>
  );
};
