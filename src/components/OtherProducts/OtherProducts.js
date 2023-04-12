import React from "react";
import OtherProductItem from "./OtherProductItem";
import classes from "./OtherProducts.module.css";
import H2Title from "../UI/H2Title";
import Container from "../UI/Container";

const OtherProducts = () => {
  return (
    <section className={classes["other-products-section"]}>
      <Container>
        <div className={classes["other-products-grid"]}>
          <div>
            <H2Title title={"Explore other TeamViewer solutions"} />
          </div>
          <OtherProductItem
            title="TeamViewer"
            description="Remote Access & Support"
          />
          <OtherProductItem
            title="TeamViewer Tensor"
            description="Remote Access and Support for customers with enterprise requirements."
          />
          <OtherProductItem
            title="TeamViewer Remote Management"
            description="Manage, monitor, track, patch and protect your devices, and software."
          />

          <OtherProductItem
            title="TeamViewer Engage"
            description="Customer engagement platform for online sales, customer service, and video consultations."
          />
          <OtherProductItem
            title="TeamViewer Assist AR"
            description="Easy, fast, and secure augmented reality-powered visual assistance to identify and solve problems."
          />
          <OtherProductItem
            title="TeamViewer IoT"
            description="Connect, monitor, and operate assets in manufacturing and production."
          />
          <OtherProductItem
            title="TeamViewer Frontline"
            description="Transform your frontline workflows with AR solutions."
          />
        </div>
      </Container>
    </section>
  );
};

export default OtherProducts;
