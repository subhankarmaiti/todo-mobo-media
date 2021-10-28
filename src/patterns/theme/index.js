import { extendTheme } from 'native-base';

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        _focus: {
          borderColor: 'indigo.800',
        },
      },
    },

    Button: {
      baseStyle: {},
      defaultProps: {},
      variants: {
        solid: {
          bg: 'indigo.800',
          _pressed: {
            bg: 'indigo.900',
          },
        },
      },
    },
  },
});

export default theme;
