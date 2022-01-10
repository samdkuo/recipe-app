import React from "react";
import { Image, View } from "react-native";
import { Pill, Typography, Grid, TextInput } from "../components/index";

const Home = () => {
  return (
    <View>
      <Image
        source={{ uri: "images/letsEatTransparent.png" }}
        resizeMode="cover"
        style={{ width: 400, height: 400 }}
      />
      <TextInput placeholder="Search..." />
      <Grid numColumns={6} gap={16}>
        {[
          "Breakfast",
          "Entrees",
          "Bread",
          "Side Dishes",
          "Dessert",
          "Drinks",
        ].map((category, index) => (
          <Pill>{category}</Pill>
        ))}
      </Grid>
    </View>
  );
};

export default Home;
