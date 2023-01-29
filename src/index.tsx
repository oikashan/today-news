import ReactDOM from "react-dom";
import { useTheme } from "~/theme";
import { useArticle } from "~/article";
import { IconMenu, IconMoon, IconStar } from "~/icons";

// Assets
import "~/assets/styles/styles.scss";

/**
 * Root component.
 */
function App() {
  const { articles } = useArticle();
  const { toggleTheme } = useTheme();

  console.log(articles);

  return (
    <div>
      Here I Am
      <section id="highlights">
        <h2 className="section-heading">The heading goes here</h2>
        <div className="section-content">The content goes here</div>
      </section>
      <IconMenu />
      <IconMoon onClick={() => toggleTheme()} />
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
