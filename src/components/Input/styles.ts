import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  variant: 'normal' | 'outlined'
  error?: boolean
}

const wrapperModifiers = {
  outlined: (theme: DefaultTheme) => css`
    label {
      font-size: 2rem;
    }

    input {
      max-width: 33.2rem;
      padding: 1.3rem 1.8rem;

      border: 1px solid ${theme.colors.primary.dark};
      background-color: transparent;
    }
  `,
  normal: (theme: DefaultTheme) => css`
    label {
      font-size: 2.2rem;
    }

    input {
      border: none;
      background-color: ${theme.colors.gray.lighter};
      border: 1px solid ${theme.colors.gray.lighter};

      padding: 2.2rem 2.4rem;
    }
  `,
  error: (theme: DefaultTheme) => css`
    input {
      border: 0.1rem solid ${theme.colors.red.main};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant, error }) => css`
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 1.6rem;
      color: ${theme.colors.primary.dark};
    }

    ${!!variant && wrapperModifiers[variant](theme)};
    ${!!error && wrapperModifiers.error(theme)}

    input {
      outline: none;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      width: 100%;

      transition: border-color 0.2s ease-in;

      &:focus {
        border: 0.1rem solid
          ${error ? theme.colors.red.dark : theme.colors.primary.main};
      }

      &::placeholder {
        color: ${theme.colors.gray.main};
        font-weight: ${theme.font.weight.medium};
      }
    }

    .error {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-top: 1rem;

      font-size: 1.3rem;
      color: ${theme.colors.red.main};
    }
  `}
`
