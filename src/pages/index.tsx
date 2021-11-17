import React from "react";
import { View } from "react-native";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";

const Home = () => {
  return (
    <View>
      <RecipeCard title={"Hamburger"} totalIngredients={10} cookTime={40} />
      <RecipeForm />
    </View>
  );
};

export default Home;
