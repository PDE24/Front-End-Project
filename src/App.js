import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./Context/UserContext";

import Banner from "./Components/Banner";
import CurrentUserCard from "./Components/Users/CurrentUserCard";
import FullReview from "./Components/Reviews/FullReview";
import ReviewGallery from "./Components/Reviews/ReviewGallery";
import UserGallery from "./Components/Users/UserGallery";

function App() {
  const [user, setUser] = useState({
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
    name: "Peter Messy",
    username: "cooljmessy",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Banner />
          <CurrentUserCard user={user}/>
          <Routes>
            <Route path="/" element={<ReviewGallery />}></Route>
            <Route
              path="/reviews/:category"
              element={<ReviewGallery />}
            ></Route>
            <Route path="/review/:review_id" element={<FullReview />}></Route>
            <Route path="/users" element={<UserGallery />}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
