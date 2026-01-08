import { ThemeProvider } from "./components/theme-provider";
import AboutPage from "./features/components/about/AboutPage";
import { AboutSection } from "./features/components/about/AboutSection";
import { Hero } from "./features/components/Hero";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Hero />
        <AboutPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
