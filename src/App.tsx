import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import GlobalStyle from "./components/globalStyle";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projets from "./components/Projets";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
