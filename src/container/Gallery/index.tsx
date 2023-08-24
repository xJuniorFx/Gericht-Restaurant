import React from "react";
import styles from "./Gallery.module.scss";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import SubHeading from "../../components/SubHeading";
import { images } from "../../constants";

const Images = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  return (
    <div className={styles.app__gallery} id="galery">
      <div className={styles.app__gallery_info}>
        <SubHeading title="Instagram" />
        <h1 className={styles.app__gallery_info_h1}>Photo Gallery</h1>
        <p className={styles.app__gallery_info_p}>
          Embark on a visual feast as you delve into our culinary creations,
          expertly captured through the lens of our Instagram journey. Join us
          in savoring these moments and discover the vibrant world of flavors we
          proudly showcase on Instagram.
        </p>
        <button type="button" className={styles.custom__button}>
          View More
        </button>
      </div>
      <div className={styles.app__gallery_images}>
        <div className={styles.app__gallery_images_container} ref={scrollRef}>
          {Images.map((image, index) => (
            <div
              className={styles.gallery_images_container_card}
              key={`gallery_image${index + 1}`}
            >
              <img src={image} alt="Gallery image" />
              <BsInstagram className={styles.image_icon} />
            </div>
          ))}
        </div>
        <div className={styles.app__gallery_images_arrow}>
          <BsArrowLeftShort
            className={styles.gallery_images_arrow_icon}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className={styles.gallery_images_arrow_icon}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
