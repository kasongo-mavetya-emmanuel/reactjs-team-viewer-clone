import React, { useState } from "react";
import classes from "./Menu.module.css";
import { IconContext } from "react-icons";
import { FaAngleDown } from "react-icons/fa";
import TalkToSales from "../UI/TalkToSales";

const Menu = () => {
  const [isProduct, setIsProduct] = useState(false);
  const [isResource, setIsResource] = useState(false);
  const [isPatner, setIsPatner] = useState(false);

  const toggleProduct = () => {
    setIsProduct((prev) => !prev);
    setIsPatner(false);
    setIsResource(false);
  };

  const toggleResource = () => {
    setIsResource((prev) => !prev);
    setIsProduct(false);
    setIsPatner(false);
  };

  const togglePatner = () => {
    setIsPatner((prev) => !prev);
    setIsProduct(false);
    setIsResource(false);
  };

  return (
    <div className={classes["menu-container"]}>
      <nav className={`${classes["nav"]}`}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <ul className={`${classes["nav-list"]}`}>
            <li>
              <a onClick={toggleProduct}>
                {" "}
                <span>
                  Products & solution <FaAngleDown />
                </span>
              </a>
              {isProduct && (
                <ul>
                  <li>
                    <a>TeamViewer Remote</a>
                  </li>
                  <li>
                    <a>TeamViewer Frontline</a>
                  </li>
                  <li>
                    <a>Automotive</a>
                  </li>
                  <li>
                    <a>Field Service</a>
                  </li>
                  <li>
                    <a>Food and Beverage</a>
                  </li>
                  <li>
                    <a>Retail</a>
                  </li>
                  <li>
                    <a>Third-Party Logistics</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a onClick={toggleResource}>
                {" "}
                Resources <FaAngleDown />
              </a>
              {isResource && (
                <ul>
                  <li>
                    <a>Success Stories</a>
                  </li>
                  <li>
                    <a>Events & Webinars</a>
                  </li>
                  <li>
                    <a>News & Insights</a>
                  </li>
                  <li>
                    <a>Trust Center</a>
                  </li>
                  <li>
                    <a>Glossary</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a onClick={togglePatner}>
                {" "}
                Patner <FaAngleDown />
              </a>
              {isPatner && (
                <ul>
                  <li>
                    <a>Become a Partner</a>
                  </li>
                  <li>
                    <a>Find a Partner</a>
                  </li>
                  <li>
                    <a>Existing Partner Login</a>
                  </li>
                  <li>
                    <a>Integration Partners</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a>
                Pricing <FaAngleDown />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </nav>
      <div className={classes["boutton-section"]}>
        <TalkToSales />
      </div>
    </div>
  );
};

export default Menu;
