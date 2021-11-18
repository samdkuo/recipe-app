import React from "react";
import { View } from "react-native";
import { colors } from "../theme/colors";
import { Navigation } from "./index";

const Layout = ({ children, routes }: { children: any; routes: any }) => {
  return (
    <View
      style={{
        backgroundColor: colors.secondary,
        padding: 24,
        paddingTop: 8,
        minHeight: "100vh",
      }}
    >
      <Navigation routes={routes} />
      <View style={{ paddingTop: 16 }}>{children}</View>
    </View>
  );
};

export default Layout;
