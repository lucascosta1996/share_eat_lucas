import React from 'react'
import { addParameters, storiesOf } from '@storybook/react'
import { themes } from '@storybook/theming'
import Input from '../Input'
import { useInput } from '../hooks/useInput'

storiesOf('Input', module)
.add("Default", () => {
  const { value: name, bind: bindName, reset: resetName } = useInput( '' )
  return (
    <Input label="Nome do prato" placeholder="Prato" {...bindName} />
  )
})

storiesOf('Input', module)
.add("With currency mask", () => {
  const { value: name, bind: bindName, reset: resetName } = useInput( '' )
  return (
    <Input label="Valor" name="currency" mask="brl" placeholder="R$ 0,00" {...bindName} />
  )
})

storiesOf('Input', module)
.add("As textarea", () => {
  const { value: name, bind: bindName, reset: resetName } = useInput( '' )
  return (
    <Input label="Descrição do prato" placeholder="Insira uma descrição" textarea warningtext="*A descrição deve conter até 200 caracteres." {...bindName} />
  )
})