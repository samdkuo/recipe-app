import React from "react";
import { View, Image } from "react-native";
import { Link as ReactLink } from "react-router-dom";

import { Typography, Link } from "../components";
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
      <ReactLink to="/">
        <Image
          source={{ uri: "images/letsEatTransparent.png" }}
          resizeMode="cover"
          style={{ width: 90, height: 90 }}
        />
      </ReactLink>
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: 16,
        }}
      >
        {routes.map((route: any, index: number) => {
          if (route.path !== "/") {
            const nav =
              route.path.substring(1, 2).toUpperCase() +
              route.path.substring(2).toLowerCase();
            return <Link key={index} link={nav} />;
          }
        })}
      </View>
    </View>
  );
};

export default Navigation;
