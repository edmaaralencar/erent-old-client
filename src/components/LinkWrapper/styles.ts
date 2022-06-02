import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  size: 'normal' | 'large'
}

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    span {
      font-weight: ${theme.font.weight.medium};
      color: ${theme.colors.black.main};
      font-size: 1.6rem;
    }

    .icon {
      width: 2.2rem;
      height: 2.2rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    span {
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.colors.black.main};
      font-size: 3rem;
    }

    .icon {
      width: 3rem;
      height: 3rem;
    }
  `
}

export const Wrapper = styled.a<WrapperProps>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    text-decoration: none;

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
