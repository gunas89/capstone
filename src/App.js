import "./App.css";
import { Body } from "./Components/Body";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header showLogo title='Welcome to Shipping Management' />
      <Body />
    </div>
  );
}

export default App;
