import React from "react";
import { View, Button, Image } from "react-native";
import { Link } from "react-router-dom";

import { Typography } from "../components";
import { getColors as colors } from "../theme/colors";

const Navigation = ({ routes }: { routes: any }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        padding: 8,
        backgroundColor: colors.primary,
      }}
    >
      <Link to="/">
        <Image
          source={{ uri: "/logo.png" }}
          resizeMode="cover"
          style={{ width: 60, height: 60 }}
        />
      </Link>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "30%",
        }}
      >
        {routes.map((route: any, index: number) => {
          if (route.path !== "/") {
            return (
              <Link to={route.path} style={{ textDecoration: "none" }}>
                <Typography
                  key={index}
                  color="secondary"
                  font="600"
                  type="title4"
                >
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

export default Navigation;
