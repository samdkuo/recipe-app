import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
} from "react-native";
import { colors } from "../../theme/colors";
import { Typography } from "..";

interface props extends Omit<RNTextInputProps, "style"> {
  label?: string;
  placeholder?: string;
  multi?: boolean;
  textInputProps?: RNTextInputProps;
  style?: StyleProp<ViewStyle>;
}

export const TextInput = ({
  label,
  placeholder,
  multi = false,
  textInputProps = {},
  style,
}: props) => {
  return (
    <View style={{ marginBottom: 8, flex: 1 }}>
      <Typography style={styles.label}>{label}</Typography>
      <RNTextInput
        {...textInputProps}
        placeholder={placeholder}
        style={[styles.input, style]}
        multiline={multi}
        numberOfLines={multi ? 4 : 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    textTransform: "capitalize",
    color: colors.gray700,
  },
  input: {
    height: 40,
    borderColor: colors.gray400,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    outlineColor: colors.cyan,
    outlineWidth: 1,
  },
});
