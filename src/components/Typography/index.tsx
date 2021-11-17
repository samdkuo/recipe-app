import React, { Ref, forwardRef } from "react";
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  Text as RNText,
  TextProps as RNTextProps,
  ViewStyle,
  Platform,
} from "react-native";

// import { ThemeColor, ThemeColorAlias, ThemeFont } from "@smartrent/types";

// import { useTheme } from "../../utils/theme";

export type TextThemeColor =
  // Exclude<
  //   ThemeColor | ThemeColorAlias,
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
  | "black";
// >;

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
  { color, font, style, ...rest }: TypographyProps,
  ref: Ref<RNText>
) {
  // const { colors, fonts } = useTheme();

  // const colorStyle = useMemo(() => {
  //   if (!color) return undefined;
  //   return colors[color as ThemeColor];
  // }, [colors, color]);

  // const fontStyle = useMemo(() => {
  //   if (!font) {
  //     return undefined;
  //   }
  //   return fonts[font];
  // }, [fonts, font]);

  return (
    <RNText
      ref={ref}
      style={[{ color: color }, { fontWeight: font }, style]}
      {...rest}
    />
  );
});
