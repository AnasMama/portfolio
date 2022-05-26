import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Description from "./components/Description";
import GlobalStyle from "./components/globalStyle";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import ProjectStart from "./components/ProjectStart";
import Projets from "./components/Projets";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/open" element={<ProjectStart />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
