import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  variant: 'normal' | 'outlined'
}

const wrapperModifiers = {
  outlined: (theme: DefaultTheme) => css`
    label {
      font-size: 2.4rem;
    }

    input {
      max-width: 33.2rem;
      padding: 1.5rem 2.4rem;

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

      padding: 2.2rem 2.4rem;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant }) => css`
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 1.6rem;
      color: ${theme.colors.primary.dark};
    }

    ${!!variant && wrapperModifiers[variant](theme)};

    input {
      outline: none;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      width: 100%;

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
