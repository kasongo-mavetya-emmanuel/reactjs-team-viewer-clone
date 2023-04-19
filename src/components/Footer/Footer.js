import React from "react";
import lightTeamViewerLogo from "../../assets/TeamViewer-Logo-light-1.svg";
import classes from "./Footer.module.css";
import Container from "../UI/Container";
import H3Title from "../UI/H3Title";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import LinkButton from "../UI/LinkButton";
import SocialMedia from "./SocialMedia";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className={classes["footer-section"]}>
      <div className={classes["top-img-container"]}></div>
      <div className={classes["footer-wrapper"]}>
        <Container>
          <div className={classes["footer-grid"]}>
            <div className={classes["logo-container"]}>
              <img src={lightTeamViewerLogo} />
              <LinkButton
                text={
                  <>
                    <TfiWorld
                      size={"2.4rem"}
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    Change Region{" "}
                    <IoIosArrowDown style={{ verticalAlign: "middle" }} />
                  </>
                }
                color={"#fff"}
              ></LinkButton>
            </div>

            <div className={classes["grid-links"]}>
              <div className={classes["grid-col-2"]}>
                <H3Title title={"PRODUCTS & SOLUTIONS"} />
                <ul>
                  <li>
                    TeamViewer Frontline{" "}
                    <span>
                      <FaArrowRight />
                    </span>{" "}
                  </li>
                  <li>
                    TeamViewer Tensor{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    TeaTeamViewer{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    mViewer Assist AR{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    TeamViewer Engage{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    TeamViewer IoT{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    TeamViewer Remote Management{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    TeamViewer Remote Management{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Pricing{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                </ul>
              </div>

              <div className={classes["grid-col-3"]}>
                <H3Title title={"RESOURCES"} />
                <ul>
                  <li>
                    Success Stories{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Events & Webinars{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    News & Insights{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Trust Center{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Glossary{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                </ul>
              </div>

              <div className={classes["grid-col-4"]}>
                <H3Title title={"SUPPORT"} />

                <ul>
                  <li>
                    Contact Support{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Guides & Manuals{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Knowledge Base{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    System Status{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Custom Modules{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    For Developers{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Community{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                </ul>
              </div>

              <div className={classes["grid-col-5"]}>
                <H3Title title={"COMPANY"} />

                <ul>
                  <li>
                    Investors{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Press{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Careers{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Leadership{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    About TeamViewer{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Sport Sponsorship{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Sustainability and CSR{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    Research Projects{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                  <li>
                    TeamViewer User Focus Program{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <SocialMedia />
          <FooterBottom />
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
