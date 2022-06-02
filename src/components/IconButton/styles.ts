import styled, { css, DefaultTheme } from 'styled-components'

export type WrapperProps = {
  variant: 'primary' | 'white'
}

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.main};

    .icon {
      color: ${theme.colors.white.main};
    }
  `,
  white: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white.main};

    border: 1px solid #dce2e5;

    .icon {
      color: #617480;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant }) => css`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 1rem;

    cursor: pointer;

    ${!!variant && wrapperModifiers[variant](theme)};
  `}
`
