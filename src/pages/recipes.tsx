import React from "react";
import { View } from "react-native";
import { RecipeCard, RecipeForm, FloatingActionButton } from "../components";

const recipes = [
  {
    name: "Hamburger",
    totalIngredients: 10,
    cooktime: 40,
    image:
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "Tacos",
    totalIngredients: 12,
    cooktime: 50,
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
  },
  {
    name: "Hamburger",
    totalIngredients: 10,
    cooktime: 40,
    image:
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "Tacos",
    totalIngredients: 12,
    cooktime: 50,
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
  },
];
const Home = () => {
  return (
    <View>
      <FloatingActionButton />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {recipes.map(({ name, totalIngredients, cooktime, image }, index) => (
          <RecipeCard
            key={index}
            title={name}
            totalIngredients={totalIngredients}
            cookTime={cooktime}
            image={image}
          />
        ))}
      </View>
      {/* <RecipeForm /> */}
    </View>
  );
};

export default Home;
