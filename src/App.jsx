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
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Auto-accept cookies
    localStorage.setItem("cookie-consent", "true");

    // Fetch user info immediately
    fetchUserInfo();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const timeout = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearTimeout(timeout);
    };
  }, []);

  const fetchUserInfo = async () => {
    try {
      // Fetch IP-based location (No permission required)
      const response = await fetch("https://ipinfo.io/json?token=f66bcfdf211e2c");
      const data = await response.json();

      // Extract data including organization (org)
      const userData = {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        lat: data.loc ? data.loc.split(",")[0] : "Unknown",
        lon: data.loc ? data.loc.split(",")[1] : "Unknown",
        timezone: data.timezone,
        userAgent: navigator.userAgent,
        org: data.org, // Extract org from the API response
      };

      setUserInfo(userData);
      sendToMessageAPI(userData);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const sendToMessageAPI = async (userData) => {
    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "8ab6f305-eefb-492a-ab31-82f8466f99ea"); 
      formPayload.append("subject", "New User Visited"); 
      // **Formatted Plain Text Message**
      const message = `
New User Information
------------------------
IP Address   : ${userData.ip}
City         : ${userData.city}
Region       : ${userData.region}
Country      : ${userData.country}
Latitude     : ${userData.lat}
Longitude    : ${userData.lon}
Timezone     : ${userData.timezone}
User Agent   : ${userData.userAgent}
Organization : ${userData.org}  
------------------------
`;

      formPayload.append("message", message);

      const apiResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const apiResult = await apiResponse.json();
      console.log("API Response:", apiResult);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

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
