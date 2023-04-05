import OtherProductItem from "./OtherProductItem";

const OtherProducts = () => {
  return (
    <section>
      <div>
        <h2>Explore other TeamViewer solutions</h2>
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
    </section>
  );
};

export default OtherProducts;
