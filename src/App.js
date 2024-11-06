import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/bootstrap.scss";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <TodoList /> */}
      <Footer />
    </div>
  );
}

export default App;
