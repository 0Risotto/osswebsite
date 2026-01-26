import { ThemeProvider } from "./components/theme-provider";
import AboutPage from "./main/about/AboutPage";
import { Hero } from "./main/hero/Hero";

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
