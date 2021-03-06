import React, { forwardRef } from "react";
import { Link as RLink } from "react-router-dom";
import { Pressable, StyleProp, TextStyle } from "react-native";
import { colors } from "../../theme/colors";

type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export const Link = forwardRef(function Link({
  link,
  style,
}: {
  link: string;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <RLink to={link} style={{ textDecoration: "none", fontFamily: "Aleo" }}>
      <Pressable
        style={({ pressed, hovered }: PressableState) => [
          {
            color: pressed
              ? colors.primary
              : hovered
              ? colors.primaryMuted
              : colors.gray700,
            fontSize: 16,
          },
          style,
        ]}
      >
        {link}
      </Pressable>
    </RLink>
  );
});
