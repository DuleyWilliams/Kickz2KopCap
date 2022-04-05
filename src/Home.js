import React, { useState, useEffect } from "react";
import { PropsAndState } from "./components/PropsAndState";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <h2>New Releases</h2>
    <small>Check here for new Kickz</small>

    <fieldset>
      <Link to="/register">
        <button type="submit">Sign-up</button>
      </Link>
      <Link to="/login">
        <button type="submit">Login</button>
      </Link>
    </fieldset>
  </>
);
