import React from "react";
import styles from "./Menuitem.module.scss";

interface Props {
  key: string;
  title: string;
  price: string;
  tag: string;
}

const MenuItem = ({ title, price, tag }: Props) => (
  <div className={styles.app__menuItem}>
    <div className={styles.app__menuItem_head}>
      <div className={styles.app__menuItem_name}>
        <p className={styles.app__menuItem_name_p}>{title}</p>
      </div>

      <div className={styles.app__menuItem_dash} />

      <div className={styles.app__menuItem_price}>
        <p className={styles.app__menuItem_price_p}>{price}</p>
      </div>
    </div>
    <div className={styles.app__menuItem_sub}>
      <p className={styles.app__menuItem_sub_p}>{tag}</p>
    </div>
  </div>
);

export default MenuItem;
