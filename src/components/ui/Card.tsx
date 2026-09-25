import React from 'react';
import { View, ViewProps } from 'react-native';
import { SHADOWS } from '@/lib/theme';

export interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <View
      style={SHADOWS.brutal}
      className={`bg-white border-2 border-black rounded-2xl p-4 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};
