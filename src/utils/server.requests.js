import axios from "axios"
import { GET_RECENT } from "./api.routes"
import { searchString } from "./function";

export const getRecentImages = async (imagesDispatch) => {
    try {
        const response = await axios.get(GET_RECENT);
        if (response.data.stat === "ok") {
            imagesDispatch({ type: "SET_IMAGES", payload: response.data.photos.photo })
        } else throw new Error("Problem connecting with Flickr")
    } catch (error) {
        
    }
}

export const search = async (text, imagesDispatch) => {
    console.log("inside search function");
    try {
        console.log("inside try block", searchString(text));
        const response = await axios.get(searchString(text));
        console.log(response);
        if (response.data.stat === "ok") {
            imagesDispatch({type: "SET_IMAGES", payload: response.data.photos.photo})
        } else throw new Error("Problem connecting with Flickr")
    } catch (error) {

    }
}