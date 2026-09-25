import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export interface SkillTagProps {
  name: string;
  onRemove?: () => void;
  className?: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ name, onRemove, className = '' }) => {
  return (
    <View className={`flex-row items-center bg-[#FAFAFA] border-2 border-black rounded-full px-3 py-1 mr-2 mb-2 ${className}`}>
      <Text className="text-black font-bold text-sm">#{name}</Text>
      {onRemove && (
        <TouchableOpacity onPress={onRemove} className="ml-2 bg-black rounded-full w-4 h-4 items-center justify-center">
          <Text className="text-white text-[10px] font-bold leading-none">✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
