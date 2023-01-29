import ReactDOM from "react-dom";

// Assets
import "~/assets/styles/styles.scss";
import { useArticles } from "~/articles";
import { IconMenu, IconMoon, IconStar } from "~/icons";

function App() {
  const articles = useArticles();

  console.log(articles);

  return (
    <div>
      Here I Am
      <IconMenu className="sm:block md:hidden" />
      <IconMoon />
      <IconStar />
      <button className="button">Hello</button>
      <button className="button-sm">Hello</button>
      <button className="button-outlined">Hello</button>
      <button className="button-outlined-sm">Hello</button>
      <div>
        <span className="badge">Hello</span>
        <span className="badge-sm">Hello</span>
        <span className="badge-outlined">Hello</span>
        <span className="badge-outlined-sm">Hello</span>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app")!);
