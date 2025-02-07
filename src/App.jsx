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
      // Fetch user's IP & location data
      const ipResponse = await fetch("https://ipinfo.io/json?token=f66bcfdf211e2c");
      const ipData = await ipResponse.json();

      // Extract relevant data
      const userAgent = navigator.userAgent;
      const ip = ipData.ip;
      const location = ipData.loc ? ipData.loc.split(",") : [null, null];
      const city = ipData.city;
      const region = ipData.region;
      const country = ipData.country;
      const timezone = ipData.timezone;

      // Get user's geolocation (if they allow it)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userData = {
            ip,
            city,
            region,
            country,
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            userAgent,
            timezone,
          };
          setUserInfo(userData);
          sendToMessageAPI(userData);
        },
        () => {
          // If location access is denied, send without lat/lon
          const userData = {
            ip,
            city,
            region,
            country,
            lat: location[0],
            lon: location[1],
            userAgent,
            timezone,
          };
          setUserInfo(userData);
          sendToMessageAPI(userData);
        }
      );
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const sendToMessageAPI = async (userData) => {
    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "8ab6f305-eefb-492a-ab31-82f8466f99ea"); // Your Web3Forms key
      formPayload.append("subject", "New User Data Received"); // Email subject
  
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
------------------------
`;

      formPayload.append("message", message); // Attach the formatted message
  
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
