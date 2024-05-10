import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ src, onClickModal, srcFull }) {
  return (
    <div>
      <img
        src={src}
        alt="image"
        className={css.image}
        onClick={() => {
          onClickModal(srcFull);
          console.log(srcFull);
        }}
      />
    </div>
  );
}
