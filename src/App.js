import Home from "./components/Home";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import StickyMenu from "./components/StickyBar";
import './App.css';



function App() {
  return (
    <>
      <Navbar />
      <Image />
      <StickyMenu />
      <Home />
    </>
  );
}

export default App;
