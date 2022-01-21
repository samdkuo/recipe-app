import React from "react";
import { Image, View, Dimensions } from "react-native";
import { Pill, Typography, Grid, TextInput } from "../components/index";
import { useWindowDimensionsQuery } from "../hooks";

const Home = () => {
  const { small } = useWindowDimensionsQuery();
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignContent: "center",
        paddingTop: 150,
      }}
    >
      <Image
        source={{ uri: "images/logo-long.png" }}
        resizeMode="cover"
        style={{
          width: width * 0.8,
          height: height * 0.2,
          maxWidth: 600,
          margin: "auto",
          marginVertical: 0,
        }}
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
            <Pill style={{ minWidth: 100 }}>{category}</Pill>
          ))}
        </Grid>
      </View>
    </View>
  );
};

export default Home;
