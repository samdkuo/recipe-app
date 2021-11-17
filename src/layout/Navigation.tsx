import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import { Link } from "react-router-dom";

import { Typography } from "../components";
import { getColors as colors } from "../theme/colors";

const Navigation = ({ routes }: { routes: any }) => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Image
          source={{ uri: "/logo.png" }}
          resizeMode="cover"
          style={{ width: 60, height: 60 }}
        />
      </Link>
      <View style={styles.navContainer}>
        {routes.map((route: any, index: number) => {
          if (route.path !== "/") {
            return (
              <Link to={route.path}>
                <Typography key={index}>
                  {route.path.substring(1, 2).toUpperCase()}
                  {route.path.substring(2).toLowerCase()}
                </Typography>
              </Link>
            );
          }
        })}
      </View>
      <View>
        <Button
          title="Sign In"
          onPress={() => {
            ("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    padding: 8,
    backgroundColor: colors.primary,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%",
  },
  link: {
    color: colors.secondary,
  },
});

export default Navigation;
