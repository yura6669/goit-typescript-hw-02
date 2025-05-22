import css from './ErrorMessage.module.css'
import { ErrorMessageProps } from '../../App.types'

const ErrorMessage = ({message}: ErrorMessageProps) => {
  return (
      <>
        <p className={css.message}>{ message }</p>
      </>
  )
}

export default ErrorMessage