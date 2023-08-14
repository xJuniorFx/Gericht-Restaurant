import React from "react";
import style from "./Header.module.scss";
import SubHeading from "../../components/SubHeading";
import { images } from "../../constants";

const Header = () => (
  <div className={style.app__header} id="home">
    <div className={style.app__wrapper_info}>
      <SubHeading title="Chase The New Flavor" />
      <h1 className={style.app__header_h1}>The Key to Fine Dining</h1>
      <p className={style.app__header_p}>
        Welcome to our restaurant, where culinary excellence meets unparalleled
        hospitality. Embark on a gastronomic journey like no other, as we
        present a symphony of flavors crafted with the finest ingredients and
        served with passion. Our talented chefs and dedicated staff are
        committed to delivering an unforgettable dining experience that will
        tantalize your taste buds and leave you craving for more.
      </p>
      <button type="button" className={style.custom__button}>
        Explore Menu
      </button>
    </div>
    <div className={style.app__wrapper_img}>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
