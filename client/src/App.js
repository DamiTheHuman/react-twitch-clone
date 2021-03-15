import "./App.css";
import MiniHeader from "./components/Mobile/Header/MiniHeader";
import StreamsBrowse from "./components/Mobile/Streams/StreamsBrowse";

function App() {
  return (
    <div className="App font-inter">
      <MiniHeader />
      <div className="my-16">
        <StreamsBrowse />
      </div>
    </div>
  );
}

export default App;
