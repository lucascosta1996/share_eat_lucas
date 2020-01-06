export const colors = {
  black: '#121212',
  lightGray: '#FFFFFFDE',
  gray: '#828282',
  gray100: '#464646',
  gray200: '#4E4E4E',
  gray300: '#444444',
  gray400: '#333333',
  grayBackground: '#1F1F1F',
  yellow: '#F3AA00'
}

export const cardFontBold = `
  color: #FFF;
  display: inline;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
`

export const labelFont = `
  color: ${colors.lightGray};
  font-family: 'Nunito Sans', sans-serif;
  letter-spacing: 0;
  opacity: 1;
`

export const belowInputFont  = `
  color: ${colors.gray};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  letter-spacing: 0;
  opacity: 1;
`

export const defaultFont = `
  color: ${colors.gray}; 
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
`

export const sessionTitle = `
  color: ${colors.yellow};
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0.36px;
`

export const plusButton = `
  border-radius: 50px;
`

export const restaurantsButton = `
  border: 1px solid #FFFFFF98;
  background: none;
  color: #FFF;
  font-size: 28px;
  height: 36px;
  padding: 0;
  transition: all .3s ease;
  width: 36px;

  &:hover {
    box-shadow: -2px 3px 19px -1px rgba(0,0,0,0.13);
  }
`

export const addDishButton = `
  border: none;
  background: ${colors.yellow};
  color: #000;
  font-size: 46px;
  height: 64px;
  padding: 0;
  transition: all .3s ease;
  width: 64px;

  &:hover {
    box-shadow: -2px 3px 19px -1px rgba(0,0,0,0.13);
  }
`

export const defaultButton = `
  background: ${colors.yellow};
  border: none;
  border-radius: 4px;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 9px 0 14px 0;
  transition: all .3s ease;
  width: 100%;

  @media (max-width: 520px) {
    width: 311px;
  }

  &:hover {
    box-shadow: -2px 3px 19px -1px rgba(0,0,0,0.13);
  }
`

export const resetMargin = `
  margin: 0;
`

export const resetA = `
  color: unset;
  text-decoration: none;
`

export const marginLeft = `
  margin-left: 20px;
`

export const cornerPosition = `
  bottom: 30px;
  position: fixed;
  right: 24px;
`