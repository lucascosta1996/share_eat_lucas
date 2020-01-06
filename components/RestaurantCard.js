import Link from 'next/link'
import { array, string } from 'prop-types'
import styled from 'styled-components'

import { normalizePathname } from '../helpers/index'
import { cardFontBold, defaultFont, colors, resetMargin } from '../utils/styleguide'

const CardWrapper = styled.div`
  .restaurand-card--wrapper {
    background-color: ${colors.gray400};
    border-radius: 8px;
    box-shadow: 0px 4px 16px #00000029;
    cursor: pointer;
    margin: 8px 0;
    width: 254px;
    padding: 12px 0 17px 0;

    :&hover {
      box-shadow: 0px 4px 16px #00005599;
    }

    header {
      h2 {
        ${cardFontBold}
        ${resetMargin}
        padding-left: 17px;
      }
    }

    p {
      ${defaultFont}
      ${resetMargin}
      padding-left: 17px;
    }
  }
`

function RestaurantCard( { name, itemsQuantity } ) {
  return (  
    <CardWrapper>
      <Link
        as={ `/places/${normalizePathname( name )}` }
        href="/places/[restaurant]"
      >
        <section className="restaurand-card--wrapper">
          <header>
            <h2>
              {name}
            </h2>
          </header>
          <p>
            {`${itemsQuantity} pratos`}
          </p>
        </section>
      </Link>
    </CardWrapper>
  )
}

RestaurantCard.propTypes = {
  name: string,
  menuItems: array
}

export default RestaurantCard