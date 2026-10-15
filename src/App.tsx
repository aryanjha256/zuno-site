import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

const App = () => (
  <div className="min-h-svh overflow-x-clip">
    <Nav />
    <main>
      <Hero />
      <Features />
    </main>
    <Footer />
  </div>
);

export default App;
