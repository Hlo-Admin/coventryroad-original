
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import FullArchImplants from "./pages/FullArchImplants";
import CompositeBonding from "./pages/CompositeBonding"; 
import InvisalignBraces from "./pages/InvisalignBraces";
import TeethWhitening from "./pages/TeethWhitening";
import Veneers from "./pages/Veneers";
import DentalImplants from "./pages/DentalImplants";
import Dentures from "./pages/Dentures";
import WhiteFillings from "./pages/WhiteFillings";
import NightGuard from "./pages/NightGuard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import DentalHygiene from "./pages/DentalHygiene";
import Fillings from "./pages/Fillings";
import ChildrensDentistry from "./pages/ChildrensDentistry";
import NervousPatients from "./pages/NervousPatients";
import RestorativeTreatment from "./pages/RestorativeTreatment";
import EndodonticTreatment from "./pages/EndodonticTreatment";
import CrownsBridges from "./pages/CrownsBridges";
import Sedation from "./pages/Sedation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Treatments />} />
          <Route path="/full-arch-implants" element={<FullArchImplants />} />
          <Route path="/composite-bonding" element={<CompositeBonding />} />
          <Route path="/invisalign-braces" element={<InvisalignBraces />} />
          <Route path="/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/veneers" element={<Veneers />} />
          <Route path="/dental-implants" element={<DentalImplants />} />
          <Route path="/dentures" element={<Dentures />} />
          <Route path="/white-fillings" element={<WhiteFillings />} />
          <Route path="/fillings" element={<Fillings />} />
          <Route path="/night-guard" element={<NightGuard />} />
          <Route path="/dental-hygiene" element={<DentalHygiene />} />
          <Route path="/childrens-dentistry" element={<ChildrensDentistry />} />
          <Route path="/nervous-patients" element={<NervousPatients />} />
          <Route path="/restorative-treatment" element={<RestorativeTreatment />} />
          <Route path="/endodontic-treatment" element={<EndodonticTreatment />} />
          <Route path="/crowns-bridges" element={<CrownsBridges />} />
          <Route path="/sedation" element={<Sedation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
