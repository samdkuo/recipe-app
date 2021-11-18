import React from "react";
import { Image, View } from "react-native";
import Layout from "../layout/Layout";
import { Typography } from "../components/index";

const Home = () => {
  return (
    <View>
      <Image
        source={{ uri: "../public/images/letsEatTransparent.png" }}
        resizeMode="cover"
        style={{ width: 90, height: 90 }}
      />
    </View>
  );
};

export default Home;
