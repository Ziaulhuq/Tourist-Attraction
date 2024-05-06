import "./App.css";
import Forms from "./Components/Forms/Forms";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Pagination from "./Components/Pagination/Pagination";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="relative">
      <Nav />
      <Header />
      <Portfolio />
      <Forms />
      <Pagination />
    </div>
  );
}

export default App;
