import { Item } from "../types";

interface CardRecipeProps {
  title: string;
  subheader?: string;
  preparations?: Item[];
  ingredients?: string[];
  instructions?: Item[];
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const CardRecipe: React.FC<CardRecipeProps> = ({
  preparations = [],
  ingredients = [],
  instructions = [],
  title,
  alt,
  image,
  subheader,
  width,
  height,
}) => {
  return (
    <article className="space-y-6 overflow-hidden bg-white shadow-sm max-md:pb-12 md:max-w-[46rem] md:rounded-3xl md:py-10">
      {/* header */}
      <header className="space-y-10">
        {image && (
          <figure className="md:px-10">
            <img
              src={image}
              alt={alt}
              className="md:rounded-xl"
              width={width}
              height={height}
            />
            <figcaption className="hidden">{alt}</figcaption>
          </figure>
        )}
        <div className="space-y-6 px-8 md:px-10">
          <h1 className="font-young text-neutral-darkCharcoal text-3xl md:text-[2.5rem]">
            {title}
          </h1>
          {subheader && <p>{subheader}</p>}
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
              {preparations.map((item, index) => (
                <li key={index}>
                  <b>{item.title}:</b> {item.description}
                </li>
              ))}
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
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <b>{ingredient}</b>
            </li>
          ))}
        </ul>
      </section>
      {/* article - ingredients */}
      {/* horizontal rule */}
      <hr className="border-neutral-lightGrey my-10" />
      {/* horizontal rule */}
      {/* article - instructions */}
      <section className="space-y-6 px-8 md:px-10">
        <h2 className="text-primary-nutmeg font-young text-3xl text-[1.75rem]">
          Instructions
        </h2>
        <ol className="marker:text-primary-nutmeg list-outside list-decimal space-y-2 *:ml-6 *:pl-4 marker:font-bold">
          {instructions.map((item, index) => (
            <li key={index}>
              <b>{item.title}:</b> {item.description}
            </li>
          ))}
        </ol>
      </section>
      {/* article - instructions */}
      {/* horizontal rule */}
      <hr className="border-neutral-lightGrey my-10" />
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
  );
};

export default CardRecipe;
