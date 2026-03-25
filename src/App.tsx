import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-brown-900)]">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
