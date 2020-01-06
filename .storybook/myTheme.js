import { create } from '@storybook/theming/create'
import logo from '../static/logoheader.png'

export default create({
  base: 'dark',

  colorPrimary: 'yellow',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#333333',
  appContentBg: '#4E4E4E',
  appBorderColor: '#4E4E4E',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Nunito Sans", sans-serif;',
  fontCode: 'monospace',

  // Text colors
  textColor: '#FFF',
  textInverseColor: 'rgba(0,0,0,0.9)',

  // Toolbar default and active colors
  barTextColor: '#121212',
  barSelectedColor: '#121212',
  barBg: '#F3AA00',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#FFF',
  inputBorderRadius: 4,

  brandTitle: 'Share Eat - Lucas',
  brandUrl: 'https://shareeat.com.br',
  brandImage: logo,
});