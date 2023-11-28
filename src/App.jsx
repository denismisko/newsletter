import "./sass/App.scss";
import "./sass/ThankYou.scss";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Newsletter />
      <footer className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Denis Miškolci</a>.
      </footer>
    </>
  );
}

export default App;
