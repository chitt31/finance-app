export const tokens = {
  grey: {
    100: "#FFFF00",
    200: "#4793AF",
    300: "#DDDDDD",
    400: "#DDDDDD",
    500: "#7EA1FF",
    600: "#DDDDDD",
    700: "#DDDDDD",
    800: "#DDDDDD",
    900: "#DDDDDD",
  },
  primary: {
    // light green
    100: "#d0fcf4",
    200: "#a0f9e9",
    300: "#F7DCB9",
    400: "#41f2d3",
    500: "#627254",
    600: "#0ebfa0",
    700: "#0b8f78",
    800: "#076050",
    900: "#043028",
  },
  secondary: {
    // yellow
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#6C0345",
    400: "#f5c377",
    500: "#FFD1E3",
    600: "#c29044",
    700: "#6C0345",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple
    500: "#FB9AD1",
  },
  background: {
    light: "#673F69",
    main: "#FFFAB7",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: "#FFFF00",
      light: tokens.background.light,
      
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
