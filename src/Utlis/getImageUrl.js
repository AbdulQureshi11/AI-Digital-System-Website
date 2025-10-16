import { baseURL } from "./baseUrl";

export const getImageUrl = (img) => {
    if (!img) return "";
    if (img.startsWith("http://localhost") || img.startsWith("https://localhost")) {
        return img.replace("localhost", window.location.hostname);
    }
    if (img.startsWith("http://") || img.startsWith("https://")) {
        return img;
    }
    return `${baseURL}/uploads/${img}`;
};
