import React from "react";
import "./KickzAdded.css";
import { Link } from "react-router-dom";
import { deleteKick } from "../../modules/KickzAddedManager";

export const KickzAddedCard = ({ kick, handleDeleteKickz }) => {
  // const [kick, setKick] = useState([]);
  // const [isLoading, setIsLoading] = useState([true]);

  // const { kickId } = useParams();
  // const navigate = useNavigate();

  // const handleDeleteKickz = () => {
  //   //invoke the delete function in AnimalManger and re-direct to the animal list.
  //   setIsLoading(true);
  //   deleteKick(kickId).then(() => navigate("myCollection/added"));
  // };

  // // const handleDeleteKickz = (id) => {
  // //   deleteKick(id).then(() => getKickzById(kickId).then(setKick));
  // // };

  // useEffect(() => {
  //   //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
  //   console.log("useEffect", kickId);
  //   getKickzById(kickId).then((kick) => {
  //     setKick(kick);
  //     setIsLoading(false);
  //   });
  // }, [kickId]);

  return (
    //This formatting will build my actual card once API info is imported.

    <div className="card">
      <div className="card-content">
        <section className="card-header"></section>
        <section className="card-image">
          <img src={kick.img} alt="MyKickz" />
        </section>
        <h2>
          Brand: <span className="card-kickname">{kick.brand}</span>
        </h2>
        <p>Style: {kick.title}</p>
        <p>Colorway: {kick.colorway}</p> <p>year:{kick.year} </p>
        {/* <Link to={`/myCollection/extra`}>
          <button type="button" onClick={""}>
            Extra
          </button>
        </Link> */}
        <Link to={`myCollection/added`}>
          <button
            type="button"
            // disabled={isLoading}
            onClick={handleDeleteKickz}
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};
