import { number, string } from 'prop-types'
import styled from 'styled-components'
import { colors, cardFontBold, defaultFont, resetMargin } from '../utils/styleguide'
import { formatBRL } from '../helpers/index'

const CardWrapper = styled.div`
  background-color: ${colors.gray100};
  border-radius: 8px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin: 16px 0;
  padding: 12px 0;
  position: relative;
  width: 312px;
  z-index: 1;

  @media (max-width: 520px) {
    margin: 16px auto;
  }

  &:before {
    background-color: ${colors.yellow};
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 6px;
    z-index: -1;
  }

  .dish-card--wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    padding-bottom: 9px;
    
    h2, h3 {
      ${cardFontBold}
      ${resetMargin}
    }
  }

  .description {
    ${defaultFont}
    margin: 0 20px;
  }
`

function DishCard( { description, name, price } ) {
  return (  
    <CardWrapper>
      <section>
        <header className="dish-card--wrapper">
          <h2>
            {name}
          </h2>
          <h3>
            {formatBRL( price )}
          </h3>
        </header>
        <p className="description">
          {description}
        </p>
      </section>
    </CardWrapper>
  )
}

DishCard.propTypes = {
  description: string,
  name: string,
  price: number
}

export default DishCard