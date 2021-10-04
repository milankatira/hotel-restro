import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalstyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Hero  slides={SliderData}/>
    </div>
  );
}

export default App;
