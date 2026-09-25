import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  uri?: string;
  size?: AvatarSize;
  className?: string;
  name?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ uri, size = 'md', className = '', name }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'md':
        return 'w-12 h-12';
      case 'lg':
        return 'w-16 h-16';
      case 'xl':
        return 'w-24 h-24';
      default:
        return 'w-12 h-12';
    }
  };

  const placeholderImg = 'https://ui-avatars.com/api/?name=User&background=random';

  return (
    <View className={`border-2 border-black rounded-full overflow-hidden bg-white ${getSizeClasses()} ${className}`}>
      <Image
        source={{ uri: uri || placeholderImg }}
        contentFit="cover"
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};
