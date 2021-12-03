import React, { forwardRef } from "react";
import { Link as RLink } from "react-router-dom";
import { Pressable, StyleProp, TextStyle } from "react-native";
import { Typography } from "..";
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
    <Pressable
      style={({ pressed, hovered }: PressableState) => [
        {
          color: pressed
            ? colors.amber
            : hovered
            ? colors.cyan
            : colors.gray700,
        },
        style,
      ]}
    >
      <RLink to={link} style={{ textDecoration: "none" }}>
        <Typography
          // font="600"
          style={{
            fontSize: 16,
            marginLeft: 16,
            // textShadowColor: colors.tertiary,
            // textShadowOffset: { width: 2, height: 2 },
            // textShadowRadius: 2,
          }}
        >
          {link}
        </Typography>
      </RLink>
    </Pressable>
  );
});
