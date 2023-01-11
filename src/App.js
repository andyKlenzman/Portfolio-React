import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import Banner from './components/organisms/Banner';
import Header from './components/organisms/Header';
import IconContainer from './components/molecules/IconContainer';


function App() {
  return (
  
    <div className="App">
      <Header />
       <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/project/:id" element={<ProjectPage />}></Route>
        <Route path="/test" element={<IconContainer />}></Route>
       </Routes>
      
    </div>
  );
}

export default App;
