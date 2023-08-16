import React from "react";
import styles from "./Menu.module.scss";
import SubHeading from "../../components/SubHeading";
import { images, data } from "../../constants";
import MenuItem from "../../components/Menuitem";

const SpecialMenu = () => (
  <div className={styles.app__menu} id="menu">
    <div className={styles.app__menu_title}>
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className={styles.app__menu_title_h1}>Today's Special</h1>
    </div>
    <div className={styles.app__menu_content}>
      <div className={styles.app__menu_content_drinks}>
        <h2 className={styles.menu_content_drinks_h2}>Wine & Beer</h2>
        <div className={styles.menu_content_drinks_items}>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tag={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className={styles.app__menu_content_img}>
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className={styles.app__menu_content_drinks}>
        <h2 className={styles.menu_content_drinks_h2}>Cocktails</h2>
        <div className={styles.menu_content_drinks_items}>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tag={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className={styles.app__menu_button}>
      <button type="button" className={styles.custom__button}>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
