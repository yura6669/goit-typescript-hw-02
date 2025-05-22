import css from './LoadMoreBtn.module.css'
import { LoadMoreButtonProps } from '../../App.types'


const LoadMoreBtn = ({ onLoadMore }: LoadMoreButtonProps) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>Load more</button>
  )
}

export default LoadMoreBtn