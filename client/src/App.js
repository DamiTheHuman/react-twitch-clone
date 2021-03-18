import "./App.css";
import MiniHeader from "./components/Mobile/Header/MiniHeader";
import StreamsIndex from "./components/Mobile/Streams/StreamsIndex";
import StreamsBrowse from "./components/Mobile/Streams/StreamsBrowse";
import Stream from "./components/Mobile/Streams/Stream";

function App() {
  return (
    <div className="App font-inter bg-light">
      <MiniHeader />
      <div className="mt-12">
        <Stream />
      </div>
    </div>
  );
}

export default App;
