import { Route } from "react-router-dom";
import {Home} from "../pages/Home";
// Import your SongInfo page component below
import { SongInfo } from "../pages/SongInfo";
import { NotFoundPage } from "../pages/NotFoundPage";
import { About } from "../pages/About";
import { MyInfo } from "../pages/MyInfo";



const routes = (
  <>
    <Route path="/" element={<Home />} />
    {/* Define your dynamic route here below */}
    <Route path="/about" element={<About />} />
    <Route path="/myinfo" element={<MyInfo />} />
    <Route path="/song/:songTitle" element={<SongInfo />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
);

export default routes;
