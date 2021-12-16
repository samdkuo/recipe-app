import React from "react";
import { View } from "react-native";
import {
  RecipeCard,
  RecipeForm,
  FloatingActionButton,
  Grid,
  Button,
  Modal,
} from "../components";
import { useWindowDimensionsQuery, useModalState } from "../hooks";

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
  const { small, medium } = useWindowDimensionsQuery();
  const { visible, onClose, onOpen } = useModalState();

  return (
    <View>
      <Button style={{ width: 140, marginBottom: 16 }} onPress={onOpen}>
        Add Recipe +
      </Button>
      <Grid
        numColumns={small ? 1 : medium ? 3 : 5}
        gap={16}
        style={{ justifyContent: "center" }}
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
      </Grid>
      <Modal visible={visible} onBackdropPress={onClose}>
        <RecipeForm />
      </Modal>
    </View>
  );
};

export default Home;
