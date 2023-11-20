/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1920px',
    },
    colors: {
      'primary-blue': '#3d85e1',
      'primary-grey':'#d6d7e0',
      'primary-background-button':'#3174c8',
      'primary-white':'#ffffff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        'xl': '10rem',
        's':'2rem',
        'xs':'0.5rem'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '9/16': '9/16'
      },
    }
  },
}
