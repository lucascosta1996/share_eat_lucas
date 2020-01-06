import * as React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import { bool, func, string } from 'prop-types'

import { normalizePathname } from '../helpers/index'
import { addDishButton, cornerPosition, defaultButton, marginLeft, plusButton, resetA, restaurantsButton } from '../utils/styleguide'

const ButtonWrapper = styled.button`
  cursor: pointer;
  ${props => props.plus && plusButton}
  ${props => props.restaurants && restaurantsButton}
  ${props => props.add && addDishButton }
  ${props => props.corner && cornerPosition}
  ${props => props.marginLeft && `margin-left: ${props.marginLeft};`}
  ${props => props.default && defaultButton}

  a {
    ${resetA}
  }
`

function Button( { add, cornerPosition, defaultB, marginLeft, plus, handleClick, label, restaurants, route } ) {
  return (
    <Link
      as={ `/add/${normalizePathname( route )}` }
      href="/add/[restaurant]"
    >
      <ButtonWrapper
        add={ add }
        corner={ cornerPosition }
        default={ defaultB }
        onClick={ handleClick }
        marginLeft={ marginLeft }
        plus={ plus }
        restaurants={ restaurants }
      >
        <a>
          {plus ? '+' : `${label}`}
        </a>
      </ButtonWrapper>
    </Link>
  )
}

Button.propTypes = {
  add: bool,
  cornerPosition: bool,
  defaultB: bool,
  label: string,
  handleClick: func,
  marginLeft: string,
  plus: bool
}

Button.defaultProps = {
  add: false,
  cornerPosition: false,
  defaultB: false,
  label: '',
  handleClick: () => {},
  marginLeft: '0',
  plus: false
}

export default Button