import { ModalState } from "./Images";
import { ImagesState } from "./ImagesContext";

const ImageView = ({
  image,
  setModal,
}: {
  image: ImagesState;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}) => {
  return (
    <div className="modal">
      <div
        className="modal-empty"
        onClick={() =>
          setModal({
            status: "hide",
            image: {} as ImagesState,
          })
        }
      ></div>

      <img
        alt="random image"
        className="modal-view"
        key={image.id}
        style={{ margin: "1rem", maxWidth: "70vw" }}
        src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg`}
      />
    </div>
  );
};

export default ImageView;
