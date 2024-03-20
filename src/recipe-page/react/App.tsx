import { Typography } from "./components/Typography";
import { List, ListItem } from "./components/List";

import ImageOmelette from "../assets/images/image-omelette.webp";
import DesignDesktop from "../design/desktop-design.jpg";

const App = () => {
  return (
    <>
      <div className="font-outfit bg-neutral-eggshell text-neutral-wengeBrown flex items-center justify-center text-base">
        <main className="md:my-[7.5rem]">
          {/* card */}
          <article className="space-y-7 overflow-hidden bg-white shadow-sm max-md:pb-12 md:max-w-[46rem] md:rounded-3xl md:py-10">
            {/* header */}
            <header className="space-y-11">
              <figure className="md:px-10">
                <img
                  src={ImageOmelette}
                  alt="omelette"
                  className="md:rounded-xl"
                  width="656"
                  height="300"
                />
                <figcaption className="hidden">
                  Simple Omelette Recipe
                </figcaption>
              </figure>
              <div className="space-y-6 px-8 md:px-10">
                <Typography color="darkCharcoal" variant="h1" family="young">
                  Simple Omelette Recipe
                </Typography>
                <Typography>
                  An easy and quick dish, perfect for any meal. This classic
                  omelette combines beaten eggs cooked to perfection, optionally
                  filled with your choice of cheese, vegetables, or meats.
                </Typography>
              </div>
            </header>
            {/* header */}
            {/* sub-article - preparation time */}
            <section className="px-8 md:px-10">
              <article className="bg-neutral-roseWhite p-7 md:rounded-xl">
                <section>
                  <Typography color="darkRaspberry" variant="h2">
                    Preparation time
                  </Typography>
                  <List markerColor="darkRaspberry" className="py-1.5">
                    <ListItem>
                      <b>Total:</b> Approximately 10 minutes
                    </ListItem>
                    <ListItem>
                      <b>Preparation:</b> 5 minutes
                    </ListItem>
                    <ListItem>
                      <b>Cooking:</b> 5 minutes
                    </ListItem>
                  </List>
                </section>
              </article>
            </section>
            {/* sub-article - preparation time */}
            {/* article - ingredients */}
            <section className="px-8 md:px-10">
              <Typography color="nutmeg" variant="title" family="young">
                Ingredients
              </Typography>
              <List>
                <ListItem>
                  <b>2-3 large eggs</b>
                </ListItem>
                <ListItem>
                  <b>Salt, to taste</b>
                </ListItem>
                <ListItem>
                  <b>Pepper, to taste</b>
                </ListItem>
                <ListItem>
                  <b>1 tablespoon of butter or oil</b>
                </ListItem>
                <ListItem>
                  <b>
                    Optional fillings: cheese, diced vegetables, cooked meats,
                    herbs
                  </b>
                </ListItem>
              </List>
            </section>
            {/* article - ingredients */}

            {/* horizontal rule */}
            <hr className="border-neutral-lightGrey" />
            {/* horizontal rule */}

            {/* article - instructions */}
            <section className="px-8 md:px-10">
              <Typography color="nutmeg" variant="title" family="young">
                Instructions
              </Typography>
              <List marker="decimal" markerColor="nutmeg" markerFont="bold">
                <ListItem>
                  <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
                  salt and pepper until they are well mixed. You can add a
                  tablespoon of water or milk for a fluffier texture.
                </ListItem>
                <ListItem>
                  <b>Heat the pan:</b> Place a non-stick frying pan over medium
                  heat and add butter or oil.
                </ListItem>
                <ListItem>
                  <b>Cook the omelette:</b> Once the butter is melted and
                  bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                  evenly coat the surface.
                </ListItem>
                <ListItem>
                  <b>Add fillings (optional):</b> When the eggs begin to set at
                  the edges but are still slightly runny in the middle, sprinkle
                  your chosen fillings over one half of the omelette.
                </ListItem>
                <ListItem>
                  <b>Fold and serve:</b> As the omelette continues to cook,
                  carefully lift one edge and fold it over the fillings. Let it
                  cook for another minute, then slide it onto a plate.
                </ListItem>
                <ListItem>
                  <b>Enjoy:</b> Serve hot, with additional salt and pepper if
                  needed.
                </ListItem>
              </List>
            </section>
            {/* article - instructions */}

            {/* horizontal rule */}
            <hr className="border-neutral-lightGrey" />
            {/* horizontal rule */}

            {/* article - nutrition */}
            <section className="space-y-6 px-8 md:px-10">
              <Typography color="nutmeg" variant="title" family="young">
                Nutrition
              </Typography>
              <Typography>
                The table below shows nutritional values per serving without the
                additional fillings.
              </Typography>
              {/* table - nutritional */}
              <table className="table w-full">
                <tbody>
                  <tr className="pb-5">
                    <td className="pb-5 pl-8">Calories</td>
                    <td className="text-primary-nutmeg pb-5 pr-8">
                      <b>277kcal</b>
                    </td>
                  </tr>
                  <tr className="border-t pb-5">
                    <td className="pb-5 pl-8">Carbs</td>
                    <td className="text-primary-nutmeg pb-5 pr-8">
                      <b>0g</b>
                    </td>
                  </tr>
                  <tr className="border-t pb-5">
                    <td className="pb-5 pl-8">Protein</td>
                    <td className="text-primary-nutmeg pb-5 pr-8">
                      <b>20g</b>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="pl-8">Fat</td>
                    <td className="text-primary-nutmeg pr-8">
                      <b>22g</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* table - nutritional */}
            </section>
            {/* article - nutrition */}
          </article>
          {/* card */}
        </main>
      </div>
      <img src={DesignDesktop} className="fixed inset-0 opacity-30 invert" />
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Santiago Ariel</a>.
      </div>
    </>
  );
};

export default App;
