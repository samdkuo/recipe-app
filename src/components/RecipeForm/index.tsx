import React, { useCallback } from "react";
import { Text, TextInput, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { colors } from "../../theme/colors";

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
      <Text style={styles.label}>{label}</Text>
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
      <Text style={styles.label}>Add Ingredients</Text>

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
              <Text style={{ color: "white" }}>Add</Text>
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
            <Text style={styles.title}>Add new Recipe</Text>

            <Input label="Dish Name" />
            <Input label="description" multi />
            <IngredientInput handleSubmit={handleIngredientSubmit} />

            <View>
              {ingredientsList.map((ingredient, index) => (
                <Text
                  key={index}
                >{`${ingredient.name} ${ingredient.quantity}`}</Text>
              ))}
            </View>
            <Input label="directions" multi />

            <Pressable
              style={styles.button}
              onPress={() => handleSubmit(values)}
            >
              <Text style={{ color: "white" }}>Submit</Text>
            </Pressable>
          </View>
        )}
      </Formik>

      <View>
        {recipeList.map((recipe, index) => (
          <Text key={index}>{`${recipe.name} ${recipe.description}`}</Text>
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
