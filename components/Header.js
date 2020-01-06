import Link from 'next/link'
import Router from 'next/router'
import styled from 'styled-components'
import {useRouter}  from 'next/router'

const HeaderWrapper = styled.header`
  margin: 0 auto;

  @media (max-width: 520px) {
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 311px;
  }

  .logo {
    left: 0;
    margin: 0 auto;
    max-width: 96px;
    position: absolute;
    right: 0;
    top: 17px;
    width: 100%;
  }

  .back-button {
    color: #FFF;
    cursor: pointer;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    line-height: 20px;
    position: absolute;
    top: 17px;
  }

  .hidden {
    display: none;
  }
`

function Header() {
  const router = useRouter()
  const hideBackButton = router.pathname == '/places' ? 'hidden' : ''

  return (
    <HeaderWrapper>
      <Link href="/">
        <img className="logo" src={ require( `../static/logoheader.png` ) } />
      </Link>
      <a
        className={ `back-button ${hideBackButton}` }
        onClick={() => Router.back()}
      >
        { `<` }  
      </a>
    </HeaderWrapper>
  )
}

export default Header;