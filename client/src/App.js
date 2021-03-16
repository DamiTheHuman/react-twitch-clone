import "./App.css";
import MiniHeader from "./components/Mobile/Header/MiniHeader";
import StreamsIndex from "./components/Mobile/Streams/StreamsIndex";
import StreamsBrowse from "./components/Mobile/Streams/StreamsBrowse";

function App() {
  return (
    <div className="App font-inter bg-light">
      <MiniHeader />
      <div className="my-16">
        <StreamsIndex />
      </div>
    </div>
  );
}

export default App;
