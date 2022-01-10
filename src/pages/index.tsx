import React from "react";
import { Image, View } from "react-native";
import Layout from "../layout/Layout";
import { Pill, Typography, Grid } from "../components/index";
import { Search } from "semantic-ui-react";

const Home = () => {
  return (
    <View>
      <Search />
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
