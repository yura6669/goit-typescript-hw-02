import css from './ImageCard.module.css'
import { ImageCardProps } from '../../App.types'

const ImageCard = ({ photo, onOpenModal }: ImageCardProps) => {
  console.log(photo);
    return (
        <div className={css.img} onClick={() => onOpenModal(photo)}>
		  <img src={photo.urls.small} alt={photo.slug} width="400" height="300" />
		</div>
  )
}

export default ImageCard