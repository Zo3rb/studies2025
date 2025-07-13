import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faTaxi,
  faCarSide,
  faMagnet,
} from "@fortawesome/free-solid-svg-icons";

// Local Imports
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <div>
              <FontAwesomeIcon icon={faBed} fixedWidth size="xl" />
            </div>
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <div>
              <FontAwesomeIcon icon={faPlane} fixedWidth size="xl" />
            </div>
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <div>
              <FontAwesomeIcon icon={faCarSide} fixedWidth size="xl" />
            </div>
            <span>Car Rental</span>
          </div>

          <div className="headerListItem">
            <div>
              <FontAwesomeIcon icon={faMagnet} fixedWidth size="xl" />
            </div>
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <div>
              <FontAwesomeIcon icon={faTaxi} fixedWidth size="xl" />
            </div>
            <span>Airport Taxis</span>
          </div>
        </div>

        <div className="headerInfo">
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>

          <p className="headerDesc">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free booker account
          </p>

          <button className="headerCTA">Sign in / Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
