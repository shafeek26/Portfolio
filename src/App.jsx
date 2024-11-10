import { ThemeProvider } from "./context/ThemeContext.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { ShootingStars } from "./ui/shooting-stars.jsx";
import { StarsBackground } from "./ui/stars-background.jsx";
import { InfiniteScroller } from "./components/InfiniteScrooler.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-mono py-4">
          <AboutMe />
          <InfiniteScroller />
          <Experience />
          <Projects />
          <Skills />
          <Footer />
        </div>
      </ThemeProvider>
      <ShootingStars />
      <StarsBackground />
    </>
  );
}

export default App;
