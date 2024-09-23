export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    screens:{
    "start":"350px",
    "mobile":"376px",
    "mobilelg": "481px",
    "mini":"961px",
    "tab":"1024px",
    "laptop":"1215px"
    },
    fontFamily: {
      cerebri: ['CerebriSans', 'sans-serif'],
    },
    keyframes: {
      growShrink: {
        '0%': { width: '80px', height: '96px',},
        '50%': { width: '144px', height: '148px' },
        '100%': { width: '80px', height: '96px' },
      },
      growSize: {
        '0%': { width: '80px', height: '20px' },
        '50%': { width: '152px', height: '34px' },
        '100%': { width: '80px', height: '20px' },
      },
    },
    animation: {
      growShrink: 'growShrink 4s ease-in-out infinite',
      growSize: 'growSize 4s ease-in-out  inifinite',
    },
  },
};
export const plugins = [];