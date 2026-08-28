import "./App.css";
import HandleTimer from "./components/HandleTimer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1>React-useEffect-TimerCleanupApp</h1>
        <HandleTimer />
      </div>
    </>
  );
}

export default App;
