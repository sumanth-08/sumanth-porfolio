import About from "./components/About";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
// import "./App.css";

function App() {
  return (
    <>
      {/* <div className="App"> */}
        <div class="absolute top-0 z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Navbar />
        <About />
        <Tech />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
