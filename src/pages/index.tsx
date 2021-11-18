import React from "react";
import { Image, View } from "react-native";
import Layout from "../layout/Layout";
import { Typography } from "../components/index";

const Home = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: "images/letsEatTransparent.png" }}
        resizeMode="cover"
        style={{ width: 400, height: 400 }}
      />
      {/* <Image
        source={{ uri: "images/letsEatTransparent.png" }}
        resizeMode="cover"
        style={{ width: 400, height: 400 }}
      /> */}
    </View>
  );
};

export default Home;
