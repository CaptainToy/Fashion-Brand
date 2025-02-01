import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./slides/home";
import HomePage from "./slides/project";
import Portfolio from "./slides/experience";
import Tools from "./slides/Tools";
import ToolDesign from "./slides/Design";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/ToolDesign" element={<ToolDesign />} />
      </Routes>
    </Router>
  );
}

export default App;
