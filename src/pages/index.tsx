import React from "react";
import { Image, View } from "react-native";
import Layout from "../layout/Layout";
import { Pill, Typography } from "../components/index";
import { Search } from "semantic-ui-react";

const Home = () => {
  return (
    <View>
      <Search />
      <View>
        {[
          "Breakfast",
          "Entrees",
          "Bread",
          "Side dishes",
          "Dessert",
          "Drinks",
        ].map((category, index) => (
          <Pill>{category}</Pill>
        ))}
      </View>
    </View>
  );
};

export default Home;
