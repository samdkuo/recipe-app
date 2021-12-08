import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { colors } from "../../theme/colors";
import { Typography, TextInput, Button } from "../index";

interface RecipeFormProps {}

const IngredientInput = (handleSubmit: any) => {
  return (
    <View>
      <Typography style={styles.label}>Add Ingredients</Typography>

      <Formik
        initialValues={{ name: "", quantity: "" }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              textInputProps={{
                placeholder: "name",
              }}
            />

            <TextInput
              style={{ width: 80 }}
              textInputProps={{
                placeholder: "quantity",
              }}
            />

            <Button onPress={() => handleSubmit(values)}>Add</Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

interface Ingredient {
  name: string;
  quantity: string;
}

interface Recipe {
  name: string;
  description: string;
  ingredients: Array<Ingredient>;
  directions: string;
}

export function RecipeForm({}: RecipeFormProps) {
  const [recipeList, setRecipeList] = React.useState<Array<Recipe>>([]);

  const [ingredientsList, setIngredientsList] = React.useState<
    Array<Ingredient>
  >([]);

  const handleIngredientSubmit = useCallback(
    (values: Ingredient) => {
      setIngredientsList([...ingredientsList, values]);
    },
    [ingredientsList]
  );

  const handleSubmit = (values: Recipe) => {
    console.log(values);
    setRecipeList([...recipeList, values]);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          description: "",
          ingredients: [],
          directions: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <View>
            <Typography style={styles.title}>Add new Recipe</Typography>

            <TextInput label="Dish Name" />
            <TextInput label="description" multi />
            <IngredientInput handleSubmit={handleIngredientSubmit} />

            <View>
              {ingredientsList.map((ingredient, index) => (
                <Typography
                  key={index}
                >{`${ingredient.name} ${ingredient.quantity}`}</Typography>
              ))}
            </View>
            <TextInput label="directions" multi />

            <Button onPress={() => handleSubmit(values)}>Submit</Button>
          </View>
        )}
      </Formik>

      <View>
        {recipeList.map((recipe, index) => (
          <Typography
            key={index}
          >{`${recipe.name} ${recipe.description}`}</Typography>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    maxWidth: 400,
    marginVertical: 16,
    borderRadius: 8,
    shadowColor: colors.gray400,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    padding: 32,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    textTransform: "capitalize",
    marginBottom: 16,
  },
  label: {
    textTransform: "capitalize",
  },
});
