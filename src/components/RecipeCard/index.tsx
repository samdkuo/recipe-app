import React from "react";
import { View, Text, Image, Pressable } from "react-native";
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
        <View style={{ padding: 8, backgroundColor: "#FFFFFA" }}>
          <Text>{title}</Text>
          <View>
            <Text>{`${totalIngredients} ingredients | ${cookTime} min`}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default RecipeCard;
