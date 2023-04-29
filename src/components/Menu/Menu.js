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
              <a onClick={toggleProduct} href="/#">
                {" "}
                <span>
                  Products & solution <FaAngleDown />
                </span>
              </a>
              {isProduct && (
                <ul>
                  <li>
                    <a href="/#">TeamViewer Remote</a>
                  </li>
                  <li>
                    <a href="/#">TeamViewer Frontline</a>
                  </li>
                  <li>
                    <a href="/#">Automotive</a>
                  </li>
                  <li>
                    <a href="/#">Field Service</a>
                  </li>
                  <li>
                    <a href="/#">Food and Beverage</a>
                  </li>
                  <li>
                    <a href="/#">Retail</a>
                  </li>
                  <li>
                    <a href="/#">Third-Party Logistics</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a onClick={toggleResource} href="/#">
                {" "}
                Resources <FaAngleDown />
              </a>
              {isResource && (
                <ul>
                  <li>
                    <a href="/#">Success Stories</a>
                  </li>
                  <li>
                    <a href="/#">Events & Webinars</a>
                  </li>
                  <li>
                    <a href="/#">News & Insights</a>
                  </li>
                  <li>
                    <a href="/#">Trust Center</a>
                  </li>
                  <li>
                    <a href="/#">Glossary</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a onClick={togglePatner} href="/#">
                {" "}
                Patner <FaAngleDown />
              </a>
              {isPatner && (
                <ul>
                  <li>
                    <a href="/#">Become a Partner</a>
                  </li>
                  <li>
                    <a href="/#">Find a Partner</a>
                  </li>
                  <li>
                    <a href="/#">Existing Partner Login</a>
                  </li>
                  <li>
                    <a href="/#">Integration Partners</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/#">
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
