import React from "react";
import { View } from "react-native";
import { RecipeCard, RecipeForm, FloatingActionButton } from "../components";

const Home = () => {
  return (
    <View>
      <FloatingActionButton />
      <RecipeCard title={"Hamburger"} totalIngredients={10} cookTime={40} />
      <RecipeForm />
    </View>
  );
};

export default Home;
