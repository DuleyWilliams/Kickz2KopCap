import React, { useState, useEffect } from "react";
import { getKickzById } from "../../modules/KickzAddedManager";
import "./KickzAddedSpotlight.css";

export const KickSpotlight = ({ kickId }) => {
  const [kick, setKick] = useState({});

  useEffect(() => {
    getKickzById(kickId).then((kick) => {
      setKick(kick);
    });
  }, [kickId]);

  return (
    <div className="kick-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{kick.name}</h3>
        <p>{kick.brand}</p>
      </div>
    </div>
  );
};
