import React, { Ref, useMemo, forwardRef, ReactNode } from "react";
import {
  Pressable,
  TouchableWithoutFeedbackProps,
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
} from "react-native";

import { ButtonSize, ButtonVariation, PressableState } from "./types";
import { Typography } from "../index";
import { colors, colorBrightness } from "../../theme/colors";

export interface ButtonProps {
  contentStyle?: StyleProp<ViewStyle>; // Allow overriding the inner container <View /> styles
  disabled?: boolean;
  linearGradientStyle?: StyleProp<ViewStyle>; // Allow overriding the <LinearGradient /> styles
  onPress?: TouchableWithoutFeedbackProps["onPress"];
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>; // Allow overriding the <Pressable /> styles
  textStyle?: StyleProp<TextStyle>; // Allow overriding the <Text /> styles
  variation?: ButtonVariation;
  children: ReactNode;

  /**
   * @platform web
   */
  href?: string;
  /**
   * @platform web
   */
  target?: string;
  /**
   * @platform web
   */
  rel?: string;
  /**
   * @platform web
   */
  download?: string;
}

/**
 * A button component with default styles.
 *
 * example: https://smartrent-ui.com/components/general/button
 */
export const Button = forwardRef(function Button(
  {
    children,
    contentStyle,
    disabled = false,
    onPress,
    size,
    style,
    textStyle,
    variation = "default",
    href,
    rel,
    target,
    download,
    ...props
  }: ButtonProps,
  ref: Ref<View>
) {
  const normalizedSize = useMemo<ButtonSize>(() => {
    return size
      ? size
      : Platform.select<ButtonSize>({
          web: "small",
          default: "large",
        });
  }, [size]);

  // const linkProps = Platform.select<PressableProps>({
  //   web: {
  //     href,
  //     hrefAttrs: {
  //       rel,
  //       target,
  //       download,
  //     },
  //   },
  // });

  const sizeStyles = useMemo(() => {
    switch (normalizedSize) {
      case "large": {
        return {
          paddingVertical: 18,
          paddingHorizontal: 24,
        };
      }
      // defaults to the small size
      default: {
        return {
          paddingVertical: 10,
          paddingHorizontal: 24,
        };
      }
    }
  }, [normalizedSize]);

  const textColorStyles = useMemo(() => {
    switch (variation) {
      case "default": {
        if (disabled) {
          return {
            color: colors.gray400,
          };
        }
        return {
          color: colors.white,
        };
      }
      case "outlined": {
        if (disabled) {
          return {
            color: colors.gray400,
          };
        }
        return {
          color: colors.primary,
        };
      }
      case "plain": {
        if (disabled) {
          return {
            color: colors.gray400,
          };
        }
        return {
          color: colors.primary,
        };
      }
    }
  }, [variation, disabled]);

  const textSizeStyles = useMemo(() => {
    switch (normalizedSize) {
      case "large": {
        return {
          fontSize: 18,
          lineHeight: 20,
        };
      }
      // defaults to the small size
      default: {
        return {
          fontSize: 14,
          lineHeight: 20,
        };
      }
    }
  }, [normalizedSize]);

  const buttonStyles = useMemo(() => {
    switch (variation) {
      case "default": {
        if (disabled) {
          return {
            backgroundColor: colors.gray400,
            borderWidth: 0,
          };
        }
        return {
          borderWidth: 0,
          backgroundColor: colors.primary,
        };
      }
      case "outlined": {
        if (disabled) {
          return {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: colors.gray400,
          };
        }
        return {
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: colors.primary,
        };
      }
      case "plain": {
        if (disabled) {
          return {
            backgroundColor: "transparent",
            borderWidth: 0,
          };
        }
        return {
          backgroundColor: "transparent",
          borderWidth: 0,
        };
      }
    }
  }, [variation, disabled]);

  const content =
    typeof children === "string" ? (
      <View
        style={[
          styles.content,
          sizeStyles,
          {
            margin: variation === "outlined" ? -2 : 0, // Artificially remove 2px height/width because we'll have a border on all sides from the Pressable's getButtonStyles()
          },
          contentStyle,
        ]}
      >
        <Typography
          font="600"
          style={[styles.text, textColorStyles, textSizeStyles, textStyle]}
        >
          {children}
        </Typography>
      </View>
    ) : (
      children
    );

  return (
    <Pressable
      accessibilityRole={href ? "link" : "button"}
      onPress={onPress}
      style={({ pressed, hovered }: PressableState) => [
        styles.root,
        buttonStyles,
        {
          backgroundColor:
            pressed && buttonStyles.backgroundColor && variation === "default"
              ? colorBrightness(buttonStyles.backgroundColor, 0.1)
              : Platform.OS === "web" &&
                hovered &&
                buttonStyles.backgroundColor &&
                variation === "default"
              ? colorBrightness(buttonStyles.backgroundColor, 0.1)
              : buttonStyles.backgroundColor,
        },
        style,
      ]}
      disabled={disabled}
      ref={ref}
      {...props}
      // {...linkProps}
    >
      {content}
    </Pressable>
  );
});

Button.displayName = "Button";

const styles = StyleSheet.create({
  root: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden", // Force the borderRadius crop on Touchable descendents (specifically LinearGradient)
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    textTransform: "capitalize",
  },
});
