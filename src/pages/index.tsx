import React from "react";
import { Image, View } from "react-native";
import { Pill, Typography, Grid, TextInput } from "../components/index";
import { useWindowDimensionsQuery } from "../hooks";

const Home = () => {
  const { small } = useWindowDimensionsQuery();
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignContent: "center",
        paddingTop: 80,
      }}
    >
      <Image
        source={{ uri: "images/logo-long.png" }}
        resizeMode="cover"
        style={{ width: 600, height: 300, margin: "auto", marginVertical: 0 }}
      />
      <View>
        <TextInput
          placeholder="Search..."
          style={{ width: "100%", marginBottom: 8 }}
        />
        <Grid numColumns={small ? 3 : 6} gap={16}>
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
    </View>
  );
};

export default Home;
