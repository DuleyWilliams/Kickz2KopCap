import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Home } from "./Home";
import { CollectionCard } from "./components/myCollection/CollectionCard.js";
import { CollectionView } from "./components/myCollection/CollectionView";
import { CollectionList } from "./components/myCollection/CollectionList";

import { FindShoeList } from "./components/myCollection/CollectionFind.js";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const setAuthUser = (user) => {
    sessionStorage.setItem("kickz2Kop_customer", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("kickz2Kop_customer") !== null);
  };

  return (
    <>
      <Routes>
        {/* Render the location list when http://localhost:3000/ */}
        <Route path="/" element={<Home />} />

        {/* <Route path="/myCollection" element={<CollectionList />} /> */}

        <Route
          exact
          path="/myCollection/"
          element={
            <PrivateRoute>
              <CollectionList />
            </PrivateRoute>
          }
        />

        {/* <Route path="/myCollection/view" element={<CollectionList />} /> */}

        <Route path="/myCollection/view" element={<CollectionView />} />

        <Route
          exact
          path="/myCollection/find"
          element={
            <PrivateRoute>
              <FindShoeList />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/login"
          element={<Login setAuthUser={setAuthUser} />}
        />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
