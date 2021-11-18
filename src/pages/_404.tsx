import React from "react";
import { View } from "react-native";
import { Typography } from "../components";

const NotFound = () => {
  return (
    <View style={{ width: "50%", margin: "auto", justifyContent: "center" }}>
      <Typography color="primary" style={{ fontSize: 56, textAlign: "center" }}>
        Oops!
      </Typography>
      <Typography type="title3" color="primary" style={{ textAlign: "center" }}>
        Page not found!
      </Typography>
    </View>
  );
};

export default NotFound;
