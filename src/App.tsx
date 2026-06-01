import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { Resources } from "@/pages/Resources";
import { Contact } from "@/pages/Contact";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const t = setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          80,
        );
        return () => clearTimeout(t);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/services" element={<Navigate to="/#services" replace />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
