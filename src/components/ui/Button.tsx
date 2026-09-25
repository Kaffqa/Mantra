import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  loading = false,
  className = '',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary': return 'bg-[#E53935]';
      case 'secondary': return 'bg-[#1E40AF]';
      case 'accent': return 'bg-[#FACC15]';
      case 'outline': return 'bg-white';
      default: return 'bg-[#E53935]';
    }
  };

  const getTextColorClasses = () => {
    switch (variant) {
      case 'primary':
      case 'secondary': return 'text-white';
      case 'accent':
      case 'outline': return 'text-[#1A1A2E]';
      default: return 'text-white';
    }
  };

  return (
    <View className={`${fullWidth ? 'w-full' : 'self-start'} ${className}`}>
      {/* 
        Lapisan Bayangan Solid (Hard Shadow) 
        Ini akan menjamin shadow Neo-Brutalism tampil solid di Android, 
        tanpa efek blur dari 'elevation' 
      */}
      {!disabled && !loading && (
        <View 
          className="absolute inset-0 bg-[#1A1A2E] translate-x-[6px] translate-y-[6px]" 
        />
      )}
      
      {/* Lapisan Tombol Utama */}
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        className={`border-[2px] border-black px-3 py-4 flex-row justify-center items-center ${
          disabled ? 'opacity-50' : ''
        } ${getVariantClasses()}`}
      >
        {loading ? (
          <ActivityIndicator color={variant === 'outline' || variant === 'accent' ? '#1A1A2E' : '#FFFFFF'} />
        ) : (
          <Text 
            className={`font-black text-[15px] text-center ${getTextColorClasses()}`}
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
