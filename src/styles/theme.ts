export default {
  container: {
    dashboard: '130rem',
    app: '120rem'
  },
  font: {
    family: 'Inter, sans-serif',
    sizes: {
      small: '2.4rem',
      medium: '3.6rem',
      large: '3.8rem',
      xlarge: '4.8rem',
      huge: '7.2rem'
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  colors: {
    white: {
      main: '#FFFFFF'
    },
    primary: {
      main: '#052B63',
      dark: '#05142B',
      darker: '#052E51'
    },
    gray: {
      lighter: '#F5F8FA',
      light: '#F4F5F7',
      main: '#AEAEB3',
      dark: '#7A7A80',
      darker: '#48474A'
    },
    black: {
      main: '#18191F'
    },
    green: {
      main: '#03B252',
      dark: '#027335'
    },
    red: {
      main: '#DE3838',
      dark: '#B2122C'
    }
  } as const
}
