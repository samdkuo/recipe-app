import React, { ReactNode } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { Typography } from "..";
import { colors } from "../../theme/colors";

interface pillProps {
  children: string | ReactNode;
  icon?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Pill({ children, icon, onPress = () => {}, style }: pillProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          paddingHorizontal: 16,
          paddingVertical: 4,
          borderColor: colors.primary,
          borderWidth: 1,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {typeof children === "string" ? (
        <Typography>{children}</Typography>
      ) : (
        children
      )}
    </Pressable>
  );
}
