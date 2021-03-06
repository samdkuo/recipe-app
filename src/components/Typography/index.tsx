import React, { Ref, forwardRef, useMemo } from "react";
import {
  StyleProp,
  TextStyle,
  Text as RNText,
  TextProps as RNTextProps,
} from "react-native";

import { colors, TextThemeColor } from "../../theme/colors";

export type FontFamily = "Aleo" | "Open Sans";

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
  fontFamily?: FontFamily;
}

/**
 * A text component with preset fonts, sizes, and colors.
 *
 * example: https://smartrent-ui.com/components/general/typography
 */
export const Typography = forwardRef(function Typography(
  {
    color = "gray700",
    font,
    fontFamily = "Open Sans",
    type = "body",
    style,
    ...rest
  }: TypographyProps,
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
        return 14;
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
        return 12;
      default:
        return undefined;
    }
  }, [type]);

  return (
    <RNText
      ref={ref}
      style={[
        {
          color: colorStyle,
          fontWeight: font,
          fontSize: textSize,
          fontFamily: fontFamily,
        },
        style,
      ]}
      {...rest}
    />
  );
});
