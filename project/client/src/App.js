import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar"
import Homescreens from "./screens/Homescreens"
import Productdescription from './screens/Productdescription';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Homescreens} />
        <Route exact path="/product/:id" component={Productdescription} />
        <Route exact path="/" component={Homescreens} />
      </BrowserRouter>
    </div>
  );
}

export default App;
