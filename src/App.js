import "./App.css";
import Navbar from "./compoents/Navbar";
import TextForm from "./compoents/TextForm"; // Corrected component name

function App() {
  return (
    <>
      <Navbar title="PenHolder" />
      <div className="container my-3">
      <TextForm heading = "Enter the text you want to analyze!"/> {/* Corrected component usage */}
      </div>
    </>
  );
}

export default App;
