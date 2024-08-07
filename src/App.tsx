import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Sections } from "./App.types";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Projects from "./pages/Projects/Projects";

export const ViewCtx = createContext<{
  currentSectionState: [Sections, Dispatch<SetStateAction<Sections>>];
}>(null);

function App() {
  const [currentSection, setCurrentSection] = useState<Sections>("ProfileTitle");

  return (
    <ViewCtx.Provider
      value={{
        currentSectionState: [currentSection, setCurrentSection],
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </ViewCtx.Provider>
  );
}

export default App;
