import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Banner from "./Componants/Banner";
import CurrentUserCard from "./Componants/CurrentUserCard";
import ReviewGallery from "./Componants/ReviewGallery";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
      <Banner />
      <CurrentUserCard />
      <Routes>
        <Route path="/" element={<ReviewGallery />}></Route>
      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
