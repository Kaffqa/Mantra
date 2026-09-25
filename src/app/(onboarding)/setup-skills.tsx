import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { SHADOWS } from '@/lib/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const INTENTS = ['Teach', 'Learn', 'Both'];
const POPULAR_SKILLS = ['React Native', 'Figma', 'Python', 'UI/UX', 'Node.js', 'Marketing'];

export default function SetupSkillsScreen() {
  const [selectedIntent, setSelectedIntent] = useState('Both');
  const [skills, setSkills] = useState<string[]>(['React Native']);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
        <Text className="text-3xl font-bold mb-8 text-[#1A1A2E]">Setup Your Profile</Text>

        <View className="mb-8">
          <Text className="text-lg font-bold mb-4 text-[#1A1A2E]">What do you want to do?</Text>
          <View className="flex-row justify-between">
            {INTENTS.map((intent) => (
              <Pressable
                key={intent}
                onPress={() => setSelectedIntent(intent)}
                className={`px-6 py-3 border-2 border-black rounded-xl ${selectedIntent === intent ? 'bg-[#FACC15]' : 'bg-white'}`}
                style={SHADOWS.brutalSm}
              >
                <Text className="font-bold text-[#1A1A2E]">{intent}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-lg font-bold mb-4 text-[#1A1A2E]">Your Skills</Text>
          
          <View className="flex-row flex-wrap mb-4">
            {skills.map((skill) => (
              <View 
                key={skill} 
                className="flex-row items-center bg-[#4DB6AC] border-2 border-black rounded-full px-3 py-1 mr-2 mb-2"
                style={SHADOWS.brutalSm}
              >
                <Text className="font-bold text-[#1A1A2E] mr-2">{skill}</Text>
                <Pressable onPress={() => removeSkill(skill)}>
                  <Text className="font-bold text-[#1A1A2E]">✕</Text>
                </Pressable>
              </View>
            ))}
          </View>

          <View className="flex-row mb-4">
            <View className="flex-1 border-2 border-black bg-white rounded-lg px-4 h-12 mr-2 justify-center" style={SHADOWS.brutalSm}>
              <TextInput
                value={newSkill}
                onChangeText={setNewSkill}
                placeholder="Add a skill..."
                className="font-bold"
                onSubmitEditing={() => addSkill(newSkill)}
              />
            </View>
            <View className="justify-center">
              <Button 
                title="Add" 
                variant="secondary" 
                onPress={() => addSkill(newSkill)}
              />
            </View>
          </View>

          <Text className="text-sm font-bold text-gray-500 mb-2">Popular Skills:</Text>
          <View className="flex-row flex-wrap">
            {POPULAR_SKILLS.map((skill) => (
              <Pressable 
                key={skill}
                onPress={() => addSkill(skill)}
                className="bg-gray-100 border-2 border-black rounded-full px-3 py-1 mr-2 mb-2"
              >
                <Text className="font-bold text-gray-700">+{skill}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      <View className="p-6 bg-white border-t-2 border-black">
        <Button 
          title="Complete Setup" 
          variant="primary" 
          onPress={() => router.replace('/(tabs)')}
        />
      </View>
    </SafeAreaView>
  );
}
