import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'
import { ImageGalleryProps } from '../../App.types'

const ImageGallery = ({ photos, onOpenModal }: ImageGalleryProps) => {
  return (
      <>
          <ul className={css.list}>
              {photos.map((photo) => {
                  return (
                      <li key={photo.id}>
                            <ImageCard photo={photo} onOpenModal={onOpenModal} />
                      </li>
                        )
                    }
                )}
      </ul>
      </>
  )
}

export default ImageGallery