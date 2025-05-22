import ReactModal from 'react-modal'
import { useEffect, useState } from 'react'
import { ImageModalProps } from '../../App.types'

const ImageModal = ({ photo, onCloseModal }: ImageModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => setIsOpen(true), []);

    const style = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            border: 'none',  
        },
    }

  return (
      <>
          <ReactModal
              isOpen={isOpen}
              ariaHideApp={false}
              onRequestClose={onCloseModal}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
                style={style}
              >
              <div>
                    <img src={photo.urls.regular} alt={photo.slug} width="800" height="600" />
              </div>
        </ReactModal>
      </>
  )
}

export default ImageModal