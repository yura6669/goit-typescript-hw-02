import SearchBar from "./components/SearchBar/SearchBar"
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import axios from "axios";

import { useState, useEffect } from 'react';
import { getGallery } from './core/gallery';
import ImageModal from "./components/ImageModal/ImageModal";
import {GalleryParams, Photo, convertToPhoto } from "./App.types";

function App() {

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);
    setError('');

    const galleryParams: GalleryParams = {
      query: query,
      page: page,
    };
    const url = getGallery(galleryParams);
    axios.get(url)
      .then(response => {
        const { results, total_pages } = response.data;
        const photos = results.map((item: any) => convertToPhoto(item));
        setPhotos(prevItems => [...prevItems, ...photos]);
        setTotalPages(total_pages);
      })
      .catch(() => {
        setError('Error fetching data. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);
  
  const onSearch = (query: string) => { 
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setTotalPages(0);
    setError('');
  }

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
   }

  const onOpenModal = (item: Photo) => { 
    setSelectedPhoto(item);
  }

  const onCloseModal = () => { 
    setSelectedPhoto(null);
  }

  const isShowLoadMoreBtn = photos.length > 0 && !loading && page < totalPages;
  const isShowError = error !== '';

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {photos.length > 0 && <ImageGallery photos={photos} onOpenModal={onOpenModal} />}
      {isShowLoadMoreBtn && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {loading && <Loader />}  
      {isShowError && <ErrorMessage message={error} />}
      {selectedPhoto && <ImageModal photo={selectedPhoto} onCloseModal={onCloseModal} />}
    </>
  )
}

export default App
