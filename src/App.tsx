import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import StudioTour from "./pages/StudioTour.tsx";
import Pricing from "./pages/Pricing.tsx";
import ServiceGiclee from "./pages/ServiceGiclee.tsx";
import ServiceRestoration from "./pages/ServiceRestoration.tsx";
import ServiceLargeFormat from "./pages/ServiceLargeFormat.tsx";
import ServicePhotobook from "./pages/ServicePhotobook.tsx";
import KnowledgeHub from "./pages/KnowledgeHub.tsx";
import Faq from "./pages/Faq.tsx";
import Contact from "./pages/Contact.tsx";
import LlmsTxt from "./pages/LlmsTxt.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/studio-tour" element={<StudioTour />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services/giclee" element={<ServiceGiclee />} />
          <Route path="/services/restoration" element={<ServiceRestoration />} />
          <Route path="/services/large-format" element={<ServiceLargeFormat />} />
          <Route path="/services/photobook" element={<ServicePhotobook />} />
          <Route path="/knowledge" element={<KnowledgeHub />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/llms.txt" element={<LlmsTxt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
