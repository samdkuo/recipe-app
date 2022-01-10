import React from "react";
import { View } from "react-native";
import { Navigation } from "./index";

const Layout = ({ children, routes }: { children: any; routes: any }) => {
  return (
    <View
      style={{
        padding: 24,
        paddingTop: 8,
        maxWidth: 1500,
        margin: "auto",
      }}
    >
      <Navigation routes={routes} />
      <View
        style={{
          paddingTop: 16,
          maxWidth: 1000,
          width: "100%",
          margin: "auto",
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Layout;
