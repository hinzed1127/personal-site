import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  basLineHeight: 1.666,
  headerFontFamily: ['Roboto', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Lato', 'serif'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '500'],
    },
    {
      name: 'Oswald',
      styles: ['400'],
    },
    {
      name: 'Lato',
      styles: ['400'],
    },
  ],
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    p: {
      marginBottom: rhythm(1),
      marginTop: rhythm(1),
    },
  }),
});

// typography.injectStyles();
export default typography;
