import axios from "axios";

const serverURL = "http://localhost:3000/api/v1";

export const getRecipeURL = (entry_id = null) => {
  const api = serverURL;
  const recipe = `${api}/recipe`;

  if (entry_id === null) {
    return recipe;
  } else {
    return `${recipe}/recipeID/${entry_id}`;
  }
};
export const getIngredientsURL = (entry_id: number|null = null) => {
  const api = serverURL;
  const ingredient = `${api}/ingredient`;
  const recipeing = `${ingredient}/list-ingredients`;

  if (entry_id === null) {
    return recipeing;
  } else {
    return `${recipeing}/recipeID/${entry_id}`;
  }
};
export const getRecipeURL2 = (entry_id: number|null = null) => {
  const api = serverURL;
  const recipe = `${api}/recipe`;

  if (entry_id === null) {
    return recipe;
  } else {
    return `${recipe}/recipeID/${entry_id}`;
  }
};
export const fetchRecipeEntries = () => {
  return axios
    .get(getRecipeURL(), { headers: { "Jwt-Token": "" } })
    .then((response) => {
      console.log("successful get");
      return response.data;
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

export const fetchRecipeIngredients = (recipeId: number) => {
  return axios
    .get(getIngredientsURL(recipeId), { headers: { "Jwt-Token": "" } })
    .then((response) => {
      console.log("successful get");
      return response.data;
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

export const fetchRecipeDAI = (recipeId: number) => {
  return axios
    .get(getRecipeURL2(recipeId), { headers: { "Jwt-Token": "" } })
    .then((response) => {
      console.log("successful get");
      return response.data;
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

