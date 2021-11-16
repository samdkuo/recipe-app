import React from "react";
import Layout from "../layout/Layout";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";

const Home = () => {
  return (
    <Layout>
      <RecipeCard title={"Hamburger"} totalIngredients={10} cookTime={40} />
      <RecipeForm />
    </Layout>
  );
};

export default Home;
