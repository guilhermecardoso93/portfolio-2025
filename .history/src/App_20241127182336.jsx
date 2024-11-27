import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Services } from "./components/Serv";

export function App() {
  return (
    <Switch>
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Footer />
    </Switch>
  );
}
