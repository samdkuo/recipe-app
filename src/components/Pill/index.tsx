import React, { ReactNode } from "react";
import { Pressable } from "react-native";
import { Typography } from "..";
import { colors } from "../../theme/colors";

interface pillProps {
  children: string | ReactNode;
  icon?: string;
  onPress?: () => void;
}

export function Pill({ children, icon, onPress = () => {} }: pillProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 20,
      }}
    >
      {typeof children === "string" ? (
        <Typography>{children}</Typography>
      ) : (
        children
      )}
    </Pressable>
  );
}
