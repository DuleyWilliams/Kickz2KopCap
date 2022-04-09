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
      <main className="full-site">
        <section className="left_home">
          <h2>New Releases</h2>
          <small>Check here for new Kickz</small>

          <div className="home--btn--group">
            <Link to="/register">
              <button className="home--button" type="submit">
                Sign-up
              </button>
            </Link>

            <Link to="/login">
              <button className="home--button" type="submit">
                Login
              </button>
            </Link>
          </div>
          <div className="brand--logos">
            <img src="/images/brand_logos2.png" />
          </div>
        </section>
        <section className="right_home">
          <div className="brand--box">
            <img src="/images/boxes2.png" />
          </div>
        </section>
      </main>
      {/* <h1>Kickz Spotlight</h1>
      <button onClick={refreshSpotlightKick}>Reload &#x27f3;</button>
      {spotlightId && <KickSpotlight KickId={spotlightId} />} */}
    </>
  );
};
