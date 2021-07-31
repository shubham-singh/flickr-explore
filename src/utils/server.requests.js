import axios from "axios";
import { getRecentString, searchString } from "./function";

export const getRecentImages = async (page, imagesDispatch, setLoader) => {
  try {
    page === 1 && setLoader("show");
    const response = await axios.get(getRecentString(page));
    if (response.data.stat === "ok") {
      imagesDispatch({
        type: "SET_IMAGES",
        payload: response.data.photos.photo,
      });
      setLoader("no");
    } else throw new Error("Problem connecting with Flickr");
  } catch (error) {}
};

export const search = async (page, text, imagesDispatch, setLoader) => {
  try {
    page === 1 && setLoader("show");
    const response = await axios.get(searchString(page, text));
    if (response.data.stat === "ok") {
      setLoader("no");
      imagesDispatch({
        type: "SET_IMAGES",
        payload: response.data.photos.photo,
      });
    } else throw new Error("Problem connecting with Flickr");
  } catch (error) {
    setLoader("no");
  }
};
