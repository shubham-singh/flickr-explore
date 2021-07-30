import axios from "axios";
import { GET_RECENT } from "./api.routes";
import { searchString } from "./function";

export const getRecentImages = async (imagesDispatch, setLoader) => {
  try {
    setLoader("show");
    const response = await axios.get(GET_RECENT);
    if (response.data.stat === "ok") {
      imagesDispatch({
        type: "SET_IMAGES",
        payload: response.data.photos.photo,
      });
      setLoader("no")
    } else throw new Error("Problem connecting with Flickr");
  } catch (error) {}
};

export const search = async (text, imagesDispatch, setLoader) => {
  try {
    setLoader("show");
    const response = await axios.get(searchString(text));
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
