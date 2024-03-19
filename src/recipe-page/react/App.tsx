const App = () => {
  return (
    <>
      <div className="font-outfit bg-neutral-eggshell text-neutral-wengeBrown flex items-center justify-center text-base">
        <main className="md:my-[7.5rem]">
          {/* card */}
          <article className="space-y-6 overflow-hidden bg-white shadow-sm max-md:pb-12 md:max-w-[46rem] md:rounded-3xl md:py-10">
            {/* header */}
            <header className="space-y-10">
              <figure className="md:px-10">
                <img
                  src="./assets/images/image-omelette.webp"
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
                <h1 className="font-young text-neutral-darkCharcoal text-3xl md:text-[2.5rem]">
                  Simple Omelette Recipe
                </h1>
                <p>
                  An easy and quick dish, perfect for any meal. This classic
                  omelette combines beaten eggs cooked to perfection, optionally
                  filled with your choice of cheese, vegetables, or meats.
                </p>
              </div>
            </header>
            {/* header */}
            {/* sub-article - preparation time */}
            <section className="space-y-6 px-8 md:px-10">
              <article className="bg-neutral-roseWhite p-7 md:rounded-xl">
                <section className="space-y-2">
                  <h2 className="text-primary-darkRaspberry text-xl font-bold">
                    Preparation time
                  </h2>
                  <ul className="marker:text-primary-darkRaspberry list-outside list-disc space-y-2 *:ml-6 *:pl-4">
                    <li>
                      <b>Total:</b> Approximately 10 minutes
                    </li>
                    <li>
                      <b>Preparation:</b> 5 minutes
                    </li>
                    <li>
                      <b>Cooking:</b> 5 minutes
                    </li>
                  </ul>
                </section>
              </article>
            </section>
            {/* sub-article - preparation time */}
            {/* article - ingredients */}
            <section className="space-y-6 px-8 md:px-10">
              <h2 className="text-primary-nutmeg font-young text-3xl text-[1.75rem]">
                Ingredients
              </h2>
              <ul className="marker:text-primary-nutmeg list-outside list-disc space-y-2 *:ml-6 *:pl-4">
                <li>
                  <b>2-3 large eggs</b>
                </li>
                <li>
                  <b>Salt, to taste</b>
                </li>
                <li>
                  <b>Pepper, to taste</b>
                </li>
                <li>
                  <b>1 tablespoon of butter or oil</b>
                </li>
                <li>
                  <b>
                    Optional fillings: cheese, diced vegetables, cooked meats,
                    herbs
                  </b>
                </li>
              </ul>
            </section>
            {/* article - ingredients */}

            {/* horizontal rule */}
            <hr className="border-neutral-lightGrey" />
            {/* horizontal rule */}

            {/* article - instructions */}
            <section className="space-y-6 px-8 md:px-10">
              <h2 className="text-primary-nutmeg font-young text-3xl text-[1.75rem]">
                Instructions
              </h2>
              <ol className="marker:text-primary-nutmeg list-outside list-decimal space-y-2 *:ml-6 *:pl-4 marker:font-bold">
                <li>
                  <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
                  salt and pepper until they are well mixed. You can add a
                  tablespoon of water or milk for a fluffier texture.
                </li>
                <li>
                  <b>Heat the pan:</b> Place a non-stick frying pan over medium
                  heat and add butter or oil.
                </li>
                <li>
                  <b>Cook the omelette:</b> Once the butter is melted and
                  bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                  evenly coat the surface.
                </li>
                <li>
                  <b>Add fillings (optional):</b> When the eggs begin to set at
                  the edges but are still slightly runny in the middle, sprinkle
                  your chosen fillings over one half of the omelette.
                </li>
                <li>
                  <b>Fold and serve:</b> As the omelette continues to cook,
                  carefully lift one edge and fold it over the fillings. Let it
                  cook for another minute, then slide it onto a plate.
                </li>
                <li>
                  <b>Enjoy:</b> Serve hot, with additional salt and pepper if
                  needed.
                </li>
              </ol>
            </section>
            {/* article - instructions */}

            {/* horizontal rule */}
            <hr className="border-neutral-lightGrey" />
            {/* horizontal rule */}

            {/* article - nutrition */}
            <section className="space-y-6 px-8 md:px-10">
              <h2 className="text-primary-nutmeg font-young text-3xl text-[1.75rem]">
                Nutrition
              </h2>
              <p>
                The table below shows nutritional values per serving without the
                additional fillings.
              </p>
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
