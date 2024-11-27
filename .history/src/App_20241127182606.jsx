import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Services } from "./components/Serv";
import { Footer } from "./components/Footer";
export function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
