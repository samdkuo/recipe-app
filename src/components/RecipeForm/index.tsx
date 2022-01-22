import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { colors } from "../../theme/colors";
import { Typography, TextInput, Button } from "../index";

// const IngredientInput = (handleSubmit: any) => {
//   return (
//     <View>
//       <Typography style={styles.label}>Add Ingredients</Typography>

//       <Formik
//         initialValues={{ name: "", quantity: "" }}
//         onSubmit={handleSubmit}
//       >
//         {({ handleChange, handleBlur, values }) => (
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <TextInput
//               textInputProps={{
//                 placeholder: "name",
//               }}
//             />

//             <TextInput
//               textInputProps={{
//                 placeholder: "quantity",
//               }}
//             />

//             <Button onPress={() => handleSubmit(values)}>Add</Button>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };

interface Ingredient {
  name: string;
  quantity: string;
}

interface Recipe {
  name: string;
  description: string;
  // ingredients: Array<Ingredient>;
  directions: string;
}

export function RecipeForm() {
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

  const onSubmit = (values: Recipe) => {
    console.log(values);
    setRecipeList([...recipeList, values]);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          description: "",
          // ingredients: [],
          directions: "",
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <View>
            <Typography style={styles.title}>Add new Recipe</Typography>

            <TextInput
              label="Dish Name"
              textInputProps={{
                onChangeText: handleChange("name"),
                onBlur: handleBlur("name"),
                value: values.name,
              }}
            />
            <TextInput
              label="description"
              multi
              style={{ height: 60 }}
              textInputProps={{
                onChangeText: handleChange("description"),
                onBlur: handleBlur("description"),
                value: values.description,
              }}
            />
            {/* <IngredientInput handleSubmit={handleIngredientSubmit} /> */}

            {/* <View>
              {ingredientsList.map((ingredient, index) => (
                <Typography
                  key={index}
                >{`${ingredient.name} ${ingredient.quantity}`}</Typography>
              ))}
            </View> */}
            <TextInput
              label="directions"
              multi
              style={{ height: 200 }}
              textInputProps={{
                onChangeText: handleChange("directions"),
                onBlur: handleBlur("directions"),
                value: values.directions,
              }}
            />

            <Button onPress={() => handleSubmit()}>Submit</Button>
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
    width: "100%",
    padding: 40,
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
