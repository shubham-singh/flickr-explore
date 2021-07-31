import { useState } from "react";
import { useEffect } from "react";
import Loader from "../loader/Loader";
import { useLoader } from "../loader/LoaderContext";
import { getRecentImages, search } from "../utils/server.requests";
import { ImagesState, useImages } from "./ImagesContext";
import ImageView from "./ImageView";

export interface ModalState {
  status: "show" | "hide";
  image: ImagesState;
}

const Images = () => {
  const imagesContext = useImages();
  const loaderContext = useLoader();

  const [modal, setModal] = useState({} as ModalState);

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (imagesContext?.images.search === null) {
        getRecentImages(imagesContext?.images.page, imagesContext?.imagesDispatch, loaderContext?.setLoader);
      } else {
        search(
          imagesContext?.images.page,
          imagesContext?.images.search,
          imagesContext?.imagesDispatch,
          loaderContext?.setLoader
        );
      }
    }
  }

  useEffect(() => {
    getRecentImages(imagesContext?.images.page, imagesContext?.imagesDispatch, loaderContext?.setLoader);
  }, []);

  const showImages = () => {
    if (loaderContext?.loader === "show") {
      return <Loader />;
    } else {
      return imagesContext?.images.images.map((image, index) => {
        return (
          <img
            onClick={() =>
              setModal({
                status: "show",
                image: image,
              })
            }
            alt="random image"
            className="pointer"
            key={index}
            style={{ margin: "1rem", maxWidth: "90vw" }}
            src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`}
          />
        );
      });
    }
  };

  return (
    <div>
      {modal.status === "show" && (
        <ImageView image={modal.image} setModal={setModal} />
      )}
      {showImages()}
    </div>
  );
};

export default Images;
