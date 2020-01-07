import styled from 'styled-components'
import { bool, string } from 'prop-types'

import { belowInputFont, colors, defaultFont, labelFont } from '../utils/styleguide'

const InputWrapper = styled.label`
  ${labelFont}
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  @media (max-width: 520px) {
    margin: 16px auto 0;
    width: 311px;
  }

  input, textarea {
    border: 1px solid #DEDEDF;
    border-radius: 4px;
    box-sizing: border-box;
    height: 38px;
    margin-top: 4px;
    padding: 8px 17px;
    ${defaultFont}
    color: ${colors.black};

    &:placeholder {
      ${defaultFont}
    }

    &:focus {
      box-shadow: -2px 3px 19px -1px rgba(0,0,0,0.53);
      outline: 0;
    }
  }

  textarea {
    height: 136px;
  }

  .alert-text {
    ${belowInputFont}
    padding-top: 5px;
  }
`

function Input( props ) {
  return (
    <InputWrapper>
      {props.label}
      {
        props.textarea ? (
          <textarea type="text" {...props } maxLength={200} />
        ) : (
          <input type="text" {...props} name={ props.mask } />
        )
      }
      {
        props.warningtext && (
          <span className="alert-text">
            {props.warningtext}
          </span>
        )
      }
    </InputWrapper>
  )
}

Input.propTypes = {
  label: string,
  name: string,
  textarea: bool
}

export default Input