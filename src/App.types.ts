export type GalleryParams = {
    query: string;
    page: number;
};

export type Photo = {
    id: string;
    slug: string;
    urls: Urls;
}

export type Urls =  {
    small: string;
    regular: string;
}

export type SearchBarProps = {
  onSearch: (query: string) => void;
};

export type ImageGalleryProps = {
    photos: Photo[];
    onOpenModal: (photo: Photo) => void;
}

export type ImageCardProps = {
    photo: Photo;
    onOpenModal: (photo: Photo) => void;
}

export type LoadMoreButtonProps = {
    onLoadMore: () => void;
}

export type ErrorMessageProps = {
    message: string;
}

export type ImageModalProps = {
    photo: Photo;
    onCloseModal: () => void;
}

export function convertToPhoto(data: any): Photo {
    return {
        id: data.id,
        slug: data.slug,
        urls: {
            small: data.urls.small,
            regular: data.urls.regular,
        },
    };
}