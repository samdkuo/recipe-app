import React from "react";
import { View, StyleSheet } from "react-native";

const Layout = ({ children }: { children: any }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navLinks: {
    flexDirection: "row",
  },
  container: {
    padding: 16,
  },
});

export default Layout;
