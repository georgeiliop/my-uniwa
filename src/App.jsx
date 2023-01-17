import "./App.scss";
import Navbar from "./components/nav/Navbar";
import ContentGrid from "./components/contentGrid/ContentGrid";

function App() {
  return (
    <div className="App">
      <Navbar />

      <ContentGrid />
    </div>
  );
}

export default App;
