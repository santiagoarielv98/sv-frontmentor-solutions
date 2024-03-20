import { CardRecipe } from "./components/Recipe";
import { data } from "./data";

const App = () => {
  return (
    <div className="font-outfit bg-body text-neutral flex items-center justify-center text-base">
      <main className="md:my-[7.5rem]">
        <CardRecipe recipe={data} />
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Santiago Ariel</a>.
        </div>
      </main>
    </div>
  );
};

export default App;
