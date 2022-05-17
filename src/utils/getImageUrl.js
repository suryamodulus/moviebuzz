import { API_IMAGE_BASE_URL } from "config";

export const getImageUrl = (path, text) => {
  return path
    ? `${API_IMAGE_BASE_URL}/w185/${path}`
    : `https://via.placeholder.com/185x278/746A64/ffffff?text=${text}`;
};
