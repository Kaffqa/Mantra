import React from 'react';
import { View, Text, Modal, TextInput, Pressable } from 'react-native';
import { SHADOWS } from '@/lib/theme';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white border-t-2 border-x-2 border-black rounded-t-3xl p-6" style={SHADOWS.brutalLg}>
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-black text-[#1A1A2E]">Filters</Text>
            <Pressable onPress={onClose}>
              <Text className="text-2xl">❌</Text>
            </Pressable>
          </View>

          <View className="mb-4">
            <Text className="font-bold text-[#1A1A2E] mb-2">University</Text>
            <TextInput 
              className="bg-white border-2 border-black rounded-xl p-3 font-bold"
              placeholder="e.g. Universitas Gadjah Mada"
              style={SHADOWS.brutal}
            />
          </View>

          <View className="mb-6">
            <Text className="font-bold text-[#1A1A2E] mb-2">Major</Text>
            <TextInput 
              className="bg-white border-2 border-black rounded-xl p-3 font-bold"
              placeholder="e.g. Computer Science"
              style={SHADOWS.brutal}
            />
          </View>

          <View className="flex-row gap-4 mt-4">
            <Pressable 
              onPress={onClose}
              className="flex-1 bg-white border-2 border-black rounded-xl p-4 items-center"
              style={SHADOWS.brutal}
            >
              <Text className="font-black text-[#1A1A2E]">Reset</Text>
            </Pressable>
            <Pressable 
              onPress={onClose}
              className="flex-1 bg-[#1E40AF] border-2 border-black rounded-xl p-4 items-center"
              style={SHADOWS.brutal}
            >
              <Text className="font-black text-white">Apply</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
