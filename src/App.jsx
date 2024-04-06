import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import { NavBarLink } from "./components/NavBarLink";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
        <NavBarLink />

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
