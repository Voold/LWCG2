import styles from "./MorphingCardSVGFilter.module.css";
import angry from "../../assets/kitty/angry_kitty.png";
import happy from "../../assets/kitty/happy_kitty.png";
import sleep from "../../assets/kitty/sleep_kitty.png";
import wow from "../../assets/kitty/wow_kitty.png";

interface KittyState {
  src: string;
  alt: string;
}

const KITTIES: KittyState[] = [
  { src: sleep, alt: "Спящий котик" },
  { src: angry, alt: "Сердитый котик" },
  { src: sleep, alt: "Спящий котик" },
  { src: happy, alt: "Счастливый котик" },
  { src: sleep, alt: "Спящий котик" },
  { src: wow,   alt: "Удивленный котик" },
];

const MorphingCardSVGFilter = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {KITTIES.map((kitty, index) => (
          <img
            key={index}
            src={kitty.src}
            className={styles.image}
            style={{ animationDelay: `${index * 1}s` }}
            alt={kitty.alt}
          />
        ))}
      </div>
      <div className={styles.above}></div>

    </div>
  );
};

export default MorphingCardSVGFilter;