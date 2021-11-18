import React from "react";
import { View } from "react-native";
import { Navigation } from "./index";

const Layout = ({ children, routes }: { children: any; routes: any }) => {
  return (
    <View
      style={{
        padding: 24,
        paddingTop: 8,
      }}
    >
      <Navigation routes={routes} />
      <View style={{ paddingTop: 16 }}>{children}</View>
    </View>
  );
};

export default Layout;
