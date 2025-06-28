// App.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";          // 🆕 see next section
import Loader from "./components/Loader";          // optional spinner

// Lazy‑loaded pages
const Hero       = lazy(() => import("./pages/Hero"));
const About      = lazy(() => import("./pages/About"));
const Skills     = lazy(() => import("./pages/Skills"));
const Portfolio  = lazy(() => import("./pages/Portfolio"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact    = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index         element={<Hero />} />
          <Route path="about"  element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work"   element={<Portfolio />} />
          <Route path="xp"     element={<Experience />} />
          <Route path="contact"element={<Contact />} />
          {/* 404 fallback */}
          <Route path="*" element={<Hero />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
