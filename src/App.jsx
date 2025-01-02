import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CampaignDetail from "./Pages/CampaignDetail";
import CreateCampaign from "./Pages/CreateCampaign";
import About from "./Pages/About";
import Campaigns from "./Pages/Campaigns";
import HowItWorks from "./Pages/HowItWorks";
import MyCampaigns from "./Pages/MyCampaigns";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-950">
        <Navbar />
        <ScrollToTop />
        <div className="min-h-screen">
          <Routes>
            <Route path="crowdfund/" element={<Home />} />
            <Route path="crowdfund/create-campaign" element={<CreateCampaign />} />
            <Route path="crowdfund/campaign/:id" element={<CampaignDetail />} />
            <Route path="crowdfund/about" element={<About />} />
            <Route path="crowdfund/campaigns" element={<Campaigns />} />
            <Route path="crowdfund/how-it-works" element={<HowItWorks />} />
            <Route path="crowdfund/my-campaigns" element={<MyCampaigns />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
