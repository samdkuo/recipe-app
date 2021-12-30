import React from "react";
import { View } from "react-native";
import { RecipeCard, RecipeForm, Grid } from "../components";
import { Button, Modal } from "semantic-ui-react";
import { useWindowDimensionsQuery, useModalState } from "../hooks";
import { fetchRecipeEntries } from "../requests/recipe";
import { fetchRecipeIngredients } from "../requests/recipe";

const Home = () => {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    fetchRecipeEntries().then((response) => {
      console.log(response);
      setRecipes(response);
    });

    fetchRecipeIngredients().then((response) => {
      console.log(response);
    });
  }, []);

  const { small, medium } = useWindowDimensionsQuery();
  const { visible, onClose, onOpen } = useModalState();

  return (
    <View>
      <Modal
        trigger={
          <Button style={{ width: 140, marginBottom: 16 }} onPress={onOpen}>
            Add Recipe +
          </Button>
        }
        onClose={onClose}
        onOpen={onOpen}
        open={visible}
        size="tiny"
        closeIcon
      >
        <RecipeForm />
      </Modal>

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
    </View>
  );
};

export default Home;
