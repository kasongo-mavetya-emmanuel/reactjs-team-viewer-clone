import React from "react";
import PatnerItem from "./PatnerItem";
import microsoftItune from "../../assets/partners/logo-microsoft-intune-landscape-1.jpg";
import freshwork from "../../assets/partners/logo-freshworks-landscape-1.svg";
import jira from "../../assets/partners/logo-jira-symbol.svg";
import microsoftTeam from "../../assets/partners/logo-microsoft-teams-symbol.svg";
import salesforce from "../../assets/partners/logo-salesforce-landscape.svg";
import sap from "../../assets/partners/logo-sap-landscape-1.svg";
import serviceNow from "../../assets/partners/logo-servicenow-landscape.svg";
import classes from "./Patners.module.css";
import H2Title from "../UI/H2Title";
import Container from "../UI/Container";

const Patners = () => {
  return (
    <section className={classes["patners-section"]}>
      <Container>
        <div className={classes["patner-title-container"]}>
          <H2Title title={"Integration Partners"}></H2Title>
        </div>
        <div className={classes["patners-grid"]}>
          <PatnerItem
            icon={sap}
            title={"SAP"}
            description={
              "Digitalize almost any industrial process – from logistics picking to field service. "
            }
          />

          <PatnerItem
            icon={microsoftTeam}
            title={"Teams"}
            description={
              "Expand the potential of Microsoft Teams with remote device control and AR-based remote support capabilities. "
            }
          />
          <PatnerItem
            icon={salesforce}
            title={"Salesforce"}
            description={
              "Extend the scope of your Salesforce Sales and Service Cloud with remote support functionality."
            }
          />
          <PatnerItem
            icon={freshwork}
            title={"FreshWorks"}
            description={
              "Supercharge your Freshworks set-up with remote access and control capabilities."
            }
          />
          <PatnerItem
            icon={microsoftItune}
            title={"Microsoft Intune"}
            description={
              "Activate remote support and control for your Intune-managed devices."
            }
          />
          <PatnerItem
            icon={jira}
            title={"Jira"}
            description={
              "Add remote connectivity to your Jira platform to boost internal collaboration and support your customers."
            }
          />
          <PatnerItem
            icon={serviceNow}
            title={"ServiceNow"}
            description={
              "Make your ServiceNow workflows even smoother with remote support functionality."
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Patners;
