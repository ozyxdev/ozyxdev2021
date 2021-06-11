/* eslint-disable no-unused-vars */
const black = 'hsla(210, 73%, 8%, 1)'
const dark = 'hsla(210, 73%, 10%, 1)'
const offDark = 'hsla(210, 73%, 15%, 1)'
const white = 'hsla(206, 67%, 100%, 1)'
const light = 'hsla(206, 67%, 99%, 1)'
const offLight = 'hsla(206, 67%, 97%, 1)'
const darkGray = 'hsla(218, 22%, 17%, 1)'

// LIGHT MODE

// PRIMARY
const purple = '#3f37c9'
const purple200 = '#4895ef'
const fieryRose = 'hsla(352, 100%, 58%, 1)'

// SECONDARY

// DARK MODE
// PRIMARY
const neonBlue = '#80ffdb'
const neonBlue200 = '#5390d9'
const aqua = '#56cfe1'
// SECONDARY

export const COLORS = {
  transparent: {
    light: 'rgba(0, 0, 0, 0.05)',
    dark: 'rgba(0, 0, 0, 0.05)',
  },
  text: {
    light: offDark, // Oxford Blue Dark
    dark: light, // white
  },
  offBackground: {
    light: offLight, // almost white
    dark: offDark, // Oxford Blue
  },
  offBackgroundReverse: {
    dark: offLight, // almost white
    light: offDark, // Oxford Blue
  },
  navigation: {
    light: offLight, // almost white
    dark: black, // Oxford Blue
  },
  sheet: {
    light: '#E7E6FD', // almost white
    dark: '#0F3861', // Oxford Blue
  },
  background: {
    light, // white
    dark, // navy navy blue
  },
  accent: {
    light: '#A8A2F8',
    dark: '#6DFDEF',
  },
  primary: {
    light: purple, // Pinkish-red
    dark: neonBlue, // Yellow
  },
  primary200: {
    light: purple200, // Pinkish-red
    dark: neonBlue200, // Yellow
  },
  secondary: {
    light: fieryRose, // Purplish-blue
    dark: aqua, // Cyan
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
