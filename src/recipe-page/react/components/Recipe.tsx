import React from "react";

import { Divider } from "./Divider";
import { List, ListItem } from "./List";
import { Typography } from "./Typography";

import type { Item, Nutrition, Recipe } from "../types";

export interface CardRecipeProps {
  recipe: Recipe;
}

export const CardRecipe: React.FC<CardRecipeProps> = ({ recipe }) => {
  const {
    title,
    description,
    image,
    preparationTime = { cooking: "-", preparation: "-", total: "-" },
    ingredients = [],
    instructions = [],
    nutrition,
  } = recipe;
  return (
    <article className="space-y-7 overflow-hidden bg-white shadow-sm max-md:pb-12 md:max-w-[46rem] md:rounded-3xl md:py-10">
      {/* header */}
      <CardHeader title={title} description={description} image={image} />
      {/* header */}

      {/* sub-article - preparation time */}
      <section className="px-8 md:px-10">
        <article className="bg-background p-7 md:rounded-xl">
          <section>
            <Typography color="secondary" variant="h2">
              Preparation time
            </Typography>
            <List markerColor="secondary">
              <ListItem>
                <b>Total:</b> {preparationTime.total}
              </ListItem>
              <ListItem>
                <b>Preparation:</b> {preparationTime.preparation}
              </ListItem>
              <ListItem>
                <b>Cooking:</b> {preparationTime.cooking}
              </ListItem>
            </List>
          </section>
        </article>
      </section>
      {/* sub-article - preparation time */}

      {/* article - ingredients */}
      <section className="px-8 md:px-10">
        <Typography color="primary" variant="title" family="young">
          Ingredients
        </Typography>
        <List>
          {ingredients.map((ingredient: Item, index) => (
            <RecipeListItem item={ingredient} key={index} />
          ))}
        </List>
      </section>
      {/* article - ingredients */}

      {/* horizontal rule */}
      <Divider />
      {/* horizontal rule */}

      {/* article - instructions */}
      <section className="px-8 md:px-10">
        <Typography color="primary" variant="title" family="young">
          Instructions
        </Typography>
        <List marker="decimal" markerColor="primary" markerWeight="bold">
          {instructions.map((instruction: Item, index) => (
            <RecipeListItem item={instruction} key={index} />
          ))}
        </List>
      </section>
      {/* article - instructions */}

      {/* horizontal rule */}
      <Divider />
      {/* horizontal rule */}

      {/* article - nutrition */}
      <section className="space-y-6 px-8 md:px-10">
        <Typography color="primary" variant="title" family="young">
          Nutrition
        </Typography>
        <Typography>
          The table below shows nutritional values per serving without the
          additional fillings.
        </Typography>
        {/* table - nutritional */}
        {nutrition && <NutritionTable nutrition={nutrition} />}
        {/* table - nutritional */}
      </section>
      {/* article - nutrition */}
    </article>
  );
};

export interface RecipeListItemProps {
  item: Item;
}

export const RecipeListItem: React.FC<RecipeListItemProps> = ({ item }) => {
  const { title, description } = item;
  return (
    <ListItem>
      {title && <b>{title}: </b>}
      {description && <span>{description}</span>}
    </ListItem>
  );
};

export interface CardHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <header className="space-y-11">
      <figure className="md:px-10">
        <img
          src={image}
          alt="omelette"
          className="md:rounded-xl"
          width="656"
          height="300"
        />
        <figcaption className="hidden">{title}</figcaption>
      </figure>
      <div className="space-y-6 px-8 md:px-10">
        <Typography color="accent" variant="h1" family="young">
          {title}
        </Typography>
        {description && <Typography>{description}</Typography>}
      </div>
    </header>
  );
};
export interface NutritionProps {
  nutrition: Nutrition;
}

export const NutritionTable: React.FC<NutritionProps> = ({ nutrition }) => {
  return (
    <table className="table w-full">
      <tbody>
        <tr className="pb-5">
          <td className="pb-5 pl-8">Calories</td>
          <td className="text-primary pb-5 pr-8">
            <b>{nutrition.calories}</b>
          </td>
        </tr>
        <tr className="border-t pb-5">
          <td className="pb-5 pl-8">Carbs</td>
          <td className="text-primary pb-5 pr-8">
            <b>{nutrition.carbs}</b>
          </td>
        </tr>
        <tr className="border-t pb-5">
          <td className="pb-5 pl-8">Protein</td>
          <td className="text-primary pb-5 pr-8">
            <b>{nutrition.protein}</b>
          </td>
        </tr>
        <tr className="border-t">
          <td className="pl-8">Fat</td>
          <td className="text-primary pr-8">
            <b>{nutrition.fat}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
