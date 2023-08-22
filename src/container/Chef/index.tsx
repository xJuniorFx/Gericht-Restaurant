import React from "react";
import styles from "./Chef.module.scss";
import SubHeading from "../../components/SubHeading";
import { images } from "../../constants";

const Chef = () => (
  <div className={styles.app__chef} id="chef">
    <div className={styles.app__chef_img}>
      <img src={images.chef} alt="Chef img" />
    </div>
    <div className={styles.app__chef_info}>
      <SubHeading title="Chef's Word" />
      <h1 className={styles.app__chef_info_h1}>What We Believe In</h1>

      <div className={styles.app__chef_info_content}>
        <div className={styles.chef_info_content_quote}>
          <img src={images.quote} alt="Quote img" />
          <p className={styles.chef_content_quote_p}>
            Cooking is my way of expressing love and creativity.
          </p>
        </div>
        <p className={styles.chef_content_quote_p}>
          Every dish that i make is a piece of my heart, a fusion of my travels,
          and a homage to the culinary traditions that have shaped me. Join us
          on a culinary expedition where each bite tells a story of passion, a
          journey of flavors that transcends borders.Gerícht is where every
          flavor is an ode to the art of bringing people together.
        </p>
      </div>
      <div className={styles.app__chef_sign}>
        <p className={styles.app__chef_sign_name}>Kevin Luo</p>
        <p className={styles.app__chef_sign_role}>Chef & Founder</p>
        <img src={images.sign} alt="Sign img" />
      </div>
    </div>
  </div>
);

export default Chef;
