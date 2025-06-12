import "./profilemenudrop.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img
        className="profile-pic dropbtn"
        src="https://i2.seadn.io/polygon/0x2953399124f0cbb46d2cbacd8a89cf0599974963/a732f82bd560265ff7f2a724828e05/f2a732f82bd560265ff7f2a724828e05.png?w=1000"
        alt="profile"
      />
      <div className="profile-hightlight-dropdown">
        <p> Portfolio Website </p>
        <p> Tamilla Zeynalova </p>
        <p> tzeynalovaa@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src="https://i2.seadn.io/polygon/0x2953399124f0cbb46d2cbacd8a89cf0599974963/a732f82bd560265ff7f2a724828e05/f2a732f82bd560265ff7f2a724828e05.png?w=1000"
            alt="profile"
          />
          <p className="detail-text"> Tamilla Zeynalova </p>
          <p className="detail-text"> tzeynalovaa@gmail.com </p>
        </div>
        <Link className="second-detail" to="/about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </Link>
        <div className="third-detail">
          <a href="https://github.com/tamillaaa"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/PROTechThor/gfolio"> View code </a> <span> • </span>
          <Link to="/blog"> Blog & news </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
