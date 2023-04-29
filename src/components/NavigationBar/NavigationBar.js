import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./NavigationBar.module.css";
import Container from "../UI/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";

const NavigationBar = (props) => {
  return (
    <header>
      <Container>
        <div className={classes["header-grid"]}>
          <div className={classes["icon-block"]}>
            <svg
              id={classes.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 830.73 111.33"
            >
              <defs>
                <style>{`.cls-1{fill:#050a52;}`}</style>
              </defs>
              <g>
                <path
                  className="cls-1"
                  d="M524.08,35.45v63.95h18.14V35.45h-18.14Zm9.14-25.73c7.21,0,10.68,4.76,10.68,10.81s-3.47,10.42-10.68,10.42-10.81-4.63-10.81-10.42,3.6-10.81,10.81-10.81Z"
                />
                <path
                  className="cls-1"
                  d="M787.63,99.4V47.54l-3.73-12.09h17.37l3.73,10.94c3.09-7.85,9.39-12.22,18.53-12.22,2.7,0,5.28,.51,7.21,1.16v17.5c-2.06-.64-4.37-1.03-6.95-1.03-12.61,0-18.14,8.75-18.14,20.59v27.02h-18.01Z"
                />
                <polygon
                  className="cls-1"
                  points="654.84 99.4 632.58 99.4 613.15 35.45 633.22 35.45 645.44 82.15 656.51 45.87 653.29 35.45 672.46 35.45 685.46 82.28 697.42 35.45 716.34 35.45 696.65 99.4 674.52 99.4 664.87 68.9 654.84 99.4"
                />
                <polygon
                  className="cls-1"
                  points="464.12 99.4 434.27 12.16 455.37 12.16 475.44 79.32 496.54 12.16 516.36 12.16 486.38 99.4 464.12 99.4"
                />
                <path
                  className="cls-1"
                  d="M778.97,66.46c0-19.04-11.71-32.3-29.72-32.3-20.72,0-33.07,15.44-33.07,33.58s12.22,32.81,32.17,32.81c13.51,0,22.13-4.5,28.18-12.22l-11.84-9.91c-3.6,4.63-8.49,7.46-15.05,7.46-8.88,0-14.02-5.15-15.18-13.25h44.26c.13-2.06,.26-3.99,.26-6.18Zm-18.27-5.15h-26.25c1.16-8.11,5.28-12.87,14.15-12.87,8.11,0,11.97,5.92,12.09,12.87Z"
                />
                <path
                  className="cls-1"
                  d="M612.69,66.46c0-19.04-11.58-32.3-29.72-32.3-20.46,0-32.81,15.44-32.81,33.58s11.97,32.81,32.17,32.81c13.51,0,22-4.5,28.18-12.22l-11.84-9.91c-3.73,4.63-8.49,7.46-15.05,7.46-8.88,0-14.15-5.15-15.31-13.25h44.13c.26-2.06,.26-3.99,.26-6.18Zm-18.14-5.15h-26.25c1.16-8.11,5.4-12.87,14.28-12.87,7.98,0,11.84,5.92,11.97,12.87Z"
                />
                <g>
                  <polygon
                    className="cls-1"
                    points="158.36 99.29 158.36 28.65 129.03 28.65 129.03 12.05 206.48 12.05 206.48 28.65 177.28 28.65 177.28 99.29 158.36 99.29"
                  />
                  <path
                    className="cls-1"
                    d="M255.64,66.35c0-19.04-12.09-32.3-30.11-32.3-20.59,0-32.81,15.44-32.81,33.58s12.09,32.81,32.3,32.81c13.51,0,22.13-4.5,28.05-12.22l-11.84-9.91c-3.47,4.63-8.49,7.46-15.18,7.46-8.75,0-13.9-5.15-14.93-13.25h44.13c.13-2.06,.39-3.99,.39-6.18Zm-44.52-5.15c1.03-8.11,5.28-12.87,14.03-12.87,8.24,0,11.97,5.92,12.22,12.87h-26.25Z"
                  />
                  <path
                    className="cls-1"
                    d="M328.85,87.06V35.34h-15.83v7.08h-.13c-4.5-4.89-10.94-8.36-19.56-8.36-18.4,0-31.01,14.28-31.01,33.45s12.61,32.94,31.01,32.94c8.62,0,15.05-2.83,19.56-7.72h.13l2.06,6.56h17.76l-3.99-12.22Zm-32.04-1.54c-10.29,0-15.7-8.23-15.7-18.4,0-9.14,5.28-18.01,15.7-18.01s15.83,9.01,15.83,18.01c0,10.16-4.5,18.4-15.83,18.4Z"
                  />
                  <path
                    className="cls-1"
                    d="M372.21,50.52c-7.08,0-10.94,5.53-10.94,13.64v35.13h-18.14V47.43l-3.86-12.09h17.76l3.09,9.91c2.96-6.3,8.88-11.19,18.53-11.19,7.72,0,13.12,3.73,16.21,9.78,4.25-5.66,10.81-9.78,20.46-9.78,15.18,0,20.84,11.32,20.84,27.02v38.21h-18.14V63.39c0-8.62-1.93-12.87-8.49-12.87s-10.81,5.53-10.81,13.64v35.26h-18.01V63.39c0-8.62-2.06-12.87-8.49-12.87Z"
                  />
                </g>
              </g>
              <path
                className="cls-1"
                d="M94.86,0H16.48C7.38,0,0,7.38,0,16.48V94.86c0,9.1,7.38,16.48,16.48,16.48H94.86c9.1,0,16.48-7.38,16.48-16.48V16.48c0-9.1-7.38-16.48-16.48-16.48ZM55.67,100.42c-24.72,0-44.76-20.04-44.76-44.76S30.95,10.91,55.67,10.91s44.76,20.04,44.76,44.76-20.04,44.76-44.76,44.76Z"
              />
              <polygon
                className="cls-1"
                points="93.57 55.66 64.69 39.88 67.87 49.83 43.47 49.83 46.64 39.88 17.76 55.67 46.64 71.46 43.47 61.5 67.87 61.5 64.69 71.46 93.57 55.66"
              />
            </svg>
          </div>

          <nav className={`${classes["main-nav"]}`}>
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" } }}
            >
              <ul className={`${classes["main-nav-list"]}`}>
                <li>
                  <a>
                    {" "}
                    Products & solution <FaAngleDown />
                  </a>

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
                </li>
                <li>
                  <a>
                    {" "}
                    Resources <FaAngleDown />
                  </a>
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
                </li>
                <li>
                  <a>
                    {" "}
                    Patner <FaAngleDown />
                  </a>

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
                </li>
                <li>
                  <a>
                    Pricing <FaAngleDown />
                  </a>
                </li>
              </ul>
            </IconContext.Provider>
          </nav>
          <button className={classes["contact-sale-button"]}>
            <div className={classes["button-content"]}>
              <span className={classes.text}>Talk To Sales</span>{" "}
              <span className={classes.arrow}>&rarr;</span>
            </div>
          </button>

          {/* table cta */}
          <div className={classes["cta-table"]}>
            <button>
              <FaPhoneAlt size={"2rem"} />
            </button>
            <button onClick={props.onToggle}>
              <TfiMenu size={"2.4rem"} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavigationBar;
