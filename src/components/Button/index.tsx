import React from "react";
import { Pressable } from "react-native";
import { Typography } from "..";
import { colors } from "../../theme/colors";

export const Button = () => {
  return (
    <Pressable
      style={{
        height: 40,
        padding: 8,
        marginTop: 4,
        borderRadius: 4,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
      // onPress={() => handleSubmit(values)}
    >
      <Typography style={{ color: "white" }}>Submit</Typography>
    </Pressable>
  );
};
