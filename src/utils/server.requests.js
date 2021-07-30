import axios from "axios"
import { GET_RECENT } from "./api.routes"

export const getRecentImages = async (imagesDispatch) => {
    try {
        const response = await axios.get(GET_RECENT);
        if (response.data.stat === "ok") {
            imagesDispatch({ type: "SET_IMAGES", payload: response.data.photos.photo })
        } else throw new Error("Problem connecting with Flickr")
    } catch (error) {
        
    }
}