import React from 'react';
import { View, Text } from 'react-native';

export type BadgeVariant = 'red' | 'blue' | 'yellow' | 'green' | 'primary' | 'outline';

export interface BadgeProps {
  text?: string;
  label?: string;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, label, variant = 'blue', className = '' }) => {
  const displayText = text || label || '';

  const getVariantClasses = () => {
    switch (variant) {
      case 'red':
      case 'primary':
        return 'bg-[#E53935]';
      case 'blue':
        return 'bg-[#1E40AF]';
      case 'yellow':
        return 'bg-[#FACC15]';
      case 'green':
        return 'bg-[#4DB6AC]';
      case 'outline':
        return 'bg-white';
      default:
        return 'bg-[#1E40AF]';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'yellow':
      case 'outline':
        return 'text-black';
      default:
        return 'text-white';
    }
  };

  return (
    <View className={`border-2 border-black rounded-full px-3 py-1 self-start ${getVariantClasses()} ${className}`}>
      <Text className={`font-bold text-xs ${getTextColor()}`}>{displayText}</Text>
    </View>
  );
};
