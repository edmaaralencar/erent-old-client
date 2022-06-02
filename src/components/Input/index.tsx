import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import * as S from './styles'

export type InputProps = {
  variant?: 'normal' | 'outlined'
  label: string
  error: {
    message: string
  }
  name: string
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { variant = 'normal', label, name, error, ...rest },
  ref
) => {
  return (
    <S.Wrapper variant={variant}>
      <label htmlFor={name}>{label}</label>
      <input name={name} ref={ref} {...rest} />

      {!!error && <span className="error">{error.message}</span>}
    </S.Wrapper>
  )
}

export default forwardRef(Input)
