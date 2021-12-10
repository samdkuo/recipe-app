import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Typography } from "..";
import { colors } from "../../theme/colors";

interface RecipeCardProps {
  title: string;
  totalIngredients?: number;
  cookTime?: number | undefined;
  image?: string;
}

export function RecipeCard({
  title,
  totalIngredients,
  cookTime,
  image = "https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
}: RecipeCardProps) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.gray050,
        borderRadius: 4,
        shadowColor: colors.gray400,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        overflow: "hidden",
        flex: 1,
        // width: 250,
      }}
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
          <Typography>{`${totalIngredients} ingredients | ${cookTime} min`}</Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
}
