import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";

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
