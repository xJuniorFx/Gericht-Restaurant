import React from "react";
import style from "./SubHeading.module.scss";
import { images } from "../../constants/";

interface props {
  title: string;
}

const SubHeading = ({ title }: props) => {
  return (
    <div className={style.header__subHeading}>
      <p className={style.subHeading__title}>{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
