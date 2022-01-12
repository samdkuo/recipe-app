import React, { ReactNode, useState } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { Typography } from "..";
import { colors } from "../../theme/colors";
import { PressableState } from "./types";

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
      style={({ hovered }: PressableState) => [
        {
          // paddingHorizontal: 16,
          paddingVertical: 4,
          borderColor: colors.primary,
          borderWidth: 1,
          borderRadius: 20,
          alignItems: "center",
          backgroundColor: colors.primary,
          opacity: hovered ? 0.7 : 1,
        },
        style,
      ]}
    >
      {typeof children === "string" ? (
        <Typography color="white" font="600">
          {children}
        </Typography>
      ) : (
        children
      )}
    </Pressable>
  );
}
