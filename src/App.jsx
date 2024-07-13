import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import useLocalStorage from "use-local-storage";

const App = () => {
  const defaultDark = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "light" : "dark"
  );

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <Header switchTheme={switchTheme} />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer switchTheme={switchTheme} />
    </div>
  );
};

export default App;
