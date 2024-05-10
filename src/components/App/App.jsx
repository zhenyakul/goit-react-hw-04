import { useEffect, useState } from "react";
import "./App.css";
import fetchPhotoData from "../../api/unsplashApi";
import Searchbar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [photoData, setPhotoData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const handleSearch = async (input) => {
    setQuery(input);
    setPage(1);
    setPhotoData([]);
  };

  const handleLoad = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query == "") {
      return;
    }

    async function fetchData() {
      try {
        setLoader(true);
        const data = await fetchPhotoData(query, page);
        setPhotoData((prevData) => [...prevData, ...data]);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, [query, page]);

  const onOpenModal = () => {
    setModalIsOpen(true);
  };
  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  const onClickModal = (imageSrc) => {
    setModalSrc(imageSrc);
    onOpenModal();
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {photoData.length > 0 && (
        <ImageGallery photoData={photoData} onClickModal={onClickModal} />
      )}
      {loader && <Loader />}
      {photoData != "" && <LoadMoreButton onLoadMore={handleLoad} />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={onCloseModal}
          src={modalSrc}
        />
      )}
    </>
  );
}

export default App;
