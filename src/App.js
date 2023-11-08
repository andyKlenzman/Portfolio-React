import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import Header from "./components/organisms/Header";
import GoToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/project/:id" element={<ProjectPage />}></Route>
      </Routes>
      <GoToTop />
    </div>
  );
}

export default App;
