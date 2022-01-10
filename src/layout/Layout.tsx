import React from "react";
import { View } from "react-native";
import { Navigation } from "./index";
import { dimensions } from "./types";

const Layout = ({ children, routes }: { children: any; routes: any }) => {
  return (
    <View
      style={{
        maxWidth: 1500,
        margin: "auto",
      }}
    >
      <Navigation routes={routes} />
      <View
        style={{
          maxWidth: 1000,
          width: "100%",
          height: `calc(100vh - ${dimensions.headerHeight}px)`,
          margin: "auto",
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Layout;
