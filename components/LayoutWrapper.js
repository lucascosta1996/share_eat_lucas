import Header from './Header'
import styled from 'styled-components'
import { colors, sessionTitle, resetMargin, defaultFont } from '../utils/styleguide'

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 62px;
  max-width: 728px;
  position: relative;

  .page--header {
    h2 {
      ${sessionTitle}
      ${resetMargin}
    }

    span {
      ${defaultFont}
    }

    @media (max-width: 520px) {
      margin: 0 auto;
      width: 311px;
    }  
  }

  .restaurants--list {
    li {
      align-items: center;
      display: flex;

      @media (max-width: 520px) {
        margin: auto;
        width: 311px;
      }
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`

function LayoutWrapper( props ) {
  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  )
}

export default LayoutWrapper