import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AICodeAssistant from "./pages/projects/AICodeAssistant";
import EcommercePlatform from "./pages/projects/EcommercePlatform";
import SmartHomeDashboard from "./pages/projects/SmartHomeDashboard";
import BuildingScalableWebApplications from "./pages/blog/BuildingScalableWebApplications";
import FutureOfUserExperienceDesign from "./pages/blog/FutureOfUserExperienceDesign";
import EffectiveProjectManagementStrategies from "./pages/blog/EffectiveProjectManagementStrategies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/ai-code-assistant" element={<AICodeAssistant />} />
          <Route path="/projects/ecommerce-platform" element={<EcommercePlatform />} />
          <Route path="/projects/smart-home-dashboard" element={<SmartHomeDashboard />} />
          <Route path="/blog/building-scalable-web-applications" element={<BuildingScalableWebApplications />} />
          <Route path="/blog/future-of-user-experience-design" element={<FutureOfUserExperienceDesign />} />
          <Route path="/blog/effective-project-management-strategies" element={<EffectiveProjectManagementStrategies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
