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
import MathAngleLevel2 from "./pages/math/MathAngleLevel2";
import MathAngleLevel3 from "./pages/math/MathAngleLevel3";
import MathFractionLevel1 from "./pages/math/MathFractionLevel1";
import MathFractionLevel2 from "./pages/math/MathFractionLevel2";
import MathFractionLevel3 from "./pages/math/MathFractionLevel3";
import MathMultDivLevel1 from "./pages/math/MathMultDivLevel1";
import MathMultDivLevel2 from "./pages/math/MathMultDivLevel2";
import MathMultDivLevel3 from "./pages/math/MathMultDivLevel3";

// English Routes
import English from "./pages/English";
import EnglishPath from "./pages/english/EnglishPath";
import EnglishSongs from "./pages/EnglishSongs";
import EnglishFamily from "./pages/english/EnglishFamily";
import EnglishSchool from "./pages/english/EnglishSchool";
import EnglishAnimals from "./pages/english/EnglishAnimals";
import EnglishHouse from "./pages/english/EnglishHouse";
import EnglishBody from "./pages/english/EnglishBody";
import EnglishEmotions from "./pages/english/EnglishEmotions";

// Spanish Routes
import Spanish from "./pages/Spanish";
import SpanishPath from "./pages/spanish/SpanishPath";
import SpanishMonday from "./pages/spanish/SpanishMonday";
import SpanishTuesday from "./pages/spanish/SpanishTuesday";
import SpanishWednesday from "./pages/spanish/SpanishWednesday";
import SpanishThursday from "./pages/spanish/SpanishThursday";
import SpanishFriday from "./pages/spanish/SpanishFriday";

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

          {/* Math Routes - renamed to Spanish */}
          <Route path="/matematicas" element={<MathPath />} />
          <Route path="/matematicas/antiguo" element={<Math />} />
          <Route path="/matematicas/angulos/1" element={<MathAngleLevel1 />} />
          <Route path="/matematicas/angulos/2" element={<MathAngleLevel2 />} />
          <Route path="/matematicas/angulos/3" element={<MathAngleLevel3 />} />
          <Route path="/matematicas/fracciones/1" element={<MathFractionLevel1 />} />
          <Route path="/matematicas/fracciones/2" element={<MathFractionLevel2 />} />
          <Route path="/matematicas/fracciones/3" element={<MathFractionLevel3 />} />
          <Route path="/matematicas/mult-div/1" element={<MathMultDivLevel1 />} />
          <Route path="/matematicas/mult-div/2" element={<MathMultDivLevel2 />} />
          <Route path="/matematicas/mult-div/3" element={<MathMultDivLevel3 />} />

          {/* English Routes - renamed to Spanish */}
          <Route path="/ingles" element={<EnglishPath />} />
          <Route path="/ingles/antiguo" element={<English />} />
          <Route path="/ingles/canciones" element={<EnglishSongs />} />
          <Route path="/ingles/familia" element={<EnglishFamily />} />
          <Route path="/ingles/escuela" element={<EnglishSchool />} />
          <Route path="/ingles/animales" element={<EnglishAnimals />} />
          <Route path="/ingles/casa" element={<EnglishHouse />} />
          <Route path="/ingles/cuerpo" element={<EnglishBody />} />
          <Route path="/ingles/emociones" element={<EnglishEmotions />} />

          {/* Spanish Routes - renamed to Spanish */}
          <Route path="/espanol" element={<SpanishPath />} />
          <Route path="/espanol/antiguo" element={<Spanish />} />
          <Route path="/espanol/lunes" element={<SpanishMonday />} />
          <Route path="/espanol/martes" element={<SpanishTuesday />} />
          <Route path="/espanol/miercoles" element={<SpanishWednesday />} />
          <Route path="/espanol/jueves" element={<SpanishThursday />} />
          <Route path="/espanol/viernes" element={<SpanishFriday />} />

          {/* Keep backward compatibility for now */}
          <Route path="/math" element={<MathPath />} />
          <Route path="/math/old" element={<Math />} />
          <Route path="/math/angles/1" element={<MathAngleLevel1 />} />
          <Route path="/math/angles/2" element={<MathAngleLevel2 />} />
          <Route path="/math/angles/3" element={<MathAngleLevel3 />} />
          <Route path="/math/fractions/1" element={<MathFractionLevel1 />} />
          <Route path="/math/fractions/2" element={<MathFractionLevel2 />} />
          <Route path="/math/fractions/3" element={<MathFractionLevel3 />} />
          <Route path="/math/mult-div/1" element={<MathMultDivLevel1 />} />
          <Route path="/math/mult-div/2" element={<MathMultDivLevel2 />} />
          <Route path="/math/mult-div/3" element={<MathMultDivLevel3 />} />
          
          <Route path="/english" element={<EnglishPath />} />
          <Route path="/english/old" element={<English />} />
          <Route path="/english/songs" element={<EnglishSongs />} />
          <Route path="/english/family" element={<EnglishFamily />} />
          <Route path="/english/school" element={<EnglishSchool />} />
          <Route path="/english/animals" element={<EnglishAnimals />} />
          <Route path="/english/house" element={<EnglishHouse />} />
          <Route path="/english/body" element={<EnglishBody />} />
          <Route path="/english/emotions" element={<EnglishEmotions />} />
          <Route path="/spanish" element={<SpanishPath />} />
          <Route path="/spanish/old" element={<Spanish />} />
          <Route path="/spanish/monday" element={<SpanishMonday />} />
          <Route path="/spanish/tuesday" element={<SpanishTuesday />} />
          <Route path="/spanish/wednesday" element={<SpanishWednesday />} />
          <Route path="/spanish/thursday" element={<SpanishThursday />} />
          <Route path="/spanish/friday" element={<SpanishFriday />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
