import { useState } from "react"
import { currencyTyping, formatBRL } from "../../helpers/index"

export const useInput = () => {
  const [ value, setValue ] = useState( "" )
  const masks = {
    currencyBRL: () => currencyTyping( event.target )
  }

  return {
    value,
    setValue,
    reset: () => setValue( "" ),
    bind: {
      value,
      onChange: event => {
        if( event.target.name === 'brl' ) {
          setValue( masks.currencyBRL )
        } else {
          setValue( event.target.value )
        }
      },
      onKeyUp: event => {
        
      }
    }
  }
}