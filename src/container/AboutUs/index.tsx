import React from "react";
import styles from "./AboutUs.module.scss";
import { images } from "../../constants";

const AboutUs = () => (
  <div className={styles.app__aboutUs} id="about">
    <div className={styles.app__aboutUs_overlay}>
      <img src={images.G} alt="G letter" />
    </div>

    <div className={styles.app__aboutUs_content}>
      <div className={styles.app__aboutUs_content_about}>
        <h1 className={styles.aboutUs_content_about_h1}>About Us</h1>
        <img
          src={images.spoon}
          alt="About_spoon"
          className={styles.spoon__img}
        />
        <p className={styles.aboutUs_content_about_p}>
          Led by a team of seasoned chefs, each dish on our menu tells a unique
          story inspired by global influences and local ingredients. We strive
          to create an ambiance where dining is not just a meal, but an artistic
          journey.
        </p>
        <button type="button" className={styles.custom__button}>
          Know More
        </button>
      </div>

      <div className={styles.app__aboutUs_content_knife}>
        <img src={images.knife} alt="About_knife" />
      </div>

      <div className={styles.app__aboutUs_content_history}>
        <h1 className={styles.aboutUs_content_history_h1}>Our History</h1>
        <img
          src={images.spoon}
          alt="About_spoon"
          className={styles.spoon__img}
        />
        <p className={styles.aboutUs_content_history_p}>
          Gerícht stands as a testament to the rich tapestry of history and
          flavors that have woven together to create a dining establishment that
          unites diverse culinary traditions under one roof.
        </p>
        <button type="button" className={styles.custom__button}>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
