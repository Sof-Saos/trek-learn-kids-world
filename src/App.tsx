
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// Math Routes
import Math from "./pages/Math";
import MathPath from "./pages/math/MathPath";
import MathAngleLevel1 from "./pages/math/MathAngleLevel1";

// English Routes
import English from "./pages/English";
import EnglishPath from "./pages/english/EnglishPath";
import EnglishSongs from "./pages/EnglishSongs";
import EnglishFamily from "./pages/english/EnglishFamily";

// Spanish Routes
import Spanish from "./pages/Spanish";
import SpanishPath from "./pages/spanish/SpanishPath";
import SpanishMonday from "./pages/spanish/SpanishMonday";

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

          {/* Math Routes */}
          <Route path="/math" element={<MathPath />} />
          <Route path="/math/old" element={<Math />} />
          <Route path="/math/angles/1" element={<MathAngleLevel1 />} />

          {/* English Routes */}
          <Route path="/english" element={<EnglishPath />} />
          <Route path="/english/old" element={<English />} />
          <Route path="/english/songs" element={<EnglishSongs />} />
          <Route path="/english/family" element={<EnglishFamily />} />

          {/* Spanish Routes */}
          <Route path="/spanish" element={<SpanishPath />} />
          <Route path="/spanish/old" element={<Spanish />} />
          <Route path="/spanish/monday" element={<SpanishMonday />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
