import React, { useState, useEffect } from "react";
import { KickzAddedCard } from "./KickzAddedCard";
import { deleteKick } from "../../modules/KickzAddedManager";
import { useNavigate } from "react-router-dom";
import { getAllKickz, getKickzById } from "../../modules/KickzAddedManager";

export const KickzAddedList = () => {
  const [kickz, setKickz] = useState([]);

  const navigate = useNavigate();

  const getKickz = () => {
    return getAllKickz().then((kickzFromAPI) => {
      setKickz(kickzFromAPI);
      // We'll do something more interesting with this data soon.
    });
  };

  // setIsLoading(true);
  // deleteKick(kickId).then(() => navigate("/added"));

  useEffect(() => {
    getKickz();
  }, []);

  // useEffect(() => {
  //   //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
  //   console.log("useEffect", kickId);
  //   getKickzById(kickId).then((kick) => {
  //     setKickz(kick);
  //     setIsLoading(false);
  //   });
  // }, [kickId]);

  const handleDeleteKick = (id) => {
    deleteKick(id).then(() => getAllKickz().then(setKickz));
  };

  return (
    <>
      {" "}
      <section className="section-header">
        <h1>Added Sneakers</h1>
      </section>
      <section className="container_button">
        <button
          type="button"
          className="btn"
          onClick={() => {
            navigate("/myCollection/");
          }}
        >
          Find
        </button>
      </section>
      <div className="container-cards">
        {kickz.map((kick) => (
          <KickzAddedCard
            key={kick.id}
            kick={kick}
            handleDeleteKick={handleDeleteKick}
          />
        ))}
      </div>
    </>
  );
};
