import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps & { rightIcon?: React.ReactNode }> = ({
  label,
  error,
  className = '',
  rightIcon,
  ...props
}) => {
  return (
    <View className={`w-full ${className}`}>
      {label && <Text className="font-medium text-black mb-2 text-[17px]">{label}</Text>}
      <View className="relative">
        <View className="absolute inset-0 bg-[#1A1A2E] translate-x-[4px] translate-y-[4px]" />
        <View className="flex-row items-center bg-white border-[2px] border-black">
          <TextInput
            className={`flex-1 px-4 py-3.5 text-black font-medium text-[16px] ${
              error ? 'bg-[#FEE2E2]' : ''
            }`}
            placeholderTextColor="#6B7280"
            {...props}
          />
          {rightIcon && <View className="pr-4">{rightIcon}</View>}
        </View>
      </View>
      {error && <Text className="text-[#E53935] font-bold mt-1 text-sm">{error}</Text>}
    </View>
  );
};
