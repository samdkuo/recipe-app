import React from "react";
import { View } from "react-native";
import { colors } from "../theme/colors";
import { dimensions } from "./types";

const Layout = ({ children }: { children: any }) => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        padding: dimensions.mainPadding,
        minHeight: `calc(100vh - ${dimensions.headerHeight}px)`,
      }}
    >
      {children}
    </View>
  );
};

export default Layout;
