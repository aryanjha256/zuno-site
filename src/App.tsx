import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";

/** Single viewport, no page scroll — the screenshot deck bleeds past the fold. */
const App = () => (
  <div className="flex h-[100svh] flex-col overflow-hidden">
    <Nav />
    <Hero />
  </div>
);

export default App;
