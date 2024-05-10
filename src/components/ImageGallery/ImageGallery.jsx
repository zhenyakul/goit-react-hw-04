import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ photoData, onClickModal }) {
  return (
    <ul className={css.list}>
      {photoData.map((photo) => {
        return (
          <li key={photo.id} className={css.listItem}>
            <ImageGalleryItem
              src={photo.urls.small}
              onClickModal={onClickModal}
              srcFull={photo.urls.full}
            />
          </li>
        );
      })}
    </ul>
  );
}
