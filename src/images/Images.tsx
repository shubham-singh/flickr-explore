import { useEffect } from "react";
import { getRecentImages } from "../utils/server.requests";
import { useImagesContext } from "./ImagesContext";

const Images = () => {
  const imagesContext = useImagesContext();

  useEffect(() => {
    getRecentImages(imagesContext?.imagesDispatch);
  }, []);

  return (
    <div>
      {imagesContext?.images.images.map((image) => {
        return (
          <img
            style={{ margin: "1rem" }}
            src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`}
          />
        );
      })}
    </div>
  );
};

export default Images;
