import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import NotFound from "./components/NotFound";

function App() {
  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Route>
            <Header handleSubmit={handleSubmit} />
          </Route>
          <Routes>
            <Route exact path="/" render={() => <Redirect to="/mountain" />} />
            <Route exact path="/mountain">
              <Item />
            </Route>
            <Route exact path="/beach">
              <Item />
            </Route>
            <Route exact path="/bird">
              <Item />
            </Route>
            <Route exact path="/food">
              <Item />
            </Route>
            <Route path="/search/:searchInput" children={<searchTerm />} />
            <Route>
              <NotFound />
            </Route>
          </Routes>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
