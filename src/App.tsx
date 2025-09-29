import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Parents from "./pages/Parents";
import Nounous from "./pages/Nounous";
import CommentCaMarche from "./pages/CommentCaMarche";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import ParentProfile from "./pages/ParentProfile";
import NounouProfile from "./pages/NounouProfile";
import NotFound from "./pages/NotFound";
import { Analytics } from '@vercel/analytics/react';
 
const queryClient = new QueryClient();

const App = () => (
  <>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="nounouconnect-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/nounous" element={<Nounous />} />
            <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/parent/:id" element={<ParentProfile />} />
            <Route path="/nounou/:id" element={<NounouProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  <Analytics />
   </>
);

export default App;
