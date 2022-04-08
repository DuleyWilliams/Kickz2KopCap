import React, { useState, useEffect } from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getAllShoes,
  addShoe,
  deleteShoe,
  getAllShoeCollections,
} from "../../modules/CollectionManager";

export const CollectionView = ({ collection, handleDeleteShoe }) => {
  const [myShoes, setMyShoe] = useState({
    id: [],
    brand: collection.brand,
    colorway: collection.colorway,
    shoeId: collection.id,
    img: collection.media.smallImageUrl,
    name: collection.name,
    title: collection.title,
    year: collection.year,
  });

  // const handleDeleteShoe = (id) => {
  //   deleteShoe(id).then(() => getAllShoes().then(setShoes));
  // };

  const navigate = useNavigate();

  //What does this do? How do I want to use it?
  const getLocalShoes = () => {
    return getAllShoeCollections().then((shoeLimitsFromAPI) => {
      setMyShoe(shoeLimitsFromAPI);
    });
  };
  useEffect(() => {
    getLocalShoes();
  }, []);

  return (
    //This formatting will build my actual card once API info is imported.
    <>
      <div className="card">
        <div className="card-close">
          <section className="card-header">
            <p>id:{myShoes.shoeId} </p>
            <p>year:{myShoes.year} </p>
          </section>
          <button>
            <img
              className="card-closeButton"
              src="./images/xmark-solid.svg"
              alt="my image"
              onClick={() => handleDeleteShoe(myShoes.id)}
            />
          </button>

          {
            <section className="card-image">
              <img src={collection.img} alt="MyKickz" />
            </section>
          }
          <h2>
            Brand: <span className="card-kickname">{collection.brand}</span>
          </h2>
          <p>Style: {collection.title}</p>
          <p>Colorway: {collection.colorway}</p>
          <Link to={`/myCollection/${collection.id}`}>
            <button type="button" onClick={""}>
              Extra
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
