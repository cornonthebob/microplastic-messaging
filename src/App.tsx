
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import PlasticTypesPage from "./pages/PlasticTypesPage";
import HealthImpactPage from "./pages/HealthImpactPage";
import InteractivePage from "./pages/InteractivePage";
import PlasticLifecycle from "./pages/PlasticLifecycle";
import SolutionsPage from "./pages/SolutionsPage";
import CitationsPage from "./pages/CitationsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/types" element={<PlasticTypesPage />} />
          <Route path="/health" element={<HealthImpactPage />} />
          <Route path="/interactive" element={<InteractivePage />} />
          <Route path="/lifecycle" element={<PlasticLifecycle />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/citations" element={<CitationsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
