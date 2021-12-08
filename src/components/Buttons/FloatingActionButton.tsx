import React, { Ref, useMemo, forwardRef, ReactNode } from "react";
import { FiPlus } from "react-icons/fi";
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
import { colors, colorBrightness } from "../../theme/colors";

export interface FloatingActionButtonProps {
  contentStyle?: StyleProp<ViewStyle>; // Allow overriding the inner container <View /> styles
  disabled?: boolean;
  linearGradientStyle?: StyleProp<ViewStyle>; // Allow overriding the <LinearGradient /> styles
  onPress?: TouchableWithoutFeedbackProps["onPress"];
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>; // Allow overriding the <Pressable /> styles
  textStyle?: StyleProp<TextStyle>; // Allow overriding the <Text /> styles
  variation?: ButtonVariation;

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
 * A FloatingActionButton component with default styles.
 *
 * example: https://smartrent-ui.com/components/general/FloatingActionButton
 */
export const FloatingActionButton = forwardRef(function FloatingActionButton(
  {
    disabled = false,
    onPress,
    size,
    style,
    variation = "default",
    href,
    rel,
    target,
    download,
    ...props
  }: FloatingActionButtonProps,
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

  const floatingFloatingActionButtonStyles = useMemo(() => {
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

  return (
    <Pressable
      accessibilityRole={href ? "link" : "button"}
      onPress={onPress}
      style={({ pressed, hovered }: PressableState) => [
        styles.root,
        floatingFloatingActionButtonStyles,
        {
          backgroundColor:
            pressed &&
            floatingFloatingActionButtonStyles.backgroundColor &&
            variation === "default"
              ? colorBrightness(
                  floatingFloatingActionButtonStyles.backgroundColor,
                  0.1
                )
              : Platform.OS === "web" &&
                hovered &&
                floatingFloatingActionButtonStyles.backgroundColor &&
                variation === "default"
              ? colorBrightness(
                  floatingFloatingActionButtonStyles.backgroundColor,
                  0.1
                )
              : floatingFloatingActionButtonStyles.backgroundColor,
        },
        style,
      ]}
      disabled={disabled}
      ref={ref}
      {...props}
      // {...linkProps}
    >
      <FiPlus />
    </Pressable>
  );
});

FloatingActionButton.displayName = "FloatingActionButton";

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
