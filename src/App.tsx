import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDarkMode } from "./darkMode/";

import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
