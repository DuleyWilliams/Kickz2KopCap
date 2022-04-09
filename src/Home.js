import React, { useState, useEffect } from "react";
import { PropsAndState } from "./components/PropsAndState";
import { Link } from "react-router-dom";
import { KickSpotlight } from "./components/kickzAdded/KickzAddedSpotlight";
import { getRandomId } from "./modules/KickzAddedManager";

export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightKick = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightKick();
  }, []);

  return (
    <>
      <h2>New Releases</h2>
      <small>Check here for new Kickz</small>

      <Link to="/register">
        <button type="submit">Sign-up</button>
      </Link>

      <Link to="/login">
        <button type="submit">Login</button>
      </Link>

      <h1>Kickz Spotlight</h1>
      <button onClick={refreshSpotlightKick}>Reload &#x27f3;</button>
      {spotlightId && <KickSpotlight KickId={spotlightId} />}
    </>
  );
};
