import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* <MyNav title="Strivestaurant" />
      <Route exact path="/" render={(routerProps) => <Home {...routerProps} title="Strivestaurant" />} />
      <Route path="/reservations" component={Reservations} />
      <Route path="/menu" component={Menu} /> */}
      </Router>
    </div>
  );
}

export default App;
