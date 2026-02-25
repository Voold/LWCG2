import styles from "./MorphingSection.module.css"
import MorphingCardSVGFilter from '../../MorphingCardSVGFilter/MorphingCardSVGFilter'

const MorphingSection = () => {
  return (
    <section className={styles.sectionBody}>
      <MorphingCardSVGFilter/>
    </section>
  );
};

export default MorphingSection;