import React from "react";
import { Image, View } from "react-native";
import { Pill, Typography, Grid, TextInput } from "../components/index";

const Home = () => {
  return (
    <View>
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
