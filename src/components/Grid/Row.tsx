import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";

interface RowProps extends ViewProps {
  children: ReactNode;
}

export function Row({ style, children, ...props }: RowProps) {
  return (
    <View style={[{ flexDirection: "row" }, style]} {...props}>
      {children}
    </View>
  );
}
