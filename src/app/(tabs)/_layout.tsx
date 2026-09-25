import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { COLORS } from '@/lib/theme';
import { Header } from '@/components/shared/Header';

export default function TabLayout() {
  return (
    <>
      {/* Assuming Header handles its own styling and is top-level */}
      <Header showAvatar={true} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.brand.red,
          tabBarInactiveTintColor: COLORS.brand.black,
          tabBarStyle: {
            backgroundColor: COLORS.brand.surface,
            borderTopWidth: 2,
            borderTopColor: COLORS.brand.black,
            elevation: 0,
            shadowOpacity: 0,
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>🏠</Text>,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>🧭</Text>,
          }}
        />
        <Tabs.Screen
          name="matches"
          options={{
            title: 'Matches',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>❤️</Text>,
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            headerShown: false,
            title: 'Chat',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>💬</Text>,
          }}
        />
      </Tabs>
    </>
  );
}
