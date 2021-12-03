import React from "react";
import { View, Image } from "react-native";
// import { Link } from "react-router-dom";

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
      {/* <Link to="/">
        <Image
          source={{ uri: "images/letsEatTransparent.png" }}
          resizeMode="cover"
          style={{ width: 90, height: 90 }}
        />
      </Link> */}
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
            return (
              <Link link={route.path} />
              // <Link to={route.path} style={{ textDecoration: "none" }}>
              //   <Typography
              //     key={index}
              //     // font="600"
              //     style={{
              //       fontSize: 16,
              //       marginLeft: 16,
              //       // textShadowColor: colors.tertiary,
              //       // textShadowOffset: { width: 2, height: 2 },
              //       // textShadowRadius: 2,
              //     }}
              //   >
              //     {route.path.substring(1, 2).toUpperCase()}
              //     {route.path.substring(2).toLowerCase()}
              //   </Typography>
              // </Link>
            );
          }
        })}
      </View>
    </View>
  );
};

export default Navigation;
