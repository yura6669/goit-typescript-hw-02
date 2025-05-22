import { GalleryParams } from "../App.types";

export const getGallery = (params: GalleryParams) => {
    return `https://api.unsplash.com/search/photos?query=${params.query}&page=${params.page}&per_page=12&client_id=aFcwwcPK4TxrHvt7sJyZVrHeWsAURh8tQkf3XXiHVkE`;
}

export default getGallery;