import React from "react";
import { View } from "react-native";
import { colors } from "../theme/colors";
import { dimensions } from "./types";

const Layout = ({ children }: { children: any }) => {
  return (
    <View
      style={{
        backgroundColor: colors.secondary,
        padding: 24,
        minHeight: "100vh",
      }}
    >
      {children}
    </View>
  );
};

export default Layout;
