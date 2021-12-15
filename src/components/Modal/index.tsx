import React, { useEffect, useRef, ReactNode } from "react";
import { Animated, Platform, TouchableWithoutFeedback } from "react-native";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { colors } from "../../theme/colors";

export interface ModalProps {
  children: ReactNode;
  visible?: boolean;
  onBackdropPress?: () => void;
  backdropOpacity?: number;
}

export function Modal({
  visible,
  children,
  onBackdropPress,
  backdropOpacity = 0.5,
}: ModalProps) {
  const animatedState = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animatedState, {
      toValue: visible ? 1 : 0,
      overshootClamping: true,
      useNativeDriver: Platform.OS === "web" ? false : true,
    }).start();
  }, [animatedState, visible]);

  return visible ? (
    <Portal>
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: colors.black,
            opacity: animatedState.interpolate({
              inputRange: [0, 1],
              outputRange: [0, backdropOpacity],
            }),
          }}
        />
      </TouchableWithoutFeedback>
      <FocusLock>{children}</FocusLock>
    </Portal>
  ) : null;
}
