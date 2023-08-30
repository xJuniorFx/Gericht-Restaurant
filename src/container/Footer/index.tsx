import React from "react";
import styles from "./Footer.module.scss";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => (
  <div className={styles.app__footer}>
    <div className={styles.app__footer_content}>
      <div className={styles.app__footer_content_info}>
        <h1 className={styles.footer_content_info_h1}>Contact Us</h1>
        <p
          className={styles.footer_content_info_p}
          style={{ paddingBottom: 16 }}
        >
          9 W 53rd St, New York, NY 10019, USA
        </p>
        <p className={styles.footer_content_info_p}>+1 212-344-1230</p>
        <p
          className={styles.footer_content_info_p}
          style={{ paddingBottom: 28 }}
        >
          +1 212-555-1230
        </p>
      </div>
      <div className={styles.app__footer_content_gericht}>
        <h1 className={styles.footer_content_gericht_h1}>Gerícht</h1>
        <p className={styles.footer_content_gericht_p}>
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={images.spoon} alt="spoon" />
        <div className={styles.footer_content_gericht_media}>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className={styles.app__footer_content_info}>
        <h1 className={styles.footer_content_info_h1}>Working Hours</h1>
        <p className={styles.footer_content_info_p}>Monday-Friday:</p>
        <p
          className={styles.footer_content_info_p}
          style={{ paddingBottom: 16 }}
        >
          08:00 am -12:00 am
        </p>
        <p className={styles.footer_content_info_p}>Saturday-Sunday:</p>
        <p className={styles.footer_content_info_p}>07:00am -11:00 pm</p>
      </div>
    </div>
    <div className={styles.app__footer_copyright}>
      <p className={styles.app__footer_copyright_p}>
        2021 Gericht. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
