import React, { useEffect, useRef, ReactNode } from "react";
import {
  Animated,
  Platform,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { colors } from "../../theme/colors";

export interface ModalProps {
  children: ReactNode;
  visible?: boolean;
  onBackdropPress?: () => void;
  backdropOpacity?: number;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}

export function Modal({
  visible,
  children,
  onBackdropPress,
  backdropOpacity = 0.5,
  style,
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
      <FocusLock>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          }}
          role="dialog"
        >
          <Animated.View
            style={[
              {
                opacity: animatedState.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
                transform: [
                  {
                    translateY: animatedState.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
              style,
            ]}
          >
            {children}
          </Animated.View>
        </div>
      </FocusLock>
    </Portal>
  ) : null;
}
