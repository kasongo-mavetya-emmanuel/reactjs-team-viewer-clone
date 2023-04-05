import FeatureItem from "./FeatureItem";
import { AiFillCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <section>
      <h2>What sets TeamViewer apart?</h2>
      <div>
        <FeatureItem
          icon={<AiFillCheckCircle />}
          title={"The widest device and platform coverage"}
          description={
            "TeamViewer covers almost 130 mobile device manufacturers, operating systems, and IoT devices – more than double the nearest competitor."
          }
        />

        <FeatureItem
          icon={<AiFillCheckCircle />}
          title={"Best-in-class usability and performance"}
          description={
            "Runs out of the box with no need for installations or complicated configurations. Ranked No.1 by Qualitest in a comprehensive technical performance test that assessed usability, image quality, and file transfer speeds."
          }
        />

        <FeatureItem
          icon={<AiFillCheckCircle />}
          title={"A relentless focus on security"}
          description={
            "TeamViewer is protected by end-to-end 256-bit AES encryption, two-factor authentication, granular access management, device authorization and other industry-grade security features. We comply fully with GDPR and are certified according to SOC2, HIPAA/HITECH, and ISO 9001:2015. All TeamViewer data center partners have been ISO/IEC 27001 certified."
          }
        />
      </div>
    </section>
  );
};

export default Features;
