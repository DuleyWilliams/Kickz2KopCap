import React, { useState, useEffect } from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
import { getAllShoes } from "../../modules/CollectionManager";
import { addShoe } from "../../modules/CollectionManager";
import { useNavigate } from "react-router-dom";

export const CollectionCard = ({ collection, handleDeleteCollection }) => {
  const handleClickSaveShoe = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the for
    addShoe(collection).then(() => navigate("/view"));
  };

  const navigate = useNavigate();

  return (
    //This formatting will build my actual card once API info is imported.

    <div className="card">
      <div className="card-content">
        <section className="card-header"></section>
        <section className="card-image">
          <img src={collection.media.imageUrl} alt="MyKickz" />
        </section>
        <h2>
          Brand: <span className="card-kickname">{collection.brand}</span>
        </h2>
        <p>Style: {collection.title}</p>
        <p>Colorway: {collection.colorway}</p> <p>year:{collection.year} </p>
        <Link to={`/myCollection/${collection.id}`}>
          <button type="button" onClick={handleClickSaveShoe}>
            Add
          </button>
        </Link>
      </div>
    </div>
  );
};
