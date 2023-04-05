import manImg from "../../assets/benefits/man-providing-remote-support.jpg";
import mobileImg from "../../assets/benefits/product-teamviewer-mobile-device-support.jpg";
import BenefitItem from "./BenefitItem";

const Benefits = () => {
  return (
    <section>
      <div>
        <h2>One product. Any device. Endless uses.</h2>
        <a href="#">Explore more &larr;</a>
        <img scr={manImg} />
        <img scr={mobileImg} />
      </div>
      <div>
        <BenefitItem
          title={"REMOTE ACCESS"}
          subTitle={"Work from anywhere with full access to any device"}
          description={
            "Stay productive wherever you are with unrestricted access to all your files and applications, as well as your mobile devices and servers. No VPN required."
          }
        />

        <BenefitItem
          title={"REMOTE SUPPORT"}
          subTitle={"Instant remote support for customers and employees"}
          description={
            "Forget costly site visits and solve any IT problem remotely with the market’s most secure and powerful support platform. Compatible with almost any device – including headless ones such as servers."
          }
        />

        <BenefitItem
          title={"REMOTE WORK"}
          subTitle={"Support any mobile device"}
          description={
            "Keep remote workers on the go with the market’s widest device coverage. We cover all Android devices and also provide iOS screen sharing – an industry first."
          }
        />
      </div>
    </section>
  );
};

export default Benefits;
