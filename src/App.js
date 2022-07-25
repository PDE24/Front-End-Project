import "./App.css";

import Banner from "./Componants/Banner";
import CurrentUserCard from "./Componants/CurrentUserCard";
import ReviewGallery from "./Componants/ReviewGallery";

function App() {
  return (
    <div className="App">
  
      <Banner />
      <CurrentUserCard />
      
      <ReviewGallery />
    </div>
  );
}

export default App;
