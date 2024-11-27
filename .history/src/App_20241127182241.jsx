import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <Switch>
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>

      <Footer />
    </Switch>
  );
}
