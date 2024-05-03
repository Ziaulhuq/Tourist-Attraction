import "./App.css";
import Forms from "./Components/Forms/Forms";
import Header from "./Components/Header/Header";
import Pagination from "./Components/Pagination/Pagination";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="pt-5">
      <Header />
      <Portfolio />
      <Forms />
      <Pagination />
    </div>
  );
}

export default App;
