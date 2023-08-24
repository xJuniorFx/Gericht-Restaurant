import React from "react";
import styles from "./FindUs.module.scss";
import SubHeading from "../../components/SubHeading";
import { images } from "../../constants";

const FindUs = () => (
  <div className={styles.app__contact} id="contact">
    <div className={styles.app__contact_content}>
      <SubHeading title="Contact" />
      <h1 className={styles.app__contact_content_h1}>Find Us</h1>
      <p className={styles.app__contact_content_p}>
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>
      <div className={styles.app__contact_content_info}>
        <h1 className={styles.contact_content_info_h1}>Opening Hours</h1>
        <p className={styles.contact_content_info_p}>
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className={styles.contact_content_info_p}>
          Sat - Sun: 10:00 am - 03:00 am
        </p>
      </div>
      <button type="button" className={styles.custom__button}>
        Visit Us
      </button>
    </div>
    <div className={styles.app__contact_img}>
      <img src={images.findus} alt="Drink img" />
    </div>
  </div>
);

export default FindUs;
