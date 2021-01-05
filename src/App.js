import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";

function App() {

  function handleSubmit(e, history, searchInput) {
    e.preventDefault();
    // e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  return (
    <HashRouter basename="/SnapScout">
      <div className="container">
        <Route 
          render={props => (
            <Header 
            handleSubmit={handleSubmit}
              history={props.history}
            />
          )} 
        />
      </div>
    </HashRouter>
  );
}

export default App;