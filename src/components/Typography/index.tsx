import React, { Ref, forwardRef, useMemo } from "react";
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  Text as RNText,
  TextProps as RNTextProps,
  ViewStyle,
  Platform,
} from "react-native";

import { getColors as colors } from "../../theme/colors";

// import { ThemeColor, ThemeColorAlias, ThemeFont } from "@smartrent/types";

// import { useTheme } from "../../utils/theme";

export type TextThemeColor =
  | "primary"
  | "secondary"
  | "white"
  | "gray050"
  | "gray100"
  | "gray200"
  | "gray300"
  | "gray400"
  | "gray500"
  | "gray600"
  | "gray700"
  | "gray800"
  | "gray900"
  | "gray950"
  | "black"
  | "pink"
  | "purple"
  | "deepPurple"
  | "indigo"
  | "darkBlue"
  | "blue"
  | "lightBlue"
  | "cyan"
  | "teal"
  | "green"
  | "lightGreen"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "deepOrange"
  | "brown";

export type TextType =
  | "body"
  | "bodyLarge"
  | "title"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "title6"
  | "caption";

export type ThemeFont =
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export interface TypographyProps
  extends Omit<RNTextProps, "maxFontSizeMultiplier"> {
  type?: TextType;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  color?: TextThemeColor;
  font?: ThemeFont;
}

/**
 * A text component with preset fonts, sizes, and colors.
 *
 * example: https://smartrent-ui.com/components/general/typography
 */
export const Typography = forwardRef(function Typography(
  { color, font, type = "body", style, ...rest }: TypographyProps,
  ref: Ref<RNText>
) {
  const colorStyle = useMemo(() => {
    if (!color) {
      return undefined;
    }
    return colors[color];
  }, [color]);

  const textSize = useMemo(() => {
    switch (type) {
      case "body":
        return 12;
      case "bodyLarge":
        return 18;
      case "title":
        return 32;
      case "title2":
        return 24;
      case "title3":
        return 20;
      case "title4":
        return 16;
      case "title5":
        return 14;
      case "title6":
        return 10;
      default:
        return undefined;
    }
  }, [type]);

  return (
    <RNText
      ref={ref}
      style={[
        { color: colorStyle, fontWeight: font, fontSize: textSize },
        style,
      ]}
      {...rest}
    />
  );
});
