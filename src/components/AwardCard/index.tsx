import React from "react";
import styles from "./AwardCard.module.scss";

interface Award {
  imgUrl: string;
  title: string;
  subTitle: string;
}

const AwardCard = ({ title, subTitle, imgUrl }: Award) => (
  <div className={styles.app__Laurels_awards_card}>
    <img src={imgUrl} alt="Awards" />
    <div className={styles.Laurels_awards_card_content}>
      <p className={styles.Laurels_awards_card_content_title}>{title}</p>
      <p className={styles.Laurels_awards_card_content_subTitle}>{subTitle}</p>
    </div>
  </div>
);

export default AwardCard;
