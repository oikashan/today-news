import ReactDOM from "react-dom";

// Assets
import "~/assets/styles/styles.scss";

function App() {
  return (
    <div>
      Here I Am
      <button className="button">Hello</button>
      <button className="button-sm">Hello</button>
      <button className="button-outlined">Hello</button>
      <button className="button-outlined-sm">Hello</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app")!);
