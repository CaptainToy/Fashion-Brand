import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./slides/home";
import HomePage from "./slides/project";
import Portfolio from "./slides/experience";
import Tools from "./slides/Tools";
import ToolDesign from "./slides/Design";
import Loader from "./component/loader/loader";
import Network from "./component/network/network";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Simulate loading effect
    const timeout = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearTimeout(timeout);
    };
  }, []);

  if (!isOnline) {
    return <Network />;
  }

  if (loading) {
    return <Loader />;
  }

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