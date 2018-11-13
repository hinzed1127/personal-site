import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  basLineHeight: 1.666,
  headerFontFamily: ['Oswald', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Lato', 'serif'],
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['400'],
    },
    {
      name: 'Lato',
      styles: ['400'],
    },
  ],
});

// typography.injectStyles();
export default typography;
