import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpider } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
            MustafaTravels {""}
            <FontAwesomeIcon icon={faSpider} />
          </span>
        </Link>
        {user ? (
          <>
            <div>
              <text
                style={{
                  borderBottomWidth: "2px",
                  borderBottomColor: "#fff",
                  paddingBottom: "5px",
                  borderBottomStyle: "solid",
                }}
              >
                {user.username}
              </text>
              <button
                className="navButton"
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
