import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getKickzById, updateKick } from "../../modules/KickzAddedManager";
import "./KickzAddedForm.css";

export const KickEditForm = () => {
  const [kick, setKick] = useState({ name: "", brand: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { kickId } = useParams();
  const navigate = useNavigate();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...kick };
    stateToChange[evt.target.id] = evt.target.value;
    setKick(stateToChange);
  };

  const updateExistingKick = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedKick = {
      id: parseInt(kickId),
      name: kick.name,
      brand: kick.brand,
      whenPurchased: kick.whenPurchased,
      whyDidYouBuy: kick.whyDidYouBuy,
    };

    updateKick(editedKick).then(() => navigate("/added"));
  };

  useEffect(() => {
    getKickzById(kickId).then((kick) => {
      setKick(kick);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={kick.name}
            />
            <label htmlFor="name">Kick name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="whenPurchased"
              value={kick.whenPurchased}
            />
            <label htmlFor="whenPurchased">When did you purchase?</label>

            <input
              type="radio"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="whyDidYouBuy"
              value={kick.whyDidYouBuy}
            />
            <label htmlFor="brand">Brand</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingKick}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
