import React, { useCallback } from "react";
import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { colors } from "../../theme/colors";
import { Typography } from "..";

interface RecipeFormProps {}

const Input = ({
  label,
  multi = false,
}: {
  label: string;
  multi?: boolean;
}) => {
  return (
    <View style={{ marginBottom: 8 }}>
      <Typography style={styles.label}>{label}</Typography>
      <TextInput
        style={styles.input}
        multiline={multi}
        numberOfLines={multi ? 4 : 1}
      />
    </View>
  );
};

const IngredientInput = (handleSubmit: any) => {
  return (
    <View style={{ marginBottom: 8 }}>
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
              alignItems: "center",
            }}
          >
            <TextInput
              style={[styles.input, { flex: 0.9 }]}
              placeholder="name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />

            <TextInput
              style={[styles.input, { width: 80 }]}
              placeholder="quantity"
              onChangeText={handleChange("quantity")}
              onBlur={handleBlur("quantity")}
              value={values.quantity}
            />

            <Pressable
              style={[
                styles.button,
                {
                  marginTop: 0,
                  paddingHorizontal: 16,
                },
              ]}
              onPress={() => handleSubmit(values)}
            >
              <Typography style={{ color: "white" }}>Add</Typography>
            </Pressable>
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

function RecipeForm({}: RecipeFormProps) {
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

            <Input label="Dish Name" />
            <Input label="description" multi />
            <IngredientInput handleSubmit={handleIngredientSubmit} />

            <View>
              {ingredientsList.map((ingredient, index) => (
                <Typography
                  key={index}
                >{`${ingredient.name} ${ingredient.quantity}`}</Typography>
              ))}
            </View>
            <Input label="directions" multi />

            <Pressable
              style={styles.button}
              onPress={() => handleSubmit(values)}
            >
              <Typography style={{ color: "white" }}>Submit</Typography>
            </Pressable>
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

export default RecipeForm;

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
    color: colors.gray700,
  },
  input: {
    borderColor: colors.gray400,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    outlineColor: colors.cyan,
    outlineWidth: 1,
  },
  button: {
    padding: 8,
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
