import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../Button'

storiesOf('Button', module).add("Default", () => {
  return <Button defaultB type="submit" label="Salvar" route="" />
})

storiesOf('Button', module).add("Add", () => {
  return <Button add={true} plus={true} route="teste" />
})

storiesOf('Button', module).add("Add 2", () => {
  return <Button restaurants={true} plus={true} route="teste" />
})