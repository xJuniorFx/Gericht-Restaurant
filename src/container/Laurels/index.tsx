import React from "react";
import styles from "./Laurels.module.scss";
import SubHeading from "../../components/SubHeading";
import { images, data } from "../../constants";
import AwardCard from "../../components/AwardCard";

const Laurels = () => (
  <div className={styles.app__laurels} id="awards">
    <div className={styles.app__laurels_info}>
      <SubHeading title="Awards & recognition" />
      <h1 className={styles.app__laurels_info_h1}>Our Laurels</h1>

      <div className={styles.app__laurels_awards}>
        {data.awards.map((award) => (
          <AwardCard
            title={award.title}
            subTitle={award.subtitle}
            imgUrl={award.imgUrl}
            key={award.title}
          />
        ))}
      </div>
    </div>
    <div className={styles.app__laurels_img}>
      <img src={images.laurels} alt="Laurels img" />
    </div>
  </div>
);

export default Laurels;
