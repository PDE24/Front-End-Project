import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Banner from "./Components/Banner";
import CurrentUserCard from "./Components/CurrentUserCard";
import ReviewGallery from "./Components/Reviews/ReviewGallery";
import { UserContext } from "./Context/UserContext";

function App() {
  const [user, setUser] = useState()

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <Banner />
      <CurrentUserCard />
      <Routes>
        <Route path="/reviews" element={<ReviewGallery />}></Route>
        <Route path="/reviews/:category" element={<ReviewGallery />}></Route>
      </Routes>
      
      
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
