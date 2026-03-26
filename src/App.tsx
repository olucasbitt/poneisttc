import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ScrollToHash } from "./components/layout/ScrollToHash";
import { Home } from "./pages/Home";
import Stallions from "./pages/Stallions";
import Mares from "./pages/Mares";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <div className="min-h-screen bg-white text-[var(--color-brown-900)]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garanhoes" element={<Stallions />} />
            <Route path="/matrizes" element={<Mares />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;