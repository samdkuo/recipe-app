import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Typography } from "..";
import { colors } from "../../theme/colors";

interface RecipeCardProps {
  title: string;
  totalIngredients: number;
  cookTime: number | undefined;
}

function RecipeCard({ title, totalIngredients, cookTime }: RecipeCardProps) {
  return (
    <Pressable>
      <View
        style={{
          borderRadius: 8,
          shadowColor: colors.gray400,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          overflow: "hidden",
          width: 250,
          backgroundColor: colors.gray050,
        }}
      >
        <Image
          style={{ width: "100%", height: 200 }}
          source={{
            uri: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
          }}
        />
        <View style={{ padding: 16 }}>
          <Typography color="primary" type="title4" font="600">
            {title}
          </Typography>
          <View>
            <Typography>{`${totalIngredients} ingredients | ${cookTime} min`}</Typography>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default RecipeCard;
