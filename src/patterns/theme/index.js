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
    Checkbox: {
      baseStyle: {
        _pressed: {
          _interactionBox: {
            bg: 'indigo.200',
          },
        },
        _checked: {
          borderColor: 'indigo.800',
          bg: 'indigo.800',
        },
      },
    },
  },
});

export default theme;
