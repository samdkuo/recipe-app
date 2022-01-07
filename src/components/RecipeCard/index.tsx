import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Modal } from "semantic-ui-react";
import { Typography } from "..";
import { useModalState } from "../../hooks";
import { colors } from "../../theme/colors";
import { fetchRecipeIngredients } from "../../requests/recipe";

interface RecipeCardProps {
  id: number;
  title: string;
  totalIngredients?: number;
  cookTime?: number | undefined;
  image?: string;
  description?: string;
  instruction?: string;
}

export function RecipeCard({
  id,
  title,
  totalIngredients,
  cookTime,
  description,
  instruction,
  image = "https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
}: RecipeCardProps) {
  const { visible, onClose, onOpen } = useModalState();
  const [ingredients, setIngredients] = React.useState([]);
  const [recipes] = React.useState([]);

  React.useEffect(() => {
    fetchRecipeIngredients(id).then((response) => {
      console.log(response);
      setIngredients(response);
    });
  }, [id]);

  return (
    <Modal 
      onClose={onClose}
      onOpen={onOpen}
      open={visible}
      size="tiny"
      closeIcon
      trigger={
        <TouchableOpacity
          style={{
            backgroundColor: colors.yellow,
            borderRadius: 8,
            shadowColor: colors.lightBlue,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            overflow: "hidden",
            flex: 1,
          }}
          onPress={onOpen}
        >
          <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri: image,
            }}
          />
          <View style={{ padding: 16 }}>
            <Typography font="500" fontFamily="Aleo">
              {title}
            </Typography>
            <View>
              <Typography>{`Cook Time: ${cookTime}`}</Typography>
            </View>
          </View>
        </TouchableOpacity>
    }>
      <Modal.Header><Typography type="title2">{title}</Typography></Modal.Header>
      <Modal.Content style={{ minWidth: 240, minHeight: 240}}>
        <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri: image,
            }}
          />
        <View>
          <Typography type="title4">Ingredients</Typography>
          <View style={{paddingHorizontal: 8}}>
          {ingredients.map(({name, quantity}, index) => (
            <Typography>{name}: {quantity}</Typography>
          ))}
          </View>
        <Typography type="title4">Description</Typography>
          <View style={{paddingHorizontal: 8}}>
        <Typography>{`${description}`}</Typography>
          </View>
        <Typography type="title4">Instructions</Typography>
          <View style={{paddingHorizontal: 8}}>
        <Typography>{`${instruction}`}</Typography>
          </View>
          </View>
      </Modal.Content>
    </Modal>

  );
}
