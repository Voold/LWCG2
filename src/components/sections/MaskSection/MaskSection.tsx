import XRay from "../../XRay/XRay";
import styles from "./MaskSection.module.css"

const MaskSection = () => {
  return (
    <section className={styles.sectionBody}>
      <section className={styles.mainArea}>
        <XRay/>
      </section>
    </section>
  );
};

export default MaskSection;