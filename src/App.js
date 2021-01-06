import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {

  function handleSubmit(e, history, searchInput) {
    e.preventDefault();
    // e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  return (
    <PhotoContextProvider>
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
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountain" />} />
            <Route exact path="/mountain" render={() => <Item searchTerm="mountain" />} />
            <Route exact path="/beach" render={() => <Item searchTerm="beach" />} />
            <Route exact path="/bird" render={() => <Item searchTerm="bird" />} />
            <Route exact path="/food" render={() => <Item searchTerm="food" />} />
          </Switch>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;