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
const purple2 = '#575fcf'
const purple200 = '#4895ef'

// SECONDARY
const fieryRose = '#f53b57'
const fieryRose100 = '#ef5777'
const fieryRose200 = '#FF8091'
const fieryRose300 = '#FF99A7'

// DARK MODE
// PRIMARY
// const neonBlue = '#80ffdb'
const neonBlue = 'hsla(174, 100%, 48%, 1)'
const neonBlue100 = 'hsla(174, 100%, 58%, 1)'
const neonBlue200 = 'hsla(174, 97%, 73%, 1)'
const neonBlue300 = 'hsla(174, 97%, 86%, 1)'

const seaBlue = '#5390d9'
const aqua = '#56cfe1'
// SECONDARY

export const COLORS = {
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
  modal: {
    light: offLight, // almost white
    dark: '#0F3861', // Oxford Blue
  },
  background: {
    light, // white
    dark, // navy navy blue
  },
  accent: {
    light: '#A8A2F8',
    dark: neonBlue300,
  },
  primary: {
    light: purple2, // Pinkish-red
    dark: neonBlue, // Yellow
  },
  primary200: {
    light: purple200, // Pinkish-red
    dark: seaBlue, // Yellow
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

  // gradients
  gradientFirst: {
    light: purple,
    dark: neonBlue,
  },
  gradientSecond: {
    light: purple200,
    dark: seaBlue,
  },

  // states
  danger: {
    light: fieryRose100,
    dark: fieryRose200,
  },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
