import React, { useState, useEffect } from "react";
import {
  getShoesById,
  getAllShoes,
  getAllShoeCollections,
} from "../../modules/CollectionManager";
import { CollectionCard } from "./CollectionCard";
import { deleteShoe } from "../../modules/CollectionManager";
import { useNavigate } from "react-router-dom";

export const CollectionList = () => {
  const [shoes, setShoes] = useState([]);

  const navigate = useNavigate();

  const getShoes = () => {
    return getAllShoes().then((shoesFromAPI) => {
      setShoes(shoesFromAPI);
      // We'll do something more interesting with this data soon.
    });
  };

  useEffect(() => {
    getShoes();
  }, []);

  const handleDeleteShoe = (id) => {
    deleteShoe(id).then(() => getAllShoes().then(setShoes));
  };

  // const getKickz = () => {
  //   getAllShoes().then((shoes) => {
  //     setCollections(shoes)})

  // };

  return (
    <>
      {" "}
      <section className="section-header">
        <h1>Add Sneakers</h1>
      </section>
      <section className="section-btn">
        <button
          type="button"
          className="btn"
          onClick={() => {
            navigate("/myCollection/find");
          }}
        >
          Find
        </button>
      </section>
      <div className="container-cards">
        {shoes.map((shoe) => (
          <CollectionCard
            key={shoe.id}
            collection={shoe}
            handleDeleteShoe={handleDeleteShoe}
          />
        ))}
      </div>
    </>
  );
};
