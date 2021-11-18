import React from "react";
import { View, Image } from "react-native";
import { Link } from "react-router-dom";

import { Typography } from "../components";
import { colors } from "../theme/colors";
import { dimensions } from "./types";

const Navigation = ({ routes }: { routes: any }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: dimensions.headerHeight,
        marginTop: 8,
        marginBottom: 16,
      }}
    >
      <Link to="/">
        <Image
          source={{ uri: "images/letsEatTransparent.png" }}
          resizeMode="cover"
          style={{ width: 90, height: 90 }}
        />
      </Link>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 16,
        }}
      >
        {routes.map((route: any, index: number) => {
          if (route.path !== "/") {
            return (
              <Link to={route.path} style={{ textDecoration: "none" }}>
                <Typography
                  key={index}
                  color="text"
                  font="800"
                  style={{
                    fontSize: 18,
                    textShadowColor: colors.secondary,
                    textShadowOffset: { width: 2, height: 2 },
                  }}
                >
                  {route.path.substring(1, 2).toUpperCase()}
                  {route.path.substring(2).toLowerCase()}
                </Typography>
              </Link>
            );
          }
        })}
      </View>
    </View>
  );
};

export default Navigation;
